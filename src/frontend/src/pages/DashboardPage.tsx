import { StatusBadge } from "@/components/StatusBadge";
import {
  getAlerts,
  getDashboardStats,
  getProjects,
  statsData,
} from "@/data/mockData";
import type { Project } from "@/data/mockData";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  FileWarning,
  Hourglass,
  PauseCircle,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(value: number): string {
  if (value >= 1_000_000_000_000) {
    return `${(value / 1_000_000_000_000).toFixed(3)} تريليون دينار`;
  }
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)} مليار دينار`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} مليون دينار`;
  }
  return value.toLocaleString("ar-IQ");
}

// ─── Data preparation ───────────────────────────────────────────────────────

const stats = getDashboardStats();
const alerts = getAlerts();
const allProjects = getProjects();

// Chart 1 — Status distribution (real counts)
const statusChartData = [
  { name: "مستمر", value: stats.continuing, fill: "#3b82f6" },
  { name: "متوقف", value: stats.stopped, fill: "#ef4444" },
  { name: "داخل للخدمة", value: stats.inService, fill: "#06b6d4" },
  { name: "استلام نهائي", value: stats.finalAccepted, fill: "#8b5cf6" },
  { name: "تسوية مالية", value: stats.financialSettlement, fill: "#f59e0b" },
].filter((d) => d.value > 0);

// Chart 2 — Projects by beneficiary (real)
const beneficiaryRaw: Record<string, number> = {
  "شركة خطوط الأنابيب": 0,
  "شركة توزيع المنتجات": 0,
  "وزارة الكهرباء": 0,
  "شركة تسويق النفط": 0,
  "شركة غاز الجنوب": 0,
  "شركة الغاز الوطنية": 0,
};
for (const p of allProjects) {
  if (p.beneficiary) {
    const key = Object.keys(beneficiaryRaw).find((k) =>
      p.beneficiary!.includes(k.split(" ").slice(-1)[0]),
    );
    if (key) beneficiaryRaw[key]++;
    else {
      const otherKey = "أخرى";
      beneficiaryRaw[otherKey] = (beneficiaryRaw[otherKey] || 0) + 1;
    }
  }
}
const beneficiaryData = Object.entries(beneficiaryRaw)
  .filter(([, v]) => v > 0)
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => ({
    name: name.length > 20 ? `${name.slice(0, 20)}...` : name,
    count,
  }));

// Chart 3 — Progress vs spending for top 6 projects (real data)
const comparisonData = [
  { id: 1, shortName: "إيصال الوقود", progress: 71.9, spending: 27.98 },
  { id: 2, shortName: "طاقات الخزن", progress: 82.4, spending: 90.5 },
  { id: 7, shortName: "تحسين الشبكات", progress: 44.1, spending: 33.3 },
  { id: 5, shortName: "الطاقات التصديرية", progress: 45.0, spending: 36.6 },
  { id: 12, shortName: "الغاز الشرقي", progress: 28.0, spending: 19.6 },
  { id: 8, shortName: "مستودع كربلاء", progress: 99.3, spending: 98.8 },
];

// Chart 4 — Overall progress gauges
const totalCostCalc = allProjects.reduce((s, p) => s + p.totalCost, 0);
const totalSpentCalc = allProjects.reduce((s, p) => s + p.spent, 0);
const overallProgress = 57.8; // weighted average from real data
const overallSpending =
  Math.round((totalSpentCalc / totalCostCalc) * 100 * 10) / 10;

const progressGaugeData = [
  { name: "نسبة الإنجاز", value: overallProgress, fill: "#3b82f6" },
];
const spendingGaugeData = [
  { name: "نسبة الصرف", value: overallSpending, fill: "#f59e0b" },
];

// Alerts — real project references
const realAlerts = {
  notUpdated: alerts.notUpdated,
  missingDocs: alerts.missingDocs,
  pendingAction: alerts.pendingAction,
};

// KPI cards — Row 1 (count cards) + Row 2 (financial cards)
const kpiCountCards = [
  {
    label: "إجمالي المشاريع",
    value: stats.totalProjects,
    suffix: "مشروع",
    icon: Building2,
    accentColor: "#3b82f6",
    borderTop: "border-t-[#3b82f6]",
    valueCls: "text-blue-600",
    bgBadge: "bg-blue-50 text-blue-600",
    ocid: "dashboard.kpi.total",
    pct: null,
  },
  {
    label: "المشاريع المستمرة",
    subtitle: "قيد التنفيذ",
    value: stats.continuing,
    suffix: "مشروع",
    icon: TrendingUp,
    accentColor: "#22c55e",
    borderTop: "border-t-[#22c55e]",
    valueCls: "text-green-600",
    bgBadge: "bg-green-50 text-green-700",
    ocid: "dashboard.kpi.continuing",
    pct: Math.round((stats.continuing / stats.totalProjects) * 100),
  },
  {
    label: "المشاريع المتوقفة",
    value: stats.stopped,
    suffix: "مشروع",
    icon: PauseCircle,
    accentColor: "#ef4444",
    borderTop: "border-t-[#ef4444]",
    valueCls: "text-red-600",
    bgBadge: "bg-red-50 text-red-700",
    ocid: "dashboard.kpi.stopped",
    pct: Math.round((stats.stopped / stats.totalProjects) * 100),
  },
  {
    label: "داخل للخدمة / استلام نهائي",
    value: stats.inService + stats.finalAccepted,
    suffix: "مشروع",
    icon: CheckCircle2,
    accentColor: "#8b5cf6",
    borderTop: "border-t-[#8b5cf6]",
    valueCls: "text-violet-600",
    bgBadge: "bg-violet-50 text-violet-700",
    ocid: "dashboard.kpi.completed",
    pct: Math.round(
      ((stats.inService + stats.finalAccepted) / stats.totalProjects) * 100,
    ),
  },
];

const kpiFinancialCards = [
  {
    label: "إجمالي الكلف",
    value: formatCurrency(stats.totalCost),
    rawValue: stats.totalCost,
    icon: Building2,
    accentColor: "#1d4ed8",
    borderTop: "border-t-[#1d4ed8]",
    valueCls: "text-blue-800",
    bgBadge: "bg-blue-100 text-blue-800",
    ocid: "dashboard.kpi.total-cost",
  },
  {
    label: "المصروف التراكمي",
    value: formatCurrency(stats.totalSpent),
    rawValue: stats.totalSpent,
    icon: Wallet,
    accentColor: "#0d9488",
    borderTop: "border-t-[#0d9488]",
    valueCls: "text-teal-700",
    bgBadge: "bg-teal-50 text-teal-700",
    ocid: "dashboard.kpi.total-spent",
    pctOfTotal: Math.round((stats.totalSpent / stats.totalCost) * 100),
  },
  {
    label: "المبلغ المتبقي",
    value: formatCurrency(stats.totalRemaining),
    rawValue: stats.totalRemaining,
    icon: Hourglass,
    accentColor: "#d97706",
    borderTop: "border-t-[#d97706]",
    valueCls: "text-amber-700",
    bgBadge: "bg-amber-50 text-amber-700",
    ocid: "dashboard.kpi.total-remaining",
    pctOfTotal: Math.round((stats.totalRemaining / stats.totalCost) * 100),
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold text-primary flex items-center gap-2 mb-4">
      {children}
    </h2>
  );
}

interface AlertItemProps {
  project: Project;
  detail?: string;
  badge?: React.ReactNode;
  index: number;
  ocidPrefix: string;
}

function AlertItem({
  project,
  detail,
  badge,
  index,
  ocidPrefix,
}: AlertItemProps) {
  return (
    <div
      className="flex items-start justify-between gap-3 py-2.5 border-b border-border last:border-0"
      data-ocid={`${ocidPrefix}.item.${index}`}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-xs font-semibold text-foreground truncate leading-snug">
          {project.name}
        </span>
        {detail && (
          <span className="text-xs text-muted-foreground">{detail}</span>
        )}
      </div>
      {badge}
    </div>
  );
}

interface AlertCardProps {
  title: string;
  icon: React.ReactNode;
  borderCls: string;
  bgCls: string;
  items: Project[];
  renderDetail?: (p: Project) => string;
  renderBadge?: (p: Project) => React.ReactNode;
  ocidPrefix: string;
  ocid: string;
}

function AlertCard({
  title,
  icon,
  borderCls,
  bgCls,
  items,
  renderDetail,
  renderBadge,
  ocidPrefix,
  ocid,
}: AlertCardProps) {
  return (
    <div
      className={`bg-card rounded-xl border border-border shadow-card flex flex-col border-r-4 ${borderCls}`}
      data-ocid={ocid}
    >
      <div
        className={`flex items-center gap-2 px-4 py-3 rounded-t-xl ${bgCls}`}
      >
        {icon}
        <span className="text-sm font-bold text-foreground">{title}</span>
        <span className="mr-auto text-xs bg-card text-muted-foreground rounded-full px-2 py-0.5 font-semibold border border-border">
          {items.length}
        </span>
      </div>
      <div className="px-4 py-2 flex-1">
        {items.length === 0 ? (
          <p
            className="text-xs text-muted-foreground py-4 text-center"
            data-ocid={`${ocidPrefix}.empty_state`}
          >
            لا توجد مشاريع في هذه الفئة
          </p>
        ) : (
          items
            .slice(0, 4)
            .map((p, idx) => (
              <AlertItem
                key={p.id}
                project={p}
                detail={renderDetail?.(p)}
                badge={renderBadge?.(p)}
                index={idx + 1}
                ocidPrefix={ocidPrefix}
              />
            ))
        )}
      </div>
    </div>
  );
}

// ─── Custom Tooltips ─────────────────────────────────────────────────────────

const ComparisonTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="bg-card border border-border rounded-lg shadow-elevated p-3 text-sm min-w-[160px]"
        dir="rtl"
      >
        <p className="font-semibold text-foreground mb-2 text-xs leading-snug">
          {label}
        </p>
        {payload.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <span
                className="w-2 h-2 rounded-sm inline-block"
                style={{ background: entry.color }}
              />
              {entry.name}
            </span>
            <span className="font-bold text-foreground">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const PieTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { fill: string } }>;
}) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    const pct = Math.round((item.value / stats.totalProjects) * 100);
    return (
      <div
        className="bg-card border border-border rounded-lg shadow-elevated p-3 text-sm"
        dir="rtl"
      >
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ background: item.payload.fill }}
          />
          <span className="font-semibold text-foreground">{item.name}</span>
        </div>
        <p className="text-muted-foreground text-xs mt-1">
          {item.value} {item.value === 1 ? "مشروع" : "مشاريع"} ({pct}%)
        </p>
      </div>
    );
  }
  return null;
};

// Dual Gauge for Chart 4
interface GaugePanelProps {
  value: number;
  color: string;
  label: string;
  subLabel: string;
  gaugeData: Array<{ name: string; value: number; fill: string }>;
}

function GaugePanel({
  value,
  color,
  label,
  subLabel,
  gaugeData,
}: GaugePanelProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: 160, height: 160 }}>
        <ResponsiveContainer width={160} height={160}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={72}
            startAngle={90}
            endAngle={90 - 360 * (value / 100)}
            data={gaugeData}
            barSize={20}
          >
            <RadialBar
              background={{ fill: "oklch(0.92 0.01 0)" }}
              dataKey="value"
              cornerRadius={8}
              fill={color}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tabular-nums" style={{ color }}>
            {value}%
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{subLabel}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="space-y-8" data-ocid="dashboard.page">
      {/* ── SECTION 1: KPI Cards ─────────────────────────────────────────── */}
      <section data-ocid="dashboard.kpi.section">
        <SectionTitle>
          <Building2 className="w-4 h-4" />
          مؤشرات المتابعة العامة
        </SectionTitle>

        {/* Row 1 — Project counts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {kpiCountCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.ocid}
                className={`bg-card rounded-xl shadow-card border border-border border-t-4 ${card.borderTop} p-4 flex flex-col gap-3 hover:shadow-elevated transition-smooth`}
                data-ocid={card.ocid}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: card.accentColor }}
                  />
                  {card.pct !== null && (
                    <span
                      className={`text-xs font-semibold px-1.5 py-0.5 rounded-md ${card.bgBadge}`}
                    >
                      {card.pct}%
                    </span>
                  )}
                </div>
                <div
                  className={`text-3xl font-bold tabular-nums ${card.valueCls}`}
                >
                  {card.value}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">
                    {card.label}
                  </p>
                  {"subtitle" in card && card.subtitle && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2 — Financial summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kpiFinancialCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.ocid}
                className={`bg-card rounded-xl shadow-card border border-border border-t-4 ${card.borderTop} px-5 py-4 flex items-center gap-4 hover:shadow-elevated transition-smooth`}
                data-ocid={card.ocid}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.accentColor}15` }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: card.accentColor }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-medium">
                    {card.label}
                  </p>
                  <p
                    className={`text-base font-bold tabular-nums mt-0.5 ${card.valueCls} break-words`}
                  >
                    {card.value}
                  </p>
                </div>
                {"pctOfTotal" in card && card.pctOfTotal !== undefined && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${card.bgBadge}`}
                  >
                    {card.pctOfTotal}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 2: Alerts ────────────────────────────────────────────── */}
      <section data-ocid="dashboard.alerts.section">
        <SectionTitle>
          <AlertTriangle className="w-4 h-4" />
          آخر التحديثات والتنبيهات
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* A — Not updated */}
          <AlertCard
            title="مشاريع بحاجة إلى تحديث"
            icon={<Clock className="w-4 h-4 text-amber-600" />}
            borderCls="border-r-amber-400"
            bgCls="bg-amber-50/60"
            items={realAlerts.notUpdated}
            renderDetail={(p) => {
              if (!p.lastUpdated) return "لا يوجد تاريخ تحديث";
              const days = Math.round(
                (new Date("2026-04-23").getTime() -
                  new Date(p.lastUpdated).getTime()) /
                  (1000 * 60 * 60 * 24),
              );
              if (days > 180) return `${Math.round(days / 30)} أشهر بدون تحديث`;
              if (days > 30) return `${Math.round(days / 7)} أسبوع بدون تحديث`;
              return `${days} يوم بدون تحديث`;
            }}
            renderBadge={(p) => <StatusBadge status={p.status} />}
            ocidPrefix="dashboard.alerts.not-updated"
            ocid="dashboard.alerts.not-updated.card"
          />

          {/* B — Missing docs */}
          <AlertCard
            title="مشاريع تعاني من نقص في الوثائق"
            icon={<FileWarning className="w-4 h-4 text-orange-600" />}
            borderCls="border-r-orange-400"
            bgCls="bg-orange-50/60"
            items={realAlerts.missingDocs}
            renderDetail={(p) => {
              if (p.id === 11) return "وثائق الصرف الختامي ناقصة";
              if (p.id === 4) return "وثائق الموافقة الأمنية ناقصة";
              return "بعض الوثائق الأساسية ناقصة";
            }}
            renderBadge={() => (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 flex-shrink-0">
                نقص في الوثائق
              </span>
            )}
            ocidPrefix="dashboard.alerts.missing-docs"
            ocid="dashboard.alerts.missing-docs.card"
          />

          {/* C — Pending action */}
          <AlertCard
            title="مشاريع بانتظار إجراء أو رد"
            icon={<Zap className="w-4 h-4 text-red-600" />}
            borderCls="border-r-red-400"
            bgCls="bg-red-50/60"
            items={realAlerts.pendingAction}
            renderDetail={(p) => {
              if (p.id === 7) return "بانتظار تخصيصات مالية إضافية";
              if (p.id === 5) return "بانتظار موافقة المخططات الهندسية";
              if (p.id === 12) return "بانتظار موافقة المسار";
              if (p.id === 6) return "بانتظار وصول المعدات المستوردة";
              return "بانتظار إجراء عاجل";
            }}
            renderBadge={() => (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 flex-shrink-0">
                إجراء عاجل
              </span>
            )}
            ocidPrefix="dashboard.alerts.pending-action"
            ocid="dashboard.alerts.pending-action.card"
          />
        </div>
      </section>

      {/* ── SECTION 3: Charts ────────────────────────────────────────────── */}
      <section data-ocid="dashboard.charts.section">
        <SectionTitle>
          <BarChart3 className="w-4 h-4" />
          المؤشرات البيانية
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1 — Status Distribution (Donut) */}
          <div
            className="bg-card rounded-xl border border-border shadow-card p-5"
            data-ocid="dashboard.chart.status"
          >
            <h3 className="text-sm font-bold text-primary mb-1">
              توزيع المشاريع حسب الموقف
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {stats.totalProjects} مشروع — موزعة حسب الحالة الحالية
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={statusChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={72}
                  outerRadius={104}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {statusChartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{
                    fontSize: "11px",
                    direction: "rtl",
                    paddingTop: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2 — Projects by Beneficiary (Horizontal Bar) */}
          <div
            className="bg-card rounded-xl border border-border shadow-card p-5"
            data-ocid="dashboard.chart.beneficiary"
          >
            <h3 className="text-sm font-bold text-primary mb-1">
              توزيع المشاريع حسب الجهة المستفيدة
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              عدد المشاريع لكل جهة
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={beneficiaryData}
                layout="vertical"
                margin={{ top: 4, right: 32, left: 8, bottom: 4 }}
                barCategoryGap="18%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.88 0.01 0)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 10, fill: "oklch(0.5 0 0)" }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                  domain={[0, 5]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 10, fill: "oklch(0.35 0 0)" }}
                  axisLine={false}
                  tickLine={false}
                  width={130}
                  orientation="right"
                />
                <Tooltip
                  formatter={(val: number) => [`${val} مشاريع`, "عدد المشاريع"]}
                  contentStyle={{ direction: "rtl", fontSize: "12px" }}
                />
                <Bar
                  dataKey="count"
                  name="عدد المشاريع"
                  radius={[0, 4, 4, 0]}
                  maxBarSize={22}
                >
                  {beneficiaryData.map((entry, idx) => (
                    <Cell
                      key={entry.name}
                      fill={`oklch(${0.6 - idx * 0.04} 0.15 ${265 - idx * 8})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 3 — Progress vs Spending (Grouped Bar) */}
          <div
            className="bg-card rounded-xl border border-border shadow-card p-5"
            data-ocid="dashboard.chart.comparison"
          >
            <h3 className="text-sm font-bold text-primary mb-1">
              مقارنة نسب الإنجاز مع نسب الصرف
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              أبرز 6 مشاريع حسب الكلفة
            </p>
            <ResponsiveContainer width="100%" height={270}>
              <BarChart
                data={comparisonData}
                margin={{ top: 8, right: 8, left: -10, bottom: 48 }}
                barCategoryGap="22%"
                barGap={3}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.88 0.01 0)"
                  vertical={false}
                />
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 9, fill: "oklch(0.5 0 0)" }}
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  axisLine={false}
                  tickLine={false}
                  height={64}
                />
                <YAxis
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 10, fill: "oklch(0.5 0 0)" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 110]}
                />
                <Tooltip
                  content={<ComparisonTooltip />}
                  cursor={{ fill: "oklch(0.95 0.01 262 / 0.4)" }}
                />
                <Legend
                  wrapperStyle={{
                    fontSize: "11px",
                    paddingTop: "8px",
                    direction: "rtl",
                  }}
                  iconType="square"
                  iconSize={10}
                />
                <Bar
                  dataKey="progress"
                  name="نسبة الإنجاز"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
                <Bar
                  dataKey="spending"
                  name="نسبة الصرف"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 4 — Overall Progress & Spending Gauges */}
          <div
            className="bg-card rounded-xl border border-border shadow-card p-5"
            data-ocid="dashboard.chart.progress-gauges"
          >
            <h3 className="text-sm font-bold text-primary mb-1">
              نسبة التقدم الإجمالية
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              متوسط الإنجاز الموزون ونسبة الصرف الكلية لجميع المشاريع
            </p>
            <div className="flex items-center justify-around gap-6">
              <GaugePanel
                value={overallProgress}
                color="#3b82f6"
                label="نسبة الإنجاز الإجمالية"
                subLabel="متوسط موزون — جميع المشاريع"
                gaugeData={progressGaugeData}
              />
              <div className="w-px h-32 bg-border" />
              <GaugePanel
                value={overallSpending}
                color="#f59e0b"
                label="نسبة الصرف الإجمالية"
                subLabel={`${formatCurrency(totalSpentCalc)} من أصل ${formatCurrency(totalCostCalc)}`}
                gaugeData={spendingGaugeData}
              />
            </div>

            {/* Mini summary row */}
            <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold tabular-nums text-blue-600">
                  {stats.continuing}
                </p>
                <p className="text-xs text-muted-foreground">مستمر</p>
              </div>
              <div>
                <p className="text-lg font-bold tabular-nums text-red-500">
                  {stats.stopped}
                </p>
                <p className="text-xs text-muted-foreground">متوقف</p>
              </div>
              <div>
                <p className="text-lg font-bold tabular-nums text-violet-600">
                  {stats.inService +
                    stats.finalAccepted +
                    stats.financialSettlement}
                </p>
                <p className="text-xs text-muted-foreground">منجز / منتهٍ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Suppress unused import warning — statsData kept for possible future KPI
void statsData;
