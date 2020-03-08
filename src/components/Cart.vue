<template>
  <router-link to="/cart" class="cart-icon">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="38px" height="100%"
         viewBox="221.4 359.3 267 123" data-hook="svg-icon-8">
      <rect x="221.4" y="403.7" width="152.4" height="8"></rect>
      <path
        d="M345.9 482.3h-96.4c-1.2 0-2.4-1.2-3-2.4l-19.6-70.8 6-1.8 19.1 68.5h92.3l19-68.5 6 1.8
        -19.6 70.8C348.2 481.1 347 482.3 345.9 482.3z"></path>
      <rect x="259" y="380.1" transform="matrix(-0.527 -0.8498 0.8498 -0.527 109.9867 827.3946)"
            width="52.4" height="8"></rect>
      <rect x="292.3" y="424.5" width="10.7" height="10.7"></rect>
      <rect x="315.5" y="424.5" width="10.7" height="10.7"></rect>
      <rect x="269.1" y="424.5" width="10.7" height="10.7"></rect>
      <rect x="292.3" y="447.7" width="10.7" height="10.7"></rect>
      <rect x="315.5" y="447.7" width="10.7" height="10.7"></rect>
      <rect x="269.1" y="447.7" width="10.7" height="10.7"></rect>
      <text x="390" y="474" text-anchor="start" class="_1INsc _3KKRv" data-hook="items-count">
        2
      </text>
    </svg>
    <span class="amount" :class="{ combined: amount.dollars }">
      <span>{{ amountFilter(amount.default) }}</span>
      <span v-if="amount.dollars"> + {{ amountFilter(amount.dollars, '$') }}</span>
    </span>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

import { amount as amountFilter } from '@/utils';

export default {
  name: 'Cart',
  data() {
    return {
    };
  },
  methods: {
    amountFilter,
  },
  computed: {
    ...mapGetters('cart', ['amount']),
  },
};
</script>

<style scoped>
  .cart-icon {
    display: inline-flex;
    align-items: center;
    min-width: 38px;
    height: 18px;
    cursor: pointer;
    padding-right: 20px;
  }
  circle, path, polygon, polyline, rect {
    fill: #A29C9C;
  }
  .amount {
    padding-top: 8px;
    color: #a6a6a6;
  }
  @media screen and (max-width: 374px) {
    .amount.combined {
      font-size: 12px;
    }
  }
</style>
