import { AppLayout } from "../components/layout/AppLayout.jsx";
import { getProductById } from "../data/products.js";
import { useHashRoute } from "../hooks/useHashRoute.js";
import { CartPage } from "../pages/CartPage.jsx";
import { ListingPage } from "../pages/ListingPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";

export function AppRoutes() {
  const route = useHashRoute();
  const selectedProduct = route.productId ? getProductById(route.productId) : null;

  let page = <ListingPage />;

  if (route.page === "cart") {
    page = <CartPage />;
  } else if (route.page === "products" && route.productId) {
    page = selectedProduct ? <ProductPage product={selectedProduct} /> : <NotFoundPage />;
  } else if (route.page !== "products") {
    page = <NotFoundPage />;
  }

  return <AppLayout>{page}</AppLayout>;
}
