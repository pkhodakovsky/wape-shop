<template>
  <div class="other" :class="{ [item.subtype]: true }">
    <div class="img">
      <img :src="item.images[0]" :alt="item.name" width="320px" height="auto">
    </div>
    <div class="data">
      <h4 class="name">{{ item.name }}</h4>
      <span class="descr" v-html="item.description"></span><br/>
      <span class="cost">Стоимость: {{ calculatedCost }} грн.</span>
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
      <span slot="pre" class="pre" v-if="spiralType">
        <select class="spiral" @change="selectSpiralType">
          <option
            v-for="(spiral, index) in spiralType.values"
            :key="index"
            :selected="index === selectedTypesIndexes.spiral"
            :value="spiral.value">{{ spiral.value }}
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
      spiralType: this.item.subtype === 'spiral' && this.findType('type'),
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
    selectSpiralType(event) {
      const { value } = event.target;
      this.selectedTypesIndexes.spiral = this.spiralType.values
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
  .add-to-cart .count,
  .add-to-cart .spiral {
    height: 2em;
    padding: 0 .5em;
  }
  .other.accum .add-to-cart {
    width: 17em;
  }
  .other.spiral .add-to-cart {
    width: 22em;
  }
  .other.accum .add-to-cart .count {
    width: 5em;
  }
  .other.spiral .add-to-cart .spiral {
    width: 10em;
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
    .other.spiral {
      padding-bottom: 7em;
    }
    .other.spiral .add-to-cart {
      height: 5em;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
