import omit from 'object.omit';

function prepareCartId({ id, type }) {
  if (type && typeof type.value !== 'undefined') {
    return `${id}__${type.value}`;
  }
  return id;
}

function compareItems(item, index, arr) {
  return arr.findIndex(item2 => (
    JSON.stringify(omit(item, ['count'])) === JSON.stringify(omit(item2, ['count']))
  ));
}

export default {
  saveCart({ state, commit }) {
    const newCart = state.items.map((item, index, arr) => {
      const foundIndex = arr.findIndex((...args) => compareItems(...args) !== -1);
      if (foundIndex !== index) {
        const foundItem = arr[foundIndex];
        foundItem.count += item.count;
      }
      return item;
    }).filter((item, index, arr) => arr.indexOf(item) === compareItems(item, index, arr));
    commit('saveCart', newCart);
  },
  addItem({ dispatch, commit }, payload) {
    commit('updateCart', payload);
    dispatch('saveCart');
  },
  updateItem({ state, dispatch, commit }, payload) {
    const cartId = prepareCartId(payload);
    const existItemIndex = state.items.findIndex(({ id }) => id === cartId);
    commit('updateCartItem', {
      index: existItemIndex,
      count: payload.count,
    });
    dispatch('saveCart');
  },
  removeItem({ state, dispatch, commit }, payload) {
    const cartId = prepareCartId(payload);
    const index = state.items.findIndex(({ id }) => id === cartId);
    if (index !== -1) {
      commit('removeItem', { index });
    }
    dispatch('saveCart');
  },
};
