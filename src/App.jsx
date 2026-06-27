import { CartProvider } from "./context/CartContext.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}
