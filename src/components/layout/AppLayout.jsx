import { Header } from "./Header.jsx";

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-page py-6 sm:py-10">{children}</main>
    </div>
  );
}
