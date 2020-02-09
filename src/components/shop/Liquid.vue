<template>
  <div class="liquid">
    <div class="img">
      <img :src="item.image" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost">Стоимость: {{ item.cost }} грн.</span>
    </div>
    <AddToCart :item="item"
               @addItem="$emit('addItem', $event)"></AddToCart>
  </div>
</template>

<script>
import AddToCart from '@/components/shop/AddToCart.vue';

export default {
  name: 'Liquid',
  components: {
    AddToCart,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .img img {
    width: 160px;
  }
  .data {
    width: 100%;
    margin: 0 1em;
  }
  .data .name {
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 1023px) {
    .img img {
      width: 320px;
    }
    .name,
    .cost {
      text-align: center;
    }
  }
</style>
