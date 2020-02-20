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
      <div class="amount" v-if="items.length">Total: {{ amount | amountFilter }}</div>
      <OrderForm v-if="items.length"
                 :cart="cartItems"
                 @checkout="onCheckout"></OrderForm>
    </div>
    <div class="order-success" v-if="isShowPopup">
      <h2>Спасибо за Ваш заказ</h2>
      <p>Ожидайте звонка представителя</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { amount as amountFilter, parseCartId } from '@/utils';
import CartItem from '@/components/cart/CartItem.vue';
import OrderForm from '@/components/cart/OrderForm.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
    OrderForm,
  },
  data() {
    return {
      isShowPopup: false,
    };
  },
  computed: {
    ...mapState(['shopItems']),
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['amount']),
    cartItems() {
      return this.items
        .map((item) => {
          const cartId = item.id;
          const cartItem = parseCartId(cartId);
          const shopItem = this.shopItems.items.find(({ id }) => id === cartItem.id);
          const foundTypes = cartItem.types
            .map(type => shopItem.types.find(({ id }) => type.id === id)
              .values
              .find(({ id }) => type.value === id));
          return {
            ...shopItem,
            cartId,
            types: foundTypes.map(type => type.value).join('; '),
            count: item.count,
            cost: shopItem.cost + foundTypes
              .reduce((additionalCost, type) => additionalCost + (type.cost || 0), 0),
          };
        });
    },
  },
  filters: {
    amountFilter,
  },
  methods: {
    onCheckout() {
      this.isShowPopup = true;
      setTimeout(() => { this.isShowPopup = false; }, 2000);
    },
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

  .order-success {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: 10em;
    border-radius: 10px;
    background-color: greenyellow;
    text-align: center;
    color: #000;
  }
</style>
