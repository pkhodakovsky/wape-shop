<template>
  <div class="liquid">
    <div class="img">
      <img :src="item.images[0]" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost" :class="{ action: item.actionCost }">
        Стоимость:
        <span class="action-cost" v-if="item.actionCost">
          <span style="text-decoration: line-through; text-decoration-color: #555;">
            <b>{{ cost }} грн.</b>
          </span>
          <span> {{ actionCost }} грн.</span>
        </span>
        <span v-else>{{ cost }} грн.</span>
      </span>
    </div>
    <AddToCart :item="item"
               :selectedTypesIndexes="selectedTypesIndexes"
               @addItem="$emit('addItem', $event)">
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
    white-space: pre-wrap;
  }
  .data .name {
    color: #fff;
    font-weight: bold;
    margin: 0;
  }
  .add-to-cart {
    display: flex;
  }
  .select-name,
  .add-to-cart .strength {
    height: 2em;
    padding: 0 .5em;
  }
  .select-name option,
  .add-to-cart .strength option {
    background-color: #000;
  }
  .select-name {
    width: 10em;
    margin: .5em 0;
  }
  .add-to-cart .strength {
    width: 4em;
  }

  @media screen and (max-width: 1023px) {
    .img img {
      width: 320px;
    }
    .name,
    .cost {
      text-align: center;
    }
    .select-name {
      margin: 0.5em auto;
    }
  }
</style>
