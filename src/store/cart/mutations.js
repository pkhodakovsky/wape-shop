import filterCart from './utils';

export default {
  setCart(state, { cart, filter }) {
    while (state.items.length) {
      state.items.pop();
    }
    Object.assign(state.items, cart);
    localStorage.setItem('royal-vape-cart', JSON.stringify(filter ? filterCart(state.items) : state.items));
  },
  removeItem() {},
};
