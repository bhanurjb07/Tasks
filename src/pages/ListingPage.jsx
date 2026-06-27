import { useMemo, useState } from "react";
import { ProductFilters } from "../components/products/ProductFilters.jsx";
import { ProductGrid } from "../components/products/ProductGrid.jsx";
import { StatPill } from "../components/common/StatPill.jsx";
import { productMeta, products } from "../data/products.js";

export function ListingPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const searchableText = [
        product.title,
        product.brand,
        product.category,
        product.description,
        product.sku,
        ...product.tags,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, query]);

  const featuredProduct = products[0];
  const categoriesCount = new Set(products.map((product) => product.category)).size;

  return (
    <>
      <section className="grid min-h-[540px] items-center gap-8 pb-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-wide text-brand">
            Complete JSON storefront
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] text-ink sm:text-7xl">
            Shop every product from the dataset.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Browse all products, filter by category, search by product data, open a
            detail page, and build a cart with a proper bill summary.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <StatPill label="Products" value={productMeta.total} />
            <StatPill label="Categories" value={categoriesCount} />
            <StatPill label="Cart ready" value="Yes" />
          </div>
        </div>

        <a
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
          href={`#/products/${featuredProduct.id}`}
        >
          <img
            className="aspect-[4/5] w-full rounded-xl bg-slate-100 object-cover"
            src={featuredProduct.thumbnail}
            alt={featuredProduct.title}
          />
          <div className="pt-4">
            <p className="text-sm font-bold uppercase text-brand">{featuredProduct.category}</p>
            <h2 className="mt-1 text-2xl font-black text-ink">{featuredProduct.title}</h2>
          </div>
        </a>
      </section>

      <section id="products" className="scroll-mt-24">
        <ProductFilters
          category={category}
          query={query}
          resultCount={filteredProducts.length}
          setCategory={setCategory}
          setQuery={setQuery}
        />
        <ProductGrid products={filteredProducts} />
      </section>
    </>
  );
}
