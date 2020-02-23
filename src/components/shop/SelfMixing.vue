<template>
  <div class="self-mixing" :class="{ [item.subtype]: true }">
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
      <span slot="pre" class="pre" v-if="compositionType && strengthType">
        <select class="composition" v-if="compositionType" @change="selectCompositionType">
          <option
            v-for="(composition, index) in compositionType.values"
            :key="index"
            :selected="index === selectedTypesIndexes.composition"
            :value="composition.id">{{ composition.value }}
          </option>
        </select>
        <select class="strength" v-if="strengthType" @change="selectStrengthType">
          <option
            v-for="(strength, index) in strengthType.values"
            :key="index"
            :selected="index === selectedTypesIndexes.strength"
            :value="strength.value">{{ strength.value }}
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
  name: 'SelfMixing',
  components: {
    AddToCart,
  },
  mixins: [
    ShopItemMixin,
  ],
  data() {
    return {
      compositionType: this.item.subtype === 'base' && this.findType('composition'),
      strengthType: this.item.subtype === 'base' && this.findType('strength'),
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
      if (this.strengthType) {
        this.calculatedCost = this.item.cost + (this.strengthType
          .values[this.selectedTypesIndexes.strength].cost || 0);
      }
    },
    selectCompositionType(event) {
      const { value } = event.target;
      this.selectedTypesIndexes.composition = this.compositionType.values
        .findIndex(({ id }) => id === value);
    },
    selectStrengthType(event) {
      const { value } = event.target;
      this.selectedTypesIndexes.strength = this.strengthType.values
        .findIndex(type => type.value === value);
      this.updateCost();
    },
  },
  beforeMount() {
    this.updateCost();
  },
};
</script>

<style scoped>
  .self-mixing >>> .add-to-cart {
    width: 11em;
  }
  .self-mixing.base >>> .add-to-cart {
    width: 22em;
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
  .add-to-cart .composition,
  .add-to-cart .strength {
    height: 2em;
    padding: 0 .5em;
  }
  .add-to-cart .composition option,
  .add-to-cart .strength option {
    background-color: #000;
  }
  .add-to-cart .pre {
    width: 11em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .add-to-cart .composition {
    width: 6em;
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
    .self-mixing.base {
      padding-bottom: 7em;
    }
    .self-mixing.base .add-to-cart {
      height: 5em;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
