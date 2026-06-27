import { EmptyState } from "../components/common/EmptyState.jsx";

export function NotFoundPage() {
  return (
    <EmptyState title="Page not found">
      The product or page you opened is not available in this storefront.
    </EmptyState>
  );
}
