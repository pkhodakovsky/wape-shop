export default {
  amount(state, getters, rootState) {
    const { items } = state;
    const { shopItems } = rootState;
    return items.reduce((amount, { id, count }) => {
      const [parsedId, type] = id.split('__');
      const shopItem = shopItems.items.find(item => item.id === parsedId);
      const typeIndex = shopItem.types.findIndex(({ value }) => value === +type);
      const cost = (shopItem.types.length && shopItem.types[typeIndex].cost) || shopItem.cost;
      return amount + (cost * count);
    }, 0);
  },
};
