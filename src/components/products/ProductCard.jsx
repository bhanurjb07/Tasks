import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import { currency, formatRating } from "../../lib/formatters.js";
import { getSalePrice } from "../../lib/pricing.js";
import { Button } from "../common/Button.jsx";

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock === 0;

  return (
    <article className="group grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <a className="relative block overflow-hidden bg-slate-100" href={`#/products/${product.id}`}>
        <img
          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
          src={product.thumbnail}
          alt={product.title}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase text-brand-dark shadow-sm">
          {product.category}
        </span>
      </a>

      <div className="grid gap-4 p-4">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="truncate text-sm font-bold text-slate-500">
              {product.brand || "Unbranded"}
            </p>
            <p className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700">
              <Star size={13} fill="currentColor" />
              {formatRating(product.rating)}
            </p>
          </div>
          <a href={`#/products/${product.id}`}>
            <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-black leading-tight text-ink">
              {product.title}
            </h3>
          </a>
          <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xl font-black text-ink">{currency.format(getSalePrice(product))}</p>
            <p className="text-sm font-semibold text-slate-500 line-through">
              {currency.format(product.price)}
            </p>
          </div>
          <Button
            className="px-3"
            disabled={isOutOfStock}
            type="button"
            variant={isOutOfStock ? "secondary" : "primary"}
            onClick={() => addToCart(product.id)}
          >
            <ShoppingCart size={17} />
            {isOutOfStock ? "Sold" : "Add"}
          </Button>
        </div>
      </div>
    </article>
  );
}
