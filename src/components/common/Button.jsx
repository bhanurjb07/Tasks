const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-ink text-white hover:bg-slate-700",
  secondary: "border border-slate-300 bg-white text-ink hover:border-brand hover:text-brand-dark",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-ink",
};

export function Button({
  as: Component = "button",
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  return (
    <Component
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-black shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand/30 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
