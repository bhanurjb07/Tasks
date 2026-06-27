import { ArrowLeft, BadgeCheck, ShoppingCart } from "lucide-react";
import { Button } from "../components/common/Button.jsx";
import { ProductInfoGrid } from "../components/products/ProductInfoGrid.jsx";
import { ProductReviews } from "../components/products/ProductReviews.jsx";
import { useCart } from "../context/CartContext.jsx";
import { currency, formatPercent, formatRating } from "../lib/formatters.js";
import { getSalePrice } from "../lib/pricing.js";

export function ProductPage({ product }) {
  const { addToCart } = useCart();
  const image = product.images?.[0] || product.thumbnail;
  const isOutOfStock = product.stock === 0;

  return (
    <section className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
      <div>
        <Button as="a" className="mb-4" href="#/" variant="secondary">
          <ArrowLeft size={18} />
          Back to products
        </Button>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <img
            className="aspect-square w-full rounded-xl bg-slate-100 object-cover"
            src={image}
            alt={product.title}
          />
        </div>
      </div>

      <div className="grid gap-6">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-brand">
            {product.brand || "Unbranded"} / {product.category}
          </p>
          <h1 className="mt-2 text-4xl font-black leading-none text-ink sm:text-6xl">
            {product.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-500 line-through">
                {currency.format(product.price)}
              </p>
              <p className="text-4xl font-black text-ink">{currency.format(getSalePrice(product))}</p>
              <p className="mt-1 font-bold text-leaf">
                {formatPercent(product.discountPercentage)} off
              </p>
            </div>

            <div className="grid gap-2 text-right">
              <p className="inline-flex items-center justify-end gap-2 font-black text-ink">
                <BadgeCheck className="text-leaf" size={20} />
                {product.availabilityStatus}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Rating {formatRating(product.rating)}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              disabled={isOutOfStock}
              type="button"
              variant={isOutOfStock ? "secondary" : "primary"}
              onClick={() => addToCart(product.id)}
            >
              <ShoppingCart size={18} />
              {isOutOfStock ? "Out of stock" : "Add to cart"}
            </Button>
            <Button as="a" href="#/cart" variant="dark">
              Go to cart
            </Button>
          </div>
        </div>

        <ProductInfoGrid product={product} />
        <ProductReviews reviews={product.reviews} />
      </div>
    </section>
  );
}
