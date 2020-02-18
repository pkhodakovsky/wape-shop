export function filterCart(cart) {
  return cart.filter(({ count }) => Boolean(count));
}

export function saveCart(cart) {
  localStorage.setItem('royal-vape-cart', JSON.stringify(filterCart(cart)));
}

export function prepareCartId({ id, types }) {
  const cartType = types.map((type => `${type.id}:${type.value}`)).join(';');
  return [id].concat(cartType).join('__');
}

export function parseCartId(cartId) {
  const [id, typesString] = cartId.split('__');
  const types = typesString.split(';').map((type) => {
    const [typeId, value] = type.split(':');
    return { id: typeId, value };
  });
  return { id, types };
}
