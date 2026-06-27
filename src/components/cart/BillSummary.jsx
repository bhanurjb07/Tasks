import { currency } from "../../lib/formatters.js";
import { Button } from "../common/Button.jsx";

function BillLine({ label, strong = false, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 py-3">
      <span className="font-semibold text-slate-600">{label}</span>
      <span className={strong ? "text-lg font-black text-ink" : "font-black text-ink"}>
        {value}
      </span>
    </div>
  );
}

export function BillSummary({ onClear, summary }) {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h2 className="text-2xl font-black text-ink">Bill summary</h2>
      <p className="mt-1 text-sm leading-6 text-slate-500">
        Discount is calculated from every product&apos;s JSON discount percentage.
      </p>

      <div className="mt-4">
        <BillLine label="Subtotal" value={currency.format(summary.subtotal)} />
        <BillLine label="Discount" value={`-${currency.format(summary.discount)}`} />
        <BillLine label="Shipping" value={currency.format(summary.shipping)} />
        <BillLine label="Estimated tax" value={currency.format(summary.tax)} />
        <div className="mt-4 flex items-center justify-between rounded-lg bg-ink px-4 py-4 text-white">
          <span className="font-black">Total</span>
          <span className="text-2xl font-black">{currency.format(summary.total)}</span>
        </div>
      </div>

      <Button className="mt-4 w-full" type="button" variant="secondary" onClick={onClear}>
        Clear cart
      </Button>
    </aside>
  );
}
