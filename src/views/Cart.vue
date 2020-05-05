<template>
  <div class="cart">
    <div class="inner">
      <h2>Корзина:</h2>
      <div class="items-wrapper" v-if="items.length">
        <CartItem v-for="item in cartItems"
                  :key="item.cartId"
                  :item="item"></CartItem>
      </div>
      <div class="items-wrapper empty" v-else>
        <h2>Корзина пуста</h2>
      </div>
      <div class="amount" v-if="items.length">
        <span>Total: {{ amountFilter(amount.default) }}</span>
        <span v-if="amount.dollars"> + {{ amountFilter(amount.dollars, '$') }}</span>
      </div>
      <OrderForm v-if="items.length"
                 :cart="cartItems"
                 @checkout="setOrderSuccessStatus(true)"></OrderForm>
    </div>
    <OrderSuccessPopup v-if="isShowPopup"></OrderSuccessPopup>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import { amount as amountFilter, parseCartId } from '@/utils';
import CartItem from '@/components/cart/CartItem.vue';
import OrderForm from '@/components/cart/OrderForm.vue';
import OrderSuccessPopup from '@/components/cart/OrderSuccessPopup.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
    OrderForm,
    OrderSuccessPopup,
  },
  data() {
    return {
      isShowPopup: false,
    };
  },
  computed: {
    ...mapState(['shopItems']),
    ...mapState('cart', ['items', 'orderSuccess']),
    ...mapGetters('cart', ['amount']),
    cartItems() {
      return this.items
        .map((item) => {
          const cartId = item.id;
          const cartItem = parseCartId(cartId);
          const shopItem = this.shopItems.items.find(({ id }) => id === cartItem.id);
          const foundTypes = cartItem.types
            .map((type) => {
              const shopType = shopItem.types.find(({ id }) => type.id === id);
              const typeData = shopType
                .values
                .find(({ id }) => type.value === id);
              return {
                label: shopType.label,
                value: typeData.value,
                cost: typeData.cost,
              };
            });
          return {
            ...shopItem,
            cartId,
            types: foundTypes,
            count: item.count,
            cost: (shopItem.actionCost || shopItem.cost) + foundTypes
              .reduce((additionalCost, type) => additionalCost + (type.cost || 0), 0),
          };
        });
    },
  },
  methods: {
    ...mapActions('cart', ['setOrderSuccessStatus']),
    amountFilter,
  },
  mounted() {
    if (this.orderSuccess) {
      this.isShowPopup = true;
      setTimeout(() => {
        this.setOrderSuccessStatus(false);
        this.isShowPopup = false;
      }, 2000);
    }
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
    padding-bottom: 2em;
  }
  .items-wrapper.empty {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7);
  }
</style>
