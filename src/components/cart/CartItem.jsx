import { Minus, Plus, Trash2 } from "lucide-react";
import { currency } from "../../lib/formatters.js";
import { getSalePrice } from "../../lib/pricing.js";

export function CartItem({ item, removeFromCart, setQuantity }) {
  const { product, quantity } = item;

  return (
    <article className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[128px_1fr]">
      <a href={`#/products/${product.id}`}>
        <img
          className="aspect-square w-full rounded-lg bg-slate-100 object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
      </a>

      <div className="grid gap-4">
        <div>
          <a href={`#/products/${product.id}`}>
            <h2 className="text-xl font-black text-ink">{product.title}</h2>
          </a>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {product.brand || "Unbranded"} / {product.sku}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-black text-ink">
              {currency.format(getSalePrice(product) * quantity)}
            </p>
            <p className="text-sm font-semibold text-slate-500">
              {currency.format(getSalePrice(product))} each
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex overflow-hidden rounded-lg border border-slate-300 bg-white">
              <button
                aria-label="Decrease quantity"
                className="grid h-10 w-10 place-items-center bg-slate-100 text-ink transition hover:bg-slate-200"
                type="button"
                onClick={() => setQuantity(product.id, quantity - 1)}
              >
                <Minus size={16} />
              </button>
              <span className="grid h-10 w-12 place-items-center font-black">{quantity}</span>
              <button
                aria-label="Increase quantity"
                className="grid h-10 w-10 place-items-center bg-slate-100 text-ink transition hover:bg-slate-200"
                type="button"
                onClick={() => setQuantity(product.id, quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              aria-label="Remove item"
              className="grid h-10 w-10 place-items-center rounded-lg text-brand-dark transition hover:bg-rose-50"
              type="button"
              onClick={() => removeFromCart(product.id)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
