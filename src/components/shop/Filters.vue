<template>
  <div class="filters" :class="{ expand }">
    <h3 class="label" @click="expand = !expand">Фильтры:</h3>
    <div class="name">
      <h4>Название:</h4>
      <input type="text"
             @blur="onBlurNameInput"
             @keypress.enter="onEnterNameInput"/>
    </div>
    <div class="categories">
      <h4 class="filter-label">Категории:</h4>
      <div class="category-item" v-for="(category, index) in types" :key="index">
        <input :id="`category${index}`" type="checkbox" v-model="category.checked"/>
        <label :for="`category${index}`">{{ category.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      expand: false,
    };
  },
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onBlurNameInput(event) {
      this.$emit('updateNameQuery', event.target.value);
    },
    onEnterNameInput(event) {
      this.$emit('updateNameQuery', event.target.value);
    },
  },
};
</script>

<style scoped>
  .filters {
    width: 20%;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    padding: 1em;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 10px;
  }
  .filters > div {
    margin-bottom: 1em;
  }
  .filters h4 {
    color: #fff;
    margin-bottom: .5em;
  }
  .filters .name {
    color: #fff;
  }
  .filters .label {
    color: #fff;
    margin: 0;
  }
  .filters label {
    color: #fff;
    margin-bottom: .5rem;
  }
  .filters label:before {
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 1.2rem;
    height: 1.2rem;
    font-size: .8rem;
    line-height: 1.1rem;
  }
  .filters > div:not(:last-of-type) {
    margin-top: .5em;
  }
  @media screen and (max-width: 1023px) {
    .filters {
      width: 100%;
      padding: .5em;
      margin-bottom: .25em;
    }
    .filters > div {
      display: none;
    }
    .filters.expand {
      background-color: #000;
    }
    .filters.expand > div {
      display: block;
    }
  }
  @media screen and (max-width: 850px) {
    .filters .label {
      font-size: .85rem;
    }
  }
  @media screen and (max-width: 600px) {
    .filters {
      padding: .7em;
    }
  }
</style>
