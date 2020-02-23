<template>
  <div class="cart-item">
    <img width="256px" height="auto" :src="item.images[0]" :alt="item.name"/>
    <h4 class="name">{{ item.name }}</h4>
    <CartItemType v-if="item.types"
                  :item="item"></CartItemType>
    <span v-else></span>
    <span class="item-amount">
            <span class="cost">{{ item.cost | amountFilter }}</span>
            x
            <input type="number" min="0" max="100" v-model="item.count"
                   @change="updateItem({
                    cartId: item.cartId,
                    count: +item.count,
                   })"/>
            &nbsp;
            <span class="item-amount">{{ item.cost * (+item.count) | amountFilter }}</span>
          </span>
    <RemoveItemIcon @click="removeItem({ cartId: item.cartId })"></RemoveItemIcon>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { amount as amountFilter } from '@/utils';
import CartItemType from '@/components/cart/CartItemType.vue';
import RemoveItemIcon from '@/components/cart/RemoveItemIcon.vue';

export default {
  name: 'CartItem',
  components: {
    CartItemType,
    RemoveItemIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
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
  .cart-item .item-amount {
  }
  .cart-item .item-amount input[type=number] {
    width: initial;
    display: initial;
    text-align: center;
    padding: 0;
  }
  .cart-item .remove-item svg {
    fill: gray;
  }
  .cart-item .remove-item:hover svg {
    fill: white;
  }
  .item-amount input::-webkit-inner-spin-button {
    display: none;
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
