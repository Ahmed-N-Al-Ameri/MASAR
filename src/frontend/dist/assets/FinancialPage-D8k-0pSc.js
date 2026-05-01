import { c as createLucideIcon, f as useParams, u as useNavigate, h as getProjectById, s as getFinancialItems, t as getObstacles, j as jsxRuntimeExports, v as CircleAlert } from "./index-D0P90mBY.js";
import { B as Badge } from "./badge-CZY1RXcR.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-TCYZkj4C.js";
import { A as ArrowLeft } from "./arrow-left-xbFge28E.js";
import { T as TriangleAlert } from "./triangle-alert-DTxpIMzu.js";
import "./index-Gc6HE7gQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
function CircularGauge({ value, label, colorClass = "blue" }) {
  const clamped = Math.min(100, Math.max(0, value));
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const filled = clamped / 100 * circumference;
  const gap = circumference - filled;
  let strokeColor = "#2563eb";
  if (colorClass === "dynamic") {
    if (clamped > 80)
      strokeColor = "#f59e0b";
    else if (clamped < 60)
      strokeColor = "#22c55e";
    else strokeColor = "#2563eb";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "180",
      height: "180",
      viewBox: "0 0 180 180",
      role: "img",
      "aria-label": `${label}: ${clamped}%`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "90",
            cy: "90",
            r: radius,
            fill: "none",
            stroke: "oklch(0.92 0.01 0)",
            strokeWidth: "14"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "90",
            cy: "90",
            r: radius,
            fill: "none",
            stroke: strokeColor,
            strokeWidth: "14",
            strokeLinecap: "round",
            strokeDasharray: `${filled} ${gap}`,
            strokeDashoffset: circumference * 0.25,
            style: { transition: "stroke-dasharray 0.7s ease" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: "90",
            y: "86",
            textAnchor: "middle",
            dominantBaseline: "middle",
            fontSize: "30",
            fontWeight: "700",
            fill: strokeColor,
            fontFamily: "Inter, sans-serif",
            children: [
              clamped,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "90",
            y: "114",
            textAnchor: "middle",
            dominantBaseline: "middle",
            fontSize: "12",
            fill: "oklch(0.5 0 0)",
            fontFamily: "Inter, sans-serif",
            children: label
          }
        )
      ]
    }
  ) });
}
function formatSAR(n) {
  return n.toLocaleString("ar-SA");
}
function BudgetTable({ items }) {
  const totalAllocated = items.reduce((s, i) => s + i.allocated, 0);
  const totalSpent = items.reduce((s, i) => s + i.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;
  const totalPct = totalAllocated > 0 ? totalSpent / totalAllocated * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "financial.budget_table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/60 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground", children: "البند" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground", children: "المخصص (ر.س)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground", children: "المصروف (ر.س)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground", children: "المتبقي (ر.س)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground min-w-[140px]", children: "نسبة الصرف" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item, idx) => {
      const remaining = item.allocated - item.spent;
      const pct = item.allocated > 0 ? Math.round(item.spent / item.allocated * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border hover:bg-muted/30 transition-colors",
          "data-ocid": `financial.budget_row.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-foreground font-medium", children: item.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground tabular-nums", children: formatSAR(item.allocated) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground tabular-nums", children: formatSAR(item.spent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                className: "py-3 px-4 tabular-nums",
                style: {
                  color: remaining < 0 ? "oklch(0.55 0.18 25)" : "oklch(0.55 0.12 142)"
                },
                children: formatSAR(remaining)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all",
                  style: {
                    width: `${pct}%`,
                    backgroundColor: pct > 80 ? "oklch(0.73 0.14 85)" : pct > 60 ? "#2563eb" : "oklch(0.68 0.12 142)"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-muted-foreground tabular-nums w-9 text-left", children: [
                pct,
                "%"
              ] })
            ] }) })
          ]
        },
        item.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-primary/5 border-t-2 border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-foreground", children: "الإجمالي" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold tabular-nums text-foreground", children: formatSAR(totalAllocated) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold tabular-nums text-foreground", children: formatSAR(totalSpent) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          className: "py-3 px-4 font-bold tabular-nums",
          style: {
            color: totalRemaining < 0 ? "oklch(0.55 0.18 25)" : "oklch(0.55 0.12 142)"
          },
          children: formatSAR(totalRemaining)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full",
            style: {
              width: `${Math.round(totalPct)}%`,
              backgroundColor: totalPct > 80 ? "oklch(0.73 0.14 85)" : "#2563eb"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground tabular-nums w-9 text-left", children: [
          Math.round(totalPct),
          "%"
        ] })
      ] }) })
    ] }) })
  ] }) });
}
const priorityConfig = {
  عالية: { label: "عالية", icon: TriangleAlert, color: "oklch(0.55 0.18 25)" },
  متوسطة: { label: "متوسطة", icon: CircleAlert, color: "oklch(0.6 0.14 85)" },
  منخفضة: { label: "منخفضة", icon: Info, color: "#2563eb" }
};
const statusConfig = {
  مفتوح: { label: "مفتوح", className: "badge-destructive" },
  "قيد المعالجة": { label: "قيد المعالجة", className: "badge-warning" },
  محلول: { label: "محلول", className: "badge-success" }
};
function ObstacleCard({
  obstacle,
  index
}) {
  const priority = priorityConfig[obstacle.priority];
  const status = statusConfig[obstacle.status];
  const Icon = priority.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:bg-muted/20 transition-colors",
      "data-ocid": `financial.obstacle.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, style: { color: priority.color } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: obstacle.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "الأولوية:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: priority.color }, className: "font-medium", children: priority.label })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: status.className, children: status.label }) })
      ]
    }
  );
}
function FinancialPage() {
  const { id } = useParams({ from: "/projects/$id/financial" });
  const navigate = useNavigate();
  const projectId = Number(id);
  const project = getProjectById(projectId);
  const financialItems = getFinancialItems(projectId);
  const obstacles = getObstacles(projectId);
  const spendingPct = project ? Math.round(project.spent / project.totalCost * 100) : 0;
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4",
        "data-ocid": "financial.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "المشروع غير موجود" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-primary underline text-sm",
              onClick: () => navigate({ to: "/projects" }),
              "data-ocid": "financial.back_button",
              children: "العودة لقائمة المشاريع"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-8", "data-ocid": "financial.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "البيانات المالية والتنفيذية" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: project.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium border border-primary/30 rounded-lg px-3 py-2 hover:bg-primary/5",
          onClick: () => navigate({ to: "/projects/$id", params: { id } }),
          "data-ocid": "financial.back_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
            "العودة للمشروع"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        "data-ocid": "financial.gauges_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground text-center", children: "نسبة التنفيذ" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardContent,
              {
                className: "flex justify-center py-4",
                "data-ocid": "financial.execution_gauge",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircularGauge,
                  {
                    value: project.progress,
                    label: "نسبة الإنجاز",
                    colorClass: "blue"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground text-center", children: "نسبة الإنفاق" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardContent,
              {
                className: "flex justify-center py-4",
                "data-ocid": "financial.spending_gauge",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircularGauge,
                  {
                    value: spendingPct,
                    label: "من إجمالي الميزانية",
                    colorClass: "dynamic"
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "financial.budget_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground", children: "تفاصيل الميزانية" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: financialItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "py-12 text-center text-muted-foreground",
          "data-ocid": "financial.budget.empty_state",
          children: "لا توجد بنود ميزانية لهذا المشروع"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(BudgetTable, { items: financialItems }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "financial.obstacles_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground", children: [
        "معوقات التنفيذ",
        obstacles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mr-2 text-xs", children: obstacles.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 space-y-3", children: obstacles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "py-8 text-center text-muted-foreground",
          "data-ocid": "financial.obstacles.empty_state",
          children: "لا توجد معوقات مسجلة لهذا المشروع"
        }
      ) : obstacles.map((obstacle, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ObstacleCard, { obstacle, index: idx }, obstacle.id)) })
    ] })
  ] });
}
export {
  FinancialPage as default
};
