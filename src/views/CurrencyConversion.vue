<template>
  <section class="convert">
    <h2 class="convert__heading">Currency Converter</h2>
    <Input inputmode="numeric" :type="'number'" v-model="fromQuantity" @input="convertCurrencies" />
    <section class="convert__content">
      <div class="convert__from">
        <Dropdown :options="currencies" @change="convertCurrencies" :default-selection="'USD'"
          @select="(option) => from = option" />
      </div>
      <SwapIcon @click="swapCurrencies" />
      <div class="convert__to">
        <Dropdown :options="currencies" @change="convertCurrencies" :default-selection="'BTC'"
          @select="(option) => to = option" />
      </div>
    </section>
    <section class="convert__result">
      <p class="convert__conversion-result">{{ fromQuantity }} <span>{{ from.toUpperCase() }}</span> = {{ conversionResult
      }} <span>{{ to.toUpperCase()
}}</span></p>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import Dropdown from '../components/Dropdown.vue'
import SwapIcon from '../components/SwapIcon.vue';
import Input from '../components/Input.vue'

const currencies = ['USD', 'EUR', 'UAH', 'BTC', 'ETH', 'BNB', 'XRP']
let from = ref('usd')
let to = ref('btc')
const fromQuantity = ref(1)
const conversionResult = ref('')

const convertCurrencies = async () => {
  await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${from.value}&tsyms=${to.value}&api__key=6d0525648060235a532c35cd493d35baf8c106f41d8cc1b23795a069c0ebe9d5`)
    .then(response => conversionResult.value = Object.values(response.data)[0] * fromQuantity.value)
}

const swapCurrencies = () => {
  const temp = from
  from = to
  to = temp
  convertCurrencies()
}

onMounted(() => {
  convertCurrencies()
})


watch(fromQuantity, (newValue) => {
  fromQuantity.value = newValue > 10000 ? 10000 : newValue
  return { fromQuantity };
});

watch(from, () => {
  convertCurrencies()
})
watch(to, () => {
  convertCurrencies()
})

</script>

<style lang="scss" scoped>
.convert {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__from,
  &__to {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__conversion-result {
    text-align: center;
    font-size: 24px;

    span {
      color: var(--default);
    }
  }
}
</style>