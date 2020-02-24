<template>
  <div class="other" :class="{ [item.subtype]: true }">
    <div class="img">
      <img :src="item.images[0]" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost">Стоимость: {{ cost }} грн.</span>
    </div>
    <AddToCart :item="item"
               :selectedTypesIndexes="selectedTypesIndexes"
               @addItem="$emit('addItem', $event)">
      <span slot="pre" class="pre" v-if="countType">
        <select class="count" @change="selectCountType">
          <option
            v-for="(count, index) in countType.values"
            :key="index"
            :selected="index === selectedTypesIndexes.count"
            :value="count.value">{{ count.value }}
          </option>
        </select>
      </span>
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
  data() {
    return {
      countType: this.item.subtype === 'accum' && this.findType('count'),
      calculatedCost: this.item.cost,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateCost() {
      if (this.countType) {
        this.calculatedCost = this.item.cost + (this.countType
          .values[this.selectedTypesIndexes.count].cost || 0);
      }
    },
    selectCountType(event) {
      const { value } = event.target;
      this.selectedTypesIndexes.count = this.countType.values
        .findIndex(type => type.value === value);
      this.updateCost();
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
    font-weight: bold;
    margin: 0;
  }
  .add-to-cart {
    display: flex;
    width: 11em;
  }
  .other.accum .add-to-cart {
    width: 17em;
  }
  .other.accum .add-to-cart .count {
    width: 5em;
  }

  @media screen and (max-width: 1023px) {
    .img img {
      width: 320px;
    }
    .name,
    .cost {
      text-align: center;
    }
    .other.accum .add-to-cart .count {
      width: 5em;
    }
  }
</style>
