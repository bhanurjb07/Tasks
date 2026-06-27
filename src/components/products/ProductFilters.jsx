import { Search } from "lucide-react";
import { getCategories } from "../../data/products.js";

const categories = getCategories();

export function ProductFilters({ category, query, resultCount, setCategory, setQuery }) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-black uppercase text-brand">Catalog</p>
        <h2 className="text-3xl font-black text-ink sm:text-4xl">All products</h2>
        <p className="mt-1 text-slate-600">{resultCount} products shown</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[minmax(220px,360px)_220px]">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-sm font-semibold outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Search products"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <select
          className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-bold capitalize outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All categories" : item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
