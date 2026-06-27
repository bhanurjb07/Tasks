import { BillSummary } from "../components/cart/BillSummary.jsx";
import { CartItem } from "../components/cart/CartItem.jsx";
import { EmptyState } from "../components/common/EmptyState.jsx";
import { useCart } from "../context/CartContext.jsx";

export function CartPage() {
  const { cartItems, clearCart, removeFromCart, setQuantity, summary } = useCart();

  if (cartItems.length === 0) {
    return (
      <EmptyState title="Your cart is empty">
        Add products from the listing page and your cart items, quantities, discounts,
        shipping, tax, and total will appear here.
      </EmptyState>
    );
  }

  return (
    <>
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-wide text-brand">Checkout</p>
        <h1 className="text-5xl font-black text-ink">Cart</h1>
      </div>

      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-3">
          {cartItems.map((item) => (
            <CartItem
              item={item}
              key={item.productId}
              removeFromCart={removeFromCart}
              setQuantity={setQuantity}
            />
          ))}
        </div>
        <BillSummary onClear={clearCart} summary={summary} />
      </section>
    </>
  );
}
