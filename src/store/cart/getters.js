import { parseCartId } from '../../utils';

export default {
  amount(state, getters, rootState) {
    const { items } = state;
    const { shopItems } = rootState;
    return items.reduce((_amount, { id, count }) => {
      const amount = _amount;
      const cartItem = parseCartId(id);
      const shopItem = shopItems.items.find(item => item.id === cartItem.id);
      const cost = (shopItem.actionCost || shopItem.cost) + cartItem.types
        .reduce(
          (additionalCost, selectedType) => additionalCost + shopItem.types
            .find(type => type.id === selectedType.id)
            .values
            .find(value => value.id === selectedType.value)
            .cost || 0,
          0,
        );
      switch (shopItem.currency) {
        case '$':
          amount.dollars += (cost * count);
          break;
        default:
          amount.default += (cost * count);
          break;
      }
      return amount;
    }, { default: 0, dollars: 0 });
  },
};
