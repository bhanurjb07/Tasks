import { ShoppingBag, Store } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
        <a className="flex items-center gap-3 font-black text-ink" href="#/">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white shadow-sm">
            <Store size={20} />
          </span>
          <span className="text-lg">Market Lane</span>
        </a>

        <nav className="flex items-center gap-2 text-sm font-bold text-slate-600">
          <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-ink" href="#/">
            Products
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-white shadow-sm transition hover:bg-slate-700"
            href="#/cart"
          >
            <ShoppingBag size={18} />
            Cart
            <span className="grid min-w-6 place-items-center rounded-full bg-brand px-2 py-0.5 text-xs text-white">
              {cartCount}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
