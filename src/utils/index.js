export function number(v) {
  return v.toLocaleString();
}

export function amount(v) {
  return `${number(v)} грн.`;
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
