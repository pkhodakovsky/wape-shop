export default {
  namespaced: true,
  state: {
    isOpened: false,
    id: '',
  },
  mutations: {
    openPopup(state, { id }) {
      state.id = id;
      state.isOpened = true;
    },
    closePopup(state) {
      state.isOpened = false;
    },
  },
};
