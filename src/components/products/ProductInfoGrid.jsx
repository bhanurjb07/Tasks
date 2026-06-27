export function ProductInfoGrid({ product }) {
  const details = [
    ["Rating", `${product.rating} / 5`],
    ["Stock", `${product.stock} units`],
    ["Availability", product.availabilityStatus],
    ["SKU", product.sku],
    ["Tags", product.tags.join(", ")],
    ["Weight", `${product.weight} oz`],
    [
      "Dimensions",
      `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`,
    ],
    ["Warranty", product.warrantyInformation],
    ["Shipping", product.shippingInformation],
    ["Return policy", product.returnPolicy],
    ["Minimum order", product.minimumOrderQuantity],
    ["Barcode", product.meta.barcode],
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {details.map(([label, value]) => (
        <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-1 break-words font-black text-ink">{value}</p>
        </div>
      ))}
    </div>
  );
}
