<template>
  <div class="liquid">
    <div class="img">
      <img :src="item.image" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost">Стоимость: {{ cost }} грн.</span>
    </div>
    <AddToCart :item="item"
               :selectedTypeIndex="selectedTypeIndex"
               @addItem="$emit('addItem', $event)">
      <select class="strength" slot="pre">
        <option
          v-for="(strength, index) in item.types"
          :key="index"
          :selected="index === selectedTypeIndex"
          :value="strength.value"
          @change="select(index)">{{ strength.value }} mg
        </option>
      </select>
    </AddToCart>
  </div>
</template>

<script>
import AddToCart from '@/components/shop/AddToCart.vue';
import ShopItemMixin from '@/mixins/shop-item.ts';

export default {
  name: 'Liquid',
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
    width: 16em;
  }
  .strength {
    width: 4em;
    height: 2em;
    padding: 0 .5em;
  }
  .strength option {
    background-color: #000;
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
