<template>
  <div class="other">
    <div class="img">
      <img :src="item.images[0]" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost">Стоимость: {{ cost }} грн.</span>
    </div>
    <AddToCart :item="item"
               :selectedTypeIndex="selectedTypeIndex"
               @addItem="$emit('addItem', $event)">
    </AddToCart>
  </div>
</template>

<script>
import AddToCart from '@/components/shop/AddToCart.vue';
import ShopItemMixin from '@/mixins/shop-item.ts';

export default {
  name: 'Other',
  components: {
    AddToCart,
  },
  mixins: [
    ShopItemMixin,
  ],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .liquid >>> .add-to-cart {
    width: 16em;
  }
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
  .add-to-cart {
    display: flex;
    width: 12em;
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
