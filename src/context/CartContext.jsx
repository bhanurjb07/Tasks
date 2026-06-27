import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products.js";
import { getCartSummary } from "../lib/pricing.js";

const CartContext = createContext(null);
const STORAGE_KEY = "react-store-cart";

function readStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readStoredCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => ({
          ...item,
          product: products.find((product) => product.id === item.productId),
        }))
        .filter((item) => item.product),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const summary = useMemo(() => getCartSummary(cartItems), [cartItems]);

  function addToCart(productId) {
    setCart((current) => {
      const existingItem = current.find((item) => item.productId === productId);

      if (!existingItem) {
        return [...current, { productId, quantity: 1 }];
      }

      return current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  }

  function setQuantity(productId, quantity) {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(quantity, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  const value = useMemo(
    () => ({
      addToCart,
      cart,
      cartCount,
      cartItems,
      clearCart,
      removeFromCart,
      setQuantity,
      summary,
    }),
    [cart, cartCount, cartItems, summary],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);

  if (!value) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return value;
}
