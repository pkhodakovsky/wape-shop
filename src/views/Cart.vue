<template>
  <div class="cart">
    <div class="inner">
      <h2>Корзина:</h2>
      <div class="items-wrapper">
        <div class="cart-item" v-for="item in items" :key="item.id">
          <img width="128px" height="128px" :src="item.image" :alt="item.name"/>
          <span class="name">{{ item.name }}</span>
          <span class="cost">{{ item.cost | amountFilter }}</span>
          x
          <input type="number" min="0" max="100" v-model="item.count"
                 @change="updateItem({ id: item.id, count: +item.count })"/>
          <span class="item-amount">{{ item.cost * (+item.count) | amountFilter }}</span>
          <div class="remove-item button special" @click="removeItem({ id: item.id })">Удалить</div>
        </div>
      </div>
      <div class="amount">Total: {{ amount | amountFilter }}</div>
      <div class="checkout button special">Оформить заказ</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import { amount as amountFilter } from '@/utils';

export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['amount']),
  },
  filters: {
    amountFilter,
  },
  methods: {
    ...mapActions('cart', ['updateItem', 'removeItem']),
  },
};
</script>

<style scoped>
  .cart {
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 4.25em;
    background-image: url('../../public/images/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
  }
  .inner {
    width: 80rem;
    margin: 0 auto;
  }
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    background-color: rgba(0, 0, 0, .75);
    padding: 1em 4em;
  }
  .cart-item .name {
    width: 50%;
  }
  .amount {
    padding: 20px 0;
  }
</style>
