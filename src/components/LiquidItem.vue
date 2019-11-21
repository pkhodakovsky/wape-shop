<template>
  <div class="box">
    <div class="image fit">
      <img :src="image"
           alt="" width="100%" height="auto"/>
    </div>
    <div class="content">
      <header class="align-center">
        <h2 v-html="title"></h2>
      </header>
      <hr/>
      <ul>
        <li v-for="(item, index) in list" :key="index" v-html="item"></li>
      </ul>
    </div>
    <div class="open-popup" @click="openPopup({ id })">Подробнее</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'LiquidItem',
  data() {
    return {
      isOpened: false,
    };
  },
  props: {
    id: String,
    image: String,
    title: String,
    list: Array,
  },
  methods: {
    ...mapMutations('liquidDetails', ['openPopup']),
  },
};
</script>

<style scoped>
  .open-popup {
    width: 100%;
    background-color: grey;
    padding: 5px 0;
    border-radius: 10px;
    text-align: center;
  }
</style>
