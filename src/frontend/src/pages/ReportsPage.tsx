import { getProjects, getReportData } from "@/data/mockData";
import {
  AlertTriangle,
  BarChart2,
  DollarSign,
  FileSpreadsheet,
  FileText,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ReportType = "status" | "location" | "financial" | "delayed";

const reportTypes: { id: ReportType; label: string; icon: React.ReactNode }[] =
  [
    {
      id: "status",
      label: "حالة المشاريع",
      icon: <BarChart2 className="w-4 h-4" />,
    },
    {
      id: "location",
      label: "توزيع المشاريع بالموقع",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      id: "financial",
      label: "التقارير المالية",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      id: "delayed",
      label: "المشاريع المتأخرة",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
  ];

const STATUS_COLORS: Record<string, string> = {
  "قيد التنفيذ": "#2563eb",
  متأخر: "#ef4444",
  مكتمل: "#22c55e",
  "قيد الانتظار": "#f59e0b",
};

const formatBudget = (v: number) => {
  if (v >= 1_000_000_000) return `${(v / 1_000_000_000).toFixed(1)}م`;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(0)}م.ر`;
  return v.toLocaleString("ar");
};

function StatusReport() {
  const data = getReportData();
  const total = data.projectsByStatus.reduce((s, [, c]) => s + c, 0);

  const pieData = data.projectsByStatus.map(([name, value]) => ({
    name,
    value,
  }));

  const tableRows: {
    label: string;
    statusKey: string;
    count: number;
    pct: string;
    color: string;
  }[] = data.projectsByStatus.map(([name, count]) => ({
    label: name,
    statusKey: name,
    count,
    pct: `${((count / total) * 100).toFixed(0)}%`,
    color: STATUS_COLORS[name] ?? "#94a3b8",
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">
        توزيع المشاريع حسب الحالة
      </h2>
      <div className="flex flex-col items-center gap-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={50}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {pieData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={STATUS_COLORS[entry.name] ?? "#94a3b8"}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value} مشاريع`, ""]} />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {pieData.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: STATUS_COLORS[entry.name] ?? "#94a3b8" }}
              />
              <span className="text-sm text-foreground">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm" dir="rtl">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-right px-4 py-3 font-semibold text-foreground">
                الحالة
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                عدد المشاريع
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                النسبة
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-card" : "bg-background"}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: row.color }}
                    />
                    <span className="text-foreground">{row.label}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center font-mono font-semibold text-foreground">
                  {row.count}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-white"
                    style={{ background: row.color }}
                  >
                    {row.pct}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LocationReport() {
  const data = getReportData();
  const barData = data.projectsByLocation.map(([name, count]) => ({
    name,
    count,
  }));
  const chartHeight = Math.max(300, barData.length * 60);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">
        توزيع المشاريع حسب الموقع
      </h2>
      <div style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tickCount={6}
              tick={{ fontSize: 12 }}
              label={{
                value: "عدد المشاريع",
                position: "insideBottom",
                offset: -2,
                fontSize: 12,
              }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 13 }}
              width={80}
            />
            <Tooltip
              formatter={(value: number) => [`${value} مشاريع`, "العدد"]}
            />
            <Bar
              dataKey="count"
              fill="#2563eb"
              radius={[0, 4, 4, 0]}
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function FinancialReport() {
  const data = getReportData();
  const barData = data.financialSummary.map(([name, allocated, spent]) => ({
    name,
    مخصص: allocated,
    مصروف: spent,
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">
        الملخص المالي حسب الموقع
      </h2>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={barData}
          margin={{ top: 10, right: 10, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={formatBudget} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value: number) => [`${formatBudget(value)} ريال`, ""]}
          />
          <Legend />
          <Bar
            dataKey="مخصص"
            fill="#2563eb"
            radius={[4, 4, 0, 0]}
            barSize={22}
          />
          <Bar
            dataKey="مصروف"
            fill="#f97316"
            radius={[4, 4, 0, 0]}
            barSize={22}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Summary table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm" dir="rtl">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-right px-4 py-3 font-semibold text-foreground">
                الموقع
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                المخصص
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                المصروف
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                نسبة الصرف
              </th>
            </tr>
          </thead>
          <tbody>
            {data.financialSummary.map(([name, allocated, spent], i) => {
              const pct = Math.round((spent / allocated) * 100);
              return (
                <tr
                  key={name}
                  className={i % 2 === 0 ? "bg-card" : "bg-background"}
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {name}
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-primary">
                    {formatBudget(allocated)} ر.س
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-orange-600">
                    {formatBudget(spent)} ر.س
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={
                            {
                              width: `${Math.min(pct, 100)}%`,
                              background:
                                pct > 90
                                  ? "#ef4444"
                                  : pct > 70
                                    ? "#f97316"
                                    : "#22c55e",
                            } as React.CSSProperties
                          }
                        />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {pct}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DelayedReport() {
  const projects = getProjects().filter((p) => p.status === "متوقف");

  const today = new Date();
  const delayDays = (endDate: string) => {
    const end = new Date(endDate);
    if (end < today)
      return Math.floor((today.getTime() - end.getTime()) / 86_400_000);
    return 0;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">
        المشاريع المتأخرة
      </h2>
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm" dir="rtl">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-right px-4 py-3 font-semibold text-foreground">
                #
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground">
                اسم المشروع
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground">
                الموقع
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                نسبة التقدم
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">
                التأخير (يوم)
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => {
              const delay = delayDays(project.endDate);
              const isHighDelay = delay > 180 || project.progress < 40;
              return (
                <tr
                  key={project.id}
                  data-ocid={`delayed.item.${i + 1}`}
                  className={
                    isHighDelay
                      ? "bg-destructive/5 border-r-2 border-destructive"
                      : i % 2 === 0
                        ? "bg-card"
                        : "bg-background"
                  }
                >
                  <td className="px-4 py-3 text-muted-foreground font-mono">
                    {i + 1}
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {project.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {project.location}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-destructive"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-destructive tabular-nums">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-xs font-bold tabular-nums ${
                        isHighDelay
                          ? "bg-destructive text-white"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {delay > 0 ? `${delay} يوم` : "قريب"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {projects.length === 0 && (
        <div
          data-ocid="delayed.empty_state"
          className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3"
        >
          <AlertTriangle className="w-10 h-10 text-muted-foreground/40" />
          <p className="text-sm">لا توجد مشاريع متأخرة حالياً</p>
        </div>
      )}
    </div>
  );
}

export default function ReportsPage() {
  const [selected, setSelected] = useState<ReportType>("status");

  const handleExport = (_type: "excel" | "pdf") => {
    alert("سيتم التنفيذ قريباً");
  };

  return (
    <div className="flex flex-row-reverse min-h-full gap-0" dir="rtl">
      {/* RIGHT sidebar */}
      <aside
        data-ocid="reports.sidebar"
        className="w-64 shrink-0 border-l border-border bg-card flex flex-col"
      >
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground tracking-wide">
            أنواع التقارير
          </h3>
        </div>
        <nav className="flex-1 py-3 space-y-1 px-3">
          {reportTypes.map((type) => (
            <button
              type="button"
              key={type.id}
              data-ocid={`reports.type.${type.id}`}
              onClick={() => setSelected(type.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-smooth text-right ${
                selected === type.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="shrink-0">{type.icon}</span>
              <span className="flex-1 text-right">{type.label}</span>
            </button>
          ))}
        </nav>

        {/* Export buttons */}
        <div className="px-4 pb-5 pt-3 border-t border-border space-y-2">
          <button
            type="button"
            data-ocid="reports.export_excel_button"
            onClick={() => handleExport("excel")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-smooth"
          >
            <FileSpreadsheet className="w-4 h-4" />
            تصدير Excel
          </button>
          <button
            type="button"
            data-ocid="reports.export_pdf_button"
            onClick={() => handleExport("pdf")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-smooth"
          >
            <FileText className="w-4 h-4" />
            تصدير PDF
          </button>
        </div>
      </aside>

      {/* LEFT main content */}
      <main className="flex-1 p-6 bg-background overflow-auto">
        {/* Page header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              التقارير والإحصائيات
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {reportTypes.find((r) => r.id === selected)?.label}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border">
            <span>آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</span>
          </div>
        </div>

        {/* Chart / content area */}
        <div
          data-ocid="reports.content_panel"
          className="bg-card rounded-xl border border-border p-6 shadow-card"
        >
          {selected === "status" && <StatusReport />}
          {selected === "location" && <LocationReport />}
          {selected === "financial" && <FinancialReport />}
          {selected === "delayed" && <DelayedReport />}
        </div>
      </main>
    </div>
  );
}
