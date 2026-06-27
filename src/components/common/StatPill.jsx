export function StatPill({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
      <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-black text-ink">{value}</p>
    </div>
  );
}
