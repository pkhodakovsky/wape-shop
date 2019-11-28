export default {
  addItem({ rootState, commit }, payload) {
    const item = rootState.shopItems.items.find(({ id }) => payload.id === id);
    commit('addItem', item);
  },
  removeItem() {},
};
