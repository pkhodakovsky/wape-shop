<template>
  <div id="app">
    <h1 class="hide" style="display: none;">
      Royal vape. Vapes. Вейпы. Liquids. Жидкости. Ukraine. Украина
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
        <a href="tel:0981131301">(098) 113 1301</a>
        <a href="tel:0938320118">(093) 832 0118</a>
        <a href="tel:0631502741">(063) 150 2741</a>
        <a href="tel:0994988959">(099) 498 8959</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

import Cart from '@/components/Cart.vue';

export default {
  components: {
    Cart,
  },
  methods: {
    ...mapMutations('cart', ['setCart']),
  },
  beforeMount() {
    this.setCart({ cart: JSON.parse(localStorage.getItem('royal-vape-cart')), filter: true });
  },
};
</script>
<style>
  @import '../public/src/css/main.css';
  @import '../public/src/css/styles.css';
</style>
