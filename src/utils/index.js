export function number(v) {
  return v.toLocaleString();
}

export function amount(v) {
  return `${number(v)} грн.`;
}

export function prepareCartId({ id, types }) {
  const cartType = types.map((type => `${type.id}:${type.value}`)).join(';');
  if (cartType.length) {
    return [id].concat(cartType).join('__');
  }
  return id;
}

export function parseCartId(cartId) {
  const [id, typesString] = cartId.split('__');
  const types = typesString ? typesString.split(';').map((type) => {
    const [typeId, value] = type.split(':');
    return { id: typeId, value };
  }) : [];
  return { id, types };
}
