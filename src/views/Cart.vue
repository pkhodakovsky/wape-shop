<template>
  <div class="cart">
    <div class="inner">
      <h2>Корзина:</h2>
      <div class="items-wrapper" v-if="items.length">
        <div class="cart-item" v-for="item in cartItems" :key="item.cartId">
          <img width="256px" height="auto" :src="item.images[0]" :alt="item.name"/>
          <h4 class="name">{{ item.name }}</h4>
          <span v-if="item.types">
            {{ item.types }}
          </span>
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
      </div>
      <div class="items-wrapper empty" v-else>
        <h2>Корзина пуста</h2>
      </div>
      <div class="amount" v-if="items.length">Total: {{ amount | amountFilter }}</div>
      <OrderForm v-if="items.length"
                 :cart="cartItems"
                 @checkout="onCheckout"></OrderForm>
    </div>
    <OrderSuccessPopup v-if="isShowPopup"></OrderSuccessPopup>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import { amount as amountFilter, parseCartId } from '@/utils';
import OrderForm from '@/components/cart/OrderForm.vue';
import RemoveItemIcon from '@/components/cart/RemoveItemIcon.vue';
import OrderSuccessPopup from '@/components/cart/OrderSuccessPopup.vue';

export default {
  name: 'Cart',
  components: {
    OrderForm,
    RemoveItemIcon,
    OrderSuccessPopup,
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
    ...mapActions('cart', ['updateItem', 'removeItem']),
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

  @media screen and (max-width: 1023px) {
    .cart-item {
      flex-direction: column;
      text-align: center;
    }
    .cart-item img {
      width: 256px;
    }
    .cart-item .name,
    .cart-item .item-amount {
      margin-top: 1em;
    }
  }
</style>
