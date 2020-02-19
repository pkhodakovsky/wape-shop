import { parseCartId } from '../../utils';

export default {
  amount(state, getters, rootState) {
    const { items } = state;
    const { shopItems } = rootState;
    return items.reduce((amount, { id, count }) => {
      const cartItem = parseCartId(id);
      const shopItem = shopItems.items.find(item => item.id === cartItem.id);
      const cost = shopItem.cost + cartItem.types
        .reduce(
          (additionalCost, selectedType) => additionalCost + shopItem.types
            .find(type => type.id === selectedType.id)
            .values
            .find(value => value.id === selectedType.value)
            .cost || 0,
          0,
        );
      return amount + (cost * count);
    }, 0);
  },
};
