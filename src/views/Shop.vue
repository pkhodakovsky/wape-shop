<template>
  <div class="shop">
    <div class="inner">
      <Filters v-if="!isExpandScroll"
               :types="shopItems.types"
               @updateNameQuery="updateNameQuery"></Filters>
      <div class="main">
        <Sort @sortBy="sortBy"></Sort>
        <ShopItems :shown-items="shownItems"
                   :can-show-more="showItemsCount < shownItems.length"
                   @showMore="showMore"
                   @changeExpandState="changeExpandState"></ShopItems>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Filters from '@/components/shop/Filters.vue';
import Sort from '@/components/shop/Sort.vue';
import ShopItems from '@/components/shop/ShopItems.vue';

export default {
  name: 'Shop',
  components: {
    Filters,
    Sort,
    ShopItems,
  },
  data() {
    return {
      showItemsCount: 10,
      showItemsCountStep: 10,
      nameQuery: '',
      selectedSort: '',
      isExpandScroll: false,
    };
  },
  computed: {
    ...mapState(['shopItems']),
    checkedCategories() {
      return this.shopItems.types
        .filter(({ checked }) => checked)
        .map(({ id }) => id);
    },
    shownItems() {
      const { field } = this.selectedSort;
      return this.shopItems.items
        .filter(({ type }) => this.checkedCategories.includes(type))
        .filter(({ name }) => name.toLowerCase()
          .includes(this.nameQuery.toLocaleLowerCase().trim()))
        .sort((a, b) => {
          if (this.selectedSort.reverse) {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
          } else {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
          }
          return 0;
        })
        .slice(0, this.showItemsCount);
    },
  },
  methods: {
    updateNameQuery(value) {
      this.nameQuery = value;
      this.resetShowItemsCount();
    },
    sortBy(sortOptions) {
      this.selectedSort = sortOptions;
      this.selectedSort.reverse = !sortOptions.reverse;
      this.resetShowItemsCount();
    },
    showMore() {
      this.showItemsCount += this.showItemsCountStep;
    },
    resetShowItemsCount() {
      this.showItemsCount = 10;
    },
    changeExpandState(value) {
      this.isExpandScroll = value;
    },
  },
  beforeMount() {
    this.resetShowItemsCount();
  },
  watch: {
    checkedCategories() {
      this.resetShowItemsCount();
    },
  },
};
</script>

<style scoped>
  .shop {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    padding-top: 4.25em;
    background-image: url('../../public/images/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
  }
  .inner {
    width: 80rem;
    max-width: 95vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }
  .main {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    .shop {
      padding-top: 3.25em
    }
  }
  @media screen and (max-width: 1023px) {
    .shop {
      padding-top: 3em
    }
    .inner {
      flex-direction: column;
    }
    .main {
      width: 100%;
      height: 90%;
    }
  }
</style>
