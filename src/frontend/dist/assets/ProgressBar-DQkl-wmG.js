import { j as jsxRuntimeExports, a as cn } from "./index-D0P90mBY.js";
function ProgressBar({
  value,
  showLabel = true,
  className,
  size = "md"
}) {
  const clamped = Math.min(100, Math.max(0, value));
  const barColor = clamped >= 70 ? "bg-primary" : clamped >= 40 ? "bg-amber-500" : "bg-red-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "flex-1 bg-muted rounded-full overflow-hidden",
          size === "sm" ? "h-1.5" : "h-2"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("h-full rounded-full transition-smooth", barColor),
            style: { width: `${clamped}%` },
            "aria-valuenow": clamped,
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }
        )
      }
    ),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-muted-foreground w-8 text-start", children: [
      clamped,
      "%"
    ] })
  ] });
}
export {
  ProgressBar as P
};
