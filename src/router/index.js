import { createRouter, createWebHistory } from "vue-router";
import CurrencyConversion from "../views/CurrencyConversion.vue";
import ExchangeRates from "../views/ExchangeRates.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "currency-conversion",
      component: CurrencyConversion,
    },
    {
      path: "/rates",
      name: "exchange-rates",
      component: ExchangeRates,
    },
  ],
});

export default router;
