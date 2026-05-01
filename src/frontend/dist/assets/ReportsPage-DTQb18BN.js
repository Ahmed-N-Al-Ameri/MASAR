import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, l as FileText, D as DollarSign, m as getReportData, e as getProjects } from "./index-D0P90mBY.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-SaYlgiRR.js";
import { M as MapPin } from "./map-pin-ClY89Epo.js";
import { T as TriangleAlert } from "./triangle-alert-DTxpIMzu.js";
import { R as ResponsiveContainer, r as PieChart, s as Pie, C as Cell, T as Tooltip, B as BarChart, v as CartesianGrid, X as XAxis, Y as YAxis, w as Bar, u as Legend } from "./PieChart-DK7zRIBE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode);
const reportTypes = [
  {
    id: "status",
    label: "حالة المشاريع",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4" })
  },
  {
    id: "location",
    label: "توزيع المشاريع بالموقع",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" })
  },
  {
    id: "financial",
    label: "التقارير المالية",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" })
  },
  {
    id: "delayed",
    label: "المشاريع المتأخرة",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" })
  }
];
const STATUS_COLORS = {
  "قيد التنفيذ": "#2563eb",
  متأخر: "#ef4444",
  مكتمل: "#22c55e",
  "قيد الانتظار": "#f59e0b"
};
const formatBudget = (v) => {
  if (v >= 1e9) return `${(v / 1e9).toFixed(1)}م`;
  if (v >= 1e6) return `${(v / 1e6).toFixed(0)}م.ر`;
  return v.toLocaleString("ar");
};
function StatusReport() {
  const data = getReportData();
  const total = data.projectsByStatus.reduce((s, [, c]) => s + c, 0);
  const pieData = data.projectsByStatus.map(([name, value]) => ({
    name,
    value
  }));
  const tableRows = data.projectsByStatus.map(([name, count]) => ({
    label: name,
    statusKey: name,
    count,
    pct: `${(count / total * 100).toFixed(0)}%`,
    color: STATUS_COLORS[name] ?? "#94a3b8"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "توزيع المشاريع حسب الحالة" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pie,
          {
            data: pieData,
            cx: "50%",
            cy: "50%",
            outerRadius: 110,
            innerRadius: 50,
            dataKey: "value",
            label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
            labelLine: false,
            children: pieData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: STATUS_COLORS[entry.name] ?? "#94a3b8"
              },
              entry.name
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (value) => [`${value} مشاريع`, ""] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: pieData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block w-3 h-3 rounded-full",
            style: { background: STATUS_COLORS[entry.name] ?? "#94a3b8" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: entry.name })
      ] }, entry.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", dir: "rtl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-foreground", children: "الحالة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "عدد المشاريع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "النسبة" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tableRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: i % 2 === 0 ? "bg-card" : "bg-background",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block w-2.5 h-2.5 rounded-full",
                  style: { background: row.color }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: row.label })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center font-mono font-semibold text-foreground", children: row.count }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-2 py-0.5 rounded text-xs font-semibold text-white",
                style: { background: row.color },
                children: row.pct
              }
            ) })
          ]
        },
        row.label
      )) })
    ] }) })
  ] });
}
function LocationReport() {
  const data = getReportData();
  const barData = data.projectsByLocation.map(([name, count]) => ({
    name,
    count
  }));
  const chartHeight = Math.max(300, barData.length * 60);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "توزيع المشاريع حسب الموقع" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: chartHeight }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      BarChart,
      {
        data: barData,
        layout: "vertical",
        margin: { top: 5, right: 30, left: 70, bottom: 5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", horizontal: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            XAxis,
            {
              type: "number",
              tickCount: 6,
              tick: { fontSize: 12 },
              label: {
                value: "عدد المشاريع",
                position: "insideBottom",
                offset: -2,
                fontSize: 12
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YAxis,
            {
              type: "category",
              dataKey: "name",
              tick: { fontSize: 13 },
              width: 80
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              formatter: (value) => [`${value} مشاريع`, "العدد"]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bar,
            {
              dataKey: "count",
              fill: "#2563eb",
              radius: [0, 4, 4, 0],
              barSize: 28
            }
          )
        ]
      }
    ) }) })
  ] });
}
function FinancialReport() {
  const data = getReportData();
  const barData = data.financialSummary.map(([name, allocated, spent]) => ({
    name,
    مخصص: allocated,
    مصروف: spent
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "الملخص المالي حسب الموقع" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 380, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      BarChart,
      {
        data: barData,
        margin: { top: 10, right: 10, left: 20, bottom: 20 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fontSize: 12 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tickFormatter: formatBudget, tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              formatter: (value) => [`${formatBudget(value)} ريال`, ""]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bar,
            {
              dataKey: "مخصص",
              fill: "#2563eb",
              radius: [4, 4, 0, 0],
              barSize: 22
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bar,
            {
              dataKey: "مصروف",
              fill: "#f97316",
              radius: [4, 4, 0, 0],
              barSize: 22
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", dir: "rtl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-foreground", children: "الموقع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "المخصص" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "المصروف" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "نسبة الصرف" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: data.financialSummary.map(([name, allocated, spent], i) => {
        const pct = Math.round(spent / allocated * 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: i % 2 === 0 ? "bg-card" : "bg-background",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-center font-mono text-primary", children: [
                formatBudget(allocated),
                " ر.س"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-center font-mono text-orange-600", children: [
                formatBudget(spent),
                " ر.س"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${Math.min(pct, 100)}%`,
                      background: pct > 90 ? "#ef4444" : pct > 70 ? "#f97316" : "#22c55e"
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-muted-foreground", children: [
                  pct,
                  "%"
                ] })
              ] }) })
            ]
          },
          name
        );
      }) })
    ] }) })
  ] });
}
function DelayedReport() {
  const projects = getProjects().filter((p) => p.status === "متوقف");
  const today = /* @__PURE__ */ new Date();
  const delayDays = (endDate) => {
    const end = new Date(endDate);
    if (end < today)
      return Math.floor((today.getTime() - end.getTime()) / 864e5);
    return 0;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "المشاريع المتأخرة" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", dir: "rtl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-foreground", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-foreground", children: "اسم المشروع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-foreground", children: "الموقع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "نسبة التقدم" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-semibold text-foreground", children: "التأخير (يوم)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: projects.map((project, i) => {
        const delay = delayDays(project.endDate);
        const isHighDelay = delay > 180 || project.progress < 40;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            "data-ocid": `delayed.item.${i + 1}`,
            className: isHighDelay ? "bg-destructive/5 border-r-2 border-destructive" : i % 2 === 0 ? "bg-card" : "bg-background",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground font-mono", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: project.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: project.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-destructive",
                    style: { width: `${project.progress}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-destructive tabular-nums", children: [
                  project.progress,
                  "%"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block px-2.5 py-1 rounded text-xs font-bold tabular-nums ${isHighDelay ? "bg-destructive text-white" : "bg-destructive/10 text-destructive"}`,
                  children: delay > 0 ? `${delay} يوم` : "قريب"
                }
              ) })
            ]
          },
          project.id
        );
      }) })
    ] }) }),
    projects.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "delayed.empty_state",
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-10 h-10 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "لا توجد مشاريع متأخرة حالياً" })
        ]
      }
    )
  ] });
}
function ReportsPage() {
  var _a;
  const [selected, setSelected] = reactExports.useState("status");
  const handleExport = (_type) => {
    alert("سيتم التنفيذ قريباً");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row-reverse min-h-full gap-0", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        "data-ocid": "reports.sidebar",
        className: "w-64 shrink-0 border-l border-border bg-card flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground tracking-wide", children: "أنواع التقارير" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 py-3 space-y-1 px-3", children: reportTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `reports.type.${type.id}`,
              onClick: () => setSelected(type.id),
              className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-smooth text-right ${selected === type.id ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground hover:bg-muted"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: type.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-right", children: type.label })
              ]
            },
            type.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-5 pt-3 border-t border-border space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "reports.export_excel_button",
                onClick: () => handleExport(),
                className: "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4" }),
                  "تصدير Excel"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "reports.export_pdf_button",
                onClick: () => handleExport(),
                className: "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                  "تصدير PDF"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-6 bg-background overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "التقارير والإحصائيات" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: (_a = reportTypes.find((r) => r.id === selected)) == null ? void 0 : _a.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "آخر تحديث: ",
          (/* @__PURE__ */ new Date()).toLocaleDateString("ar-SA")
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "reports.content_panel",
          className: "bg-card rounded-xl border border-border p-6 shadow-card",
          children: [
            selected === "status" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusReport, {}),
            selected === "location" && /* @__PURE__ */ jsxRuntimeExports.jsx(LocationReport, {}),
            selected === "financial" && /* @__PURE__ */ jsxRuntimeExports.jsx(FinancialReport, {}),
            selected === "delayed" && /* @__PURE__ */ jsxRuntimeExports.jsx(DelayedReport, {})
          ]
        }
      )
    ] })
  ] });
}
export {
  ReportsPage as default
};
