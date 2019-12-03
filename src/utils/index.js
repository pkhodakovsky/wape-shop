export function number(v) {
  return v.toLocaleString();
}

export function amount(v) {
  return `${number(v)} грн.`;
}
