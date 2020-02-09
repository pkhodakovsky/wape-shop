export default {
  data() {
    return {
      selectedTypeIndex: 0,
    };
  },
  computed: {
    cost() {
      const itemTypes = this.item.types;
      const typeCost = itemTypes && itemTypes[this.selectedTypeIndex].cost;
      return typeCost || this.item.cost;
    },
  },
  methods: {
    selectType(index) {
      this.selectedTypeIndex = index;
    },
  },
};
