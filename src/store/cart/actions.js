function prepareCartId({ id, type }) {
  if (type && typeof type.value !== 'undefined') {
    return `${id}__${type.value}`;
  }
  return id;
}

export default {
  addItem({ state, commit }, payload) {
    const cart = state.items;
    const cartId = prepareCartId(payload);
    const existItemIndex = cart.findIndex(({ id }) => id === cartId);
    if (existItemIndex !== -1) {
      commit('updateCartItem', {
        index: existItemIndex,
        count: cart[existItemIndex].count += payload.count,
      });
    } else {
      const { count } = payload;
      commit('updateCart', {
        id: cartId,
        count,
      });
    }
    commit('saveCart');
  },
  updateItem({ state, commit }, payload) {
    const cartId = prepareCartId(payload);
    const existItemIndex = state.items.findIndex(({ id }) => id === cartId);
    commit('updateCartItem', {
      index: existItemIndex,
      count: payload.count,
    });
    commit('saveCart');
  },
  removeItem({ state, commit }, payload) {
    const cartId = prepareCartId(payload);
    const index = state.items.findIndex(({ id }) => id === cartId);
    if (index !== -1) {
      commit('removeItem', { index });
    }
    commit('saveCart');
  },
};
