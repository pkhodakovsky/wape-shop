<template>
  <div class="add-to-cart">
    <select class="strength">
      <option
        v-for="(itemStrength, index) in item.types"
        :key="index"
        :selected="index === 0"
        :value="itemStrength">{{ itemStrength }} mg
      </option>
    </select>
    <svg viewBox="0 0 22 2" id="icon-minus" class="minus">
      <path d="M1115.02,480.993a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2h-20Z"
            transform="translate(-1114 -479)"></path>
    </svg>
    <input class="count" type="number" min="1" max="1000" value="1"/>
    <svg viewBox="0 0 22 22" id="icon-plus" class="plus">
      <path
        d="M1233.02,493.993v-9h-9a1,1,0,0,1,0-2h9v-9a1,1,0,1,1,2,0v9h9a1,1,0,0,1,0,
                2h-9v9A1,1,0,0,1,1233.02,493.993Z"
        transform="translate(-1223 -473)"></path>
    </svg>
    <CartIcon :item="item" @click="$emit('addItem', {
              id: item.id,
              type: item.types && item.types[0],
              count: 1,
            })"></CartIcon>
  </div>
</template>

<script>
import CartIcon from '@/components/CartIcon.vue';

export default {
  name: 'AddToCard',
  components: {
    CartIcon,
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
  .add-to-cart {
    position: absolute;
    right: 2em;
    bottom: 1em;
    width: 16em;
    height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .add-to-cart .strength {
    width: 4em;
    height: 2em;
    padding: 0 .5em;
  }
  .add-to-cart .strength option {
    background-color: #000;
  }
  .add-to-cart .minus,
  .add-to-cart .plus {
    width: 1em;
    height: 1em;
  }
  .add-to-cart .minus,
  .add-to-cart .plus {
    fill: #fff;
  }
  .add-to-cart .count {
    width: 3em;
    height: 1.5em;
    text-align: center;
  }
</style>
