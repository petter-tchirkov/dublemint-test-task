<template>
  <section class="rates">
    <h2 class="rates__heading">Currency Exchange Rates</h2>
    <section class="rates__content">
      <Dropdown :options="currencies" :default-selection="'USD'" @select="(option) => initialCurrency = option" />
      <div class="rates__results" v-for="(rate, key, index) in filteredRates" :key="index">
        <p>{{ key }}</p>
        <p>{{ rate }}</p>
      </div>
    </section>
    <section class="rates__actions">
      <Button @click="toggleModal" :text="'Add Currency'" />
      <Button :disabled="isRefreshing" :text="'Refresh'" @click="refreshRates" />
    </section>
    <Modal v-if="modalSeen" :toggleModal="toggleModal">
      <div class="rates__specify specify">
        <h3>Please specify the currency</h3>
        <Input :type="'text'" v-model="newCurrency" />
        <Button :text="'Add'" @click="addCurrency" />
      </div>
    </Modal>
    <Transition name="toast">
      <Toast v-if="toastShown" :type="toastType">
        <h3>{{ toastMessage }}</h3>
      </Toast>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios'
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Dropdown from '../components/Dropdown.vue';
import Toast from '../components/Toast.vue'

const initialCurrency = ref('usd')
const exchangeRates = ref({})
const isRefreshing = ref(false)
let modalSeen = ref(false)
let currencies = ['USD', 'EUR', 'UAH', 'BTC', 'ETH']
const newCurrency = ref('')

let toastShown = ref(false)
let toastMessage = ref('')
let toastType = ref('')


const filteredRates = computed(() => {
  return Object.fromEntries(Object.entries(exchangeRates.value).filter(([key]) => !key.includes(initialCurrency.value.toUpperCase())));
})


const fetchRates = async () => {
  await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${initialCurrency.value}&tsyms=${currencies}&api__key=6d0525648060235a532c35cd493d35baf8c106f41d8cc1b23795a069c0ebe9d5`)
    .then((response) => {
      exchangeRates.value = response.data
    })
}

const refetchRates = async () => {
  await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${initialCurrency.value}&tsyms=${currencies}&api__key=6d0525648060235a532c35cd493d35baf8c106f41d8cc1b23795a069c0ebe9d5`)
    .then((response) => {
      if (Object.keys(response.data).length > (currencies.length - 1)) {
        exchangeRates.value = response.data
        showToast('success', 'Currency added')
      } else {
        showToast('error', 'Currency not found')
      }
    })
}


const refreshRates = () => {
  fetchRates()
  isRefreshing.value = true
  setTimeout(() => {
    isRefreshing.value = false
  }, 5000)
}

const toggleModal = () => {
  modalSeen.value = !modalSeen.value
}

const addCurrency = () => {
  currencies.push(newCurrency.value)
  toggleModal()
  refetchRates()
}

const showToast = (type, message) => {
  toastShown.value = true
  toastMessage.value = message
  toastType.value = type
  setTimeout(() => {
    toastShown.value = false
  }, 3000)
}

onMounted(() => {
  fetchRates()
})

watch(initialCurrency, () => {
  fetchRates()
})

</script>

<style lang="scss" scoped>
.rates {
  &__dropdown {
    display: flex;
    width: 100%;
    margin-bottom: 16px;
  }

  &__results {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border: 2px solid var(--vivid);
    border-radius: 8px;
    margin-bottom: 10px;
    padding-inline: 16px;
    margin-bottom: 24px;
    font-size: 18px;
    position: relative;

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: var(--gray66);
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
}

.specify {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__input {
    flex: 1 1 1;
    height: 32px;
  }
}


.toast-enter-from {
  opacity: 0;
  transform: translateX(200px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.toast-enter-active {
  transition: all 0.3s ease-in;
}

.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}
</style>