export function filterCart(cart) {
  const items = cart.items.filter(({ count }) => Boolean(count));
  return {
    ...cart,
    items,
  };
}

export function saveCart(cart) {
  localStorage.setItem('royal-vape-cart', JSON.stringify(filterCart(cart)));
}
