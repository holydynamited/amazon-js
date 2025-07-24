

export function formatCurrency(priceCents) {
  const dollars = Math.round(priceCents) / 100;
  return dollars.toFixed(2);
}
export default formatCurrency;