<template>
  <div class="add-to-cart">
    <slot name="pre"></slot>
    <span class="count-handler">
      <div class="minus" @click="decrement">
        <svg viewBox="0 0 22 2" id="icon-minus" class="minus">
          <path d="M1115.02,480.993a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2h-20Z"
                transform="translate(-1114 -479)"></path>
        </svg>
      </div>
      <input class="count" type="number" min="1" max="1000" v-model="count"/>
      <div class="plus" @click="increment">
        <svg viewBox="0 0 22 22" id="icon-plus" class="plus">
          <path
            d="M1233.02,493.993v-9h-9a1,1,0,0,1,0-2h9v-9a1,1,0,1,1,2,0v9h9a1,1,0,0,1,0,
                    2h-9v9A1,1,0,0,1,1233.02,493.993Z"
            transform="translate(-1223 -473)"></path>
        </svg>
      </div>
      <CartIcon :item="item" @click="$emit('addItem', {
                count,
                id: item.id,
                types: item.types.map(({ id, values }) => ({
                  id,
                  value: values[selectedTypesIndexes[id]].id,
                })),
              })"></CartIcon>
    </span>
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
    selectedTypesIndexes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increment() {
      if (this.count < 999) {
        this.count += 1;
      }
    },
    decrement() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
  },
};
</script>

<style scoped>
  .add-to-cart {
    position: absolute;
    right: 2em;
    bottom: 1em;
    width: 11em;
    height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .count-handler {
    width: 11em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    height: 2em;
    text-align: center;
  }
  .add-to-cart select option {
    background-color: #000;
  }
  input.count::-webkit-inner-spin-button {
    display: none;
  }
</style>
