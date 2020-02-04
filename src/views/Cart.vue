<template>
  <div class="cart">
    <div class="inner">
      <h2>Корзина:</h2>
      <div class="items-wrapper" v-if="items.length">
        <div class="cart-item" v-for="item in items" :key="item.id">
          <img width="256px" height="auto" :src="item.image" :alt="item.name"/>
          <h4 class="name">{{ item.name }}</h4>
          <span class="item-amount">
            <span class="cost">{{ item.cost | amountFilter }}</span>
            x
            <input type="number" min="0" max="100" v-model="item.count"
                   @change="updateItem({ id: item.id, count: +item.count })"/>
            &nbsp;
            <span class="item-amount">{{ item.cost * (+item.count) | amountFilter }}</span>
          </span>
          <div class="remove-item" @click="removeItem({ id: item.id })">
            <svg viewBox="0 0 24.99 24.99" id="icon-close-empty">
              <path
                d="M18.15,6.84a1,1,0,0,0-1.41,0l-4.24,4.24L8.25,6.84A1,1,0,0,0,6.84,8.25l4.24,
                4.24L6.84,16.74a1,1,0,1,0,1.41,1.41l4.24-4.24,4.24,4.24a1,1,0,0,0,
                1.41-1.41l-4.24-4.24,4.24-4.24A1,1,0,0,0,18.15,6.84Z"></path>
              <path
                d="M21.33,3.65a12.49,12.49,0,1,0,0,17.68A12.52,12.52,0,0,0,21.33,3.65Zm-.71,
                17a11.49,11.49,0,1,1,0-16.26A11.51,11.51,0,0,1,20.63,20.63Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="items-wrapper empty" v-else>
        <h2>Корзина пуста</h2>
      </div>
      <div class="amount" v-if="items.length">Total: {{ amount | amountFilter }}</div>
      <div class="checkout button special" v-if="items.length">Оформить заказ</div>
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
    max-width: 95vw;
    margin: 0 auto;
  }
  .items-wrapper.empty {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7);
  }
  .cart-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .75);
    padding: 1em 4em;
    transition: box-shadow .25s;
  }
  .cart-item:hover {
    box-shadow: 0 0 15px 2px #565656;
  }
  .cart-item img {
    width: 128px;
  }
  .cart-item .name {
    width: 50%;
    margin: 0;
  }
  .amount {
    padding: 20px 0;
  }
  .cart-item .remove-item {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
  }
  .cart-item .remove-item svg {
    fill: gray;
  }
  .cart-item .remove-item:hover svg {
    fill: white;
  }

  @media screen and (max-width: 1023px) {
    .cart-item {
      flex-direction: column;
      text-align: center;
    }
    .cart-item img {
      width: 256px;
    }
    .cart-item .name,
    .cart-item .item-amount,
    .cart-item .remove-item {
      margin-top: 1em;
    }
  }
</style>
