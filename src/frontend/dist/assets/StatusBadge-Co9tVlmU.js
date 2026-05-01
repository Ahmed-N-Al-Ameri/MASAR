import { j as jsxRuntimeExports, a as cn } from "./index-D0P90mBY.js";
const statusConfig = {
  مستمر: {
    className: "bg-emerald-50 text-emerald-700 border border-emerald-200"
  },
  متوقف: {
    className: "bg-red-50 text-red-700 border border-red-200"
  },
  "داخل للخدمة": {
    className: "bg-sky-50 text-sky-700 border border-sky-200"
  },
  "استلام نهائي": {
    className: "bg-blue-50 text-blue-700 border border-blue-200"
  },
  "منجز تام": {
    className: "bg-teal-50 text-teal-700 border border-teal-200"
  },
  "غير موقع": {
    className: "bg-slate-100 text-slate-600 border border-slate-200"
  },
  "تسوية مالية": {
    className: "bg-violet-50 text-violet-700 border border-violet-200"
  },
  "متعلقات مالية": {
    className: "bg-purple-50 text-purple-700 border border-purple-200"
  },
  "لم يباشر به": {
    className: "bg-amber-50 text-amber-700 border border-amber-200"
  }
};
function StatusBadge({ status, className }) {
  const config = statusConfig[status] ?? {
    className: "bg-muted text-muted-foreground border border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap",
        config.className,
        className
      ),
      children: status
    }
  );
}
export {
  StatusBadge as S
};
