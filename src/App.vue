<template>
  <div id="app">
    <h1 class="hide" style="display: none;">
      Royal vape. Liquids. Жидкости. Ароматические добавки. Ukraine. Украина
    </h1>

    <!-- Header -->
    <header id="header" class="alt">
      <div class="logo"><router-link to="/">Royal Vape</router-link></div>
      <Cart/>
      <a href="#menu" class="toggle"><span>Menu</span></a>
    </header>

    <!-- Nav -->
    <nav id="menu">
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
      </ul>

      <div id="social">
        <div id="instagram" class="social-button">
          <a href="https://www.instagram.com/royalvape_rv/" target="_blank">
            <img src="../public/images/instagram_icon.png"
                 alt="Instagram" width="30px" height="30px">
          </a>
        </div>
        <div id="facebook" class="social-button">
          <a href="https://www.facebook.com/groups/royalvape.rv" target="_blank">
            <img src="../public/images/facebook_icon.png"
                 alt="Facebook" width="30px" height="30px">
          </a>
        </div>
        <div id="olx" class="social-button">
          <a href="http://olx.ua/list/user/89KOa/" target="_blank">
            <img src="../public/images/olx_icon.png"
                 alt="OLX" width="30px" height="30px">
          </a>
        </div>
      </div>
      <div id="tels">
        <a href="tel:0631502741">(063) 150 2741</a>
        <a href="tel:0938320118">(093) 832 0118</a>
        <a href="tel:0960495040">(096) 049 5040</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

import { parseCartId } from './utils';
import Cart from '@/components/Cart.vue';

export default {
  components: {
    Cart,
  },
  computed: {
    ...mapState(['shopItems']),
  },
  methods: {
    ...mapMutations('cart', ['setCart']),
    validateCart(storageCart) {
      const cart = JSON.parse(storageCart);
      if (cart.orderSuccess
        || !(cart instanceof Object)
        || !(cart.items instanceof Array)) {
        return {
          orderSuccess: cart.orderSuccess,
          items: [],
        };
      }
      return {
        ...cart,
        items: cart.items
          .filter(({ id, count }) => count || id)
          .filter((cartItem) => {
            const { id, types } = parseCartId(cartItem.id);
            return this.shopItems.items.findIndex(item => item.id === id
              && (!types.length
                || types.every(type => item.types.find(itemType => itemType.id === type.id)
                  .values
                  .findIndex(typeValue => typeValue.id === type.value) !== -1))) !== -1;
          }),
      };
    },
  },
  beforeMount() {
    this.setCart(this.validateCart(localStorage.getItem('royal-vape-cart')));
  },
};
</script>
<style>
  @import '../public/src/css/main.css';
  @import '../public/src/css/styles.css';

  #app {
    height: 100%;
    user-select: none;
  }
</style>
