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
    selectType(event) {
      const { value } = event.target;
      this.selectedTypeIndex = this.item.types.findIndex(type => type.value === +value);
    },
  },
};
