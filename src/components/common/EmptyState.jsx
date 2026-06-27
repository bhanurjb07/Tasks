import { Button } from "./Button.jsx";

export function EmptyState({ actionHref = "#/", actionLabel = "Browse products", children, title }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="max-w-2xl text-4xl font-black leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{children}</p>
      <Button as="a" className="mt-6" href={actionHref}>
        {actionLabel}
      </Button>
    </section>
  );
}
