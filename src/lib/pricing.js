export function getSalePrice(product) {
  return product.price * (1 - product.discountPercentage / 100);
}

export function getCartSummary(items) {
  const summary = items.reduce(
    (totals, item) => {
      const lineSubtotal = item.product.price * item.quantity;
      const lineDiscount = (item.product.price - getSalePrice(item.product)) * item.quantity;

      return {
        subtotal: totals.subtotal + lineSubtotal,
        discount: totals.discount + lineDiscount,
      };
    },
    { subtotal: 0, discount: 0 },
  );

  const afterDiscount = summary.subtotal - summary.discount;
  const shipping = afterDiscount > 0 ? 4.99 : 0;
  const tax = afterDiscount * 0.08;

  return {
    ...summary,
    shipping,
    tax,
    total: afterDiscount + shipping + tax,
  };
}
