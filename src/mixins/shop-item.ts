export default {
  data() {
    return {
      selectedTypesIndexes: {},
    };
  },
  computed: {
    cost() {
      const { cost } = this.item;
      const itemTypes = this.item.types;
      if (itemTypes && itemTypes.length) {
        return itemTypes
          .reduce((amount, type) => cost + (type
            .values[this.selectedTypesIndexes[type.id]].cost || 0), cost);
      }
      return cost;
    },
    actionCost() {
      const { actionCost } = this.item;
      const itemTypes = this.item.types;
      if (itemTypes.length) {
        return itemTypes
          .reduce((amount, type) => actionCost + (type
            .values[this.selectedTypesIndexes[type.id]].actionCost || 0), actionCost);
      }
      return actionCost;
    },
  },
  methods: {
    findType(searchId) {
      return this.item.types.find(({ id }) => id === searchId);
    },
    selectType(event) {
      const { value } = event.target;
      this.selectedTypeIndex = this.item.types.findIndex(type => type.value === +value);
    },
  },
  beforeMount() {
    if (this.item.types) {
      this.item.types.forEach((type) => {
        this.selectedTypesIndexes[type.id] = 0;
      });
    }
  },
};
