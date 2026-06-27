export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPercent(value) {
  return `${Number(value).toFixed(2)}%`;
}

export function formatRating(value) {
  return `${Number(value).toFixed(1)} / 5`;
}

export function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
