import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type FinancialItem,
  type Obstacle,
  type ObstaclePriority,
  type ObstacleStatus,
  getFinancialItems,
  getObstacles,
  getProjectById,
} from "@/data/mockData";
import { useNavigate, useParams } from "@tanstack/react-router";
import { AlertCircle, AlertTriangle, ArrowLeft, Info } from "lucide-react";

// ──────────────────────────────────────────
// Circular SVG Gauge
// ──────────────────────────────────────────
interface GaugeProps {
  value: number; // 0-100
  label: string;
  colorClass?: "blue" | "dynamic";
}

function CircularGauge({ value, label, colorClass = "blue" }: GaugeProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const filled = (clamped / 100) * circumference;
  const gap = circumference - filled;

  let strokeColor = "#2563eb"; // blue
  if (colorClass === "dynamic") {
    if (clamped > 80)
      strokeColor = "#f59e0b"; // amber
    else if (clamped < 60)
      strokeColor = "#22c55e"; // green
    else strokeColor = "#2563eb"; // blue
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        role="img"
        aria-label={`${label}: ${clamped}%`}
      >
        {/* Background arc */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="oklch(0.92 0.01 0)"
          strokeWidth="14"
        />
        {/* Filled arc */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${gap}`}
          strokeDashoffset={circumference * 0.25}
          style={{ transition: "stroke-dasharray 0.7s ease" }}
        />
        {/* Percentage text */}
        <text
          x="90"
          y="86"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="30"
          fontWeight="700"
          fill={strokeColor}
          fontFamily="Inter, sans-serif"
        >
          {clamped}%
        </text>
        <text
          x="90"
          y="114"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fill="oklch(0.5 0 0)"
          fontFamily="Inter, sans-serif"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

// ──────────────────────────────────────────
// Budget Table
// ──────────────────────────────────────────
function formatSAR(n: number) {
  return n.toLocaleString("ar-SA");
}

function BudgetTable({ items }: { items: FinancialItem[] }) {
  const totalAllocated = items.reduce((s, i) => s + i.allocated, 0);
  const totalSpent = items.reduce((s, i) => s + i.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;
  const totalPct = totalAllocated > 0 ? (totalSpent / totalAllocated) * 100 : 0;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" data-ocid="financial.budget_table">
        <thead>
          <tr className="bg-muted/60 border-b border-border">
            <th className="text-right py-3 px-4 font-semibold text-foreground">
              البند
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground">
              المخصص (ر.س)
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground">
              المصروف (ر.س)
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground">
              المتبقي (ر.س)
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground min-w-[140px]">
              نسبة الصرف
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            const remaining = item.allocated - item.spent;
            const pct =
              item.allocated > 0
                ? Math.round((item.spent / item.allocated) * 100)
                : 0;
            return (
              <tr
                key={item.id}
                className="border-b border-border hover:bg-muted/30 transition-colors"
                data-ocid={`financial.budget_row.${idx + 1}`}
              >
                <td className="py-3 px-4 text-foreground font-medium">
                  {item.category}
                </td>
                <td className="py-3 px-4 text-muted-foreground tabular-nums">
                  {formatSAR(item.allocated)}
                </td>
                <td className="py-3 px-4 text-muted-foreground tabular-nums">
                  {formatSAR(item.spent)}
                </td>
                <td
                  className="py-3 px-4 tabular-nums"
                  style={{
                    color:
                      remaining < 0
                        ? "oklch(0.55 0.18 25)"
                        : "oklch(0.55 0.12 142)",
                  }}
                >
                  {formatSAR(remaining)}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor:
                            pct > 80
                              ? "oklch(0.73 0.14 85)"
                              : pct > 60
                                ? "#2563eb"
                                : "oklch(0.68 0.12 142)",
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground tabular-nums w-9 text-left">
                      {pct}%
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-primary/5 border-t-2 border-primary/20">
            <td className="py-3 px-4 font-bold text-foreground">الإجمالي</td>
            <td className="py-3 px-4 font-bold tabular-nums text-foreground">
              {formatSAR(totalAllocated)}
            </td>
            <td className="py-3 px-4 font-bold tabular-nums text-foreground">
              {formatSAR(totalSpent)}
            </td>
            <td
              className="py-3 px-4 font-bold tabular-nums"
              style={{
                color:
                  totalRemaining < 0
                    ? "oklch(0.55 0.18 25)"
                    : "oklch(0.55 0.12 142)",
              }}
            >
              {formatSAR(totalRemaining)}
            </td>
            <td className="py-3 px-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.round(totalPct)}%`,
                      backgroundColor:
                        totalPct > 80 ? "oklch(0.73 0.14 85)" : "#2563eb",
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-foreground tabular-nums w-9 text-left">
                  {Math.round(totalPct)}%
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// ──────────────────────────────────────────
// Obstacle Card
// ──────────────────────────────────────────
const priorityConfig: Record<
  ObstaclePriority,
  {
    label: string;
    icon: typeof AlertTriangle;
    color: string;
  }
> = {
  عالية: { label: "عالية", icon: AlertTriangle, color: "oklch(0.55 0.18 25)" },
  متوسطة: { label: "متوسطة", icon: AlertCircle, color: "oklch(0.6 0.14 85)" },
  منخفضة: { label: "منخفضة", icon: Info, color: "#2563eb" },
};

const statusConfig: Record<
  ObstacleStatus,
  { label: string; className: string }
> = {
  مفتوح: { label: "مفتوح", className: "badge-destructive" },
  "قيد المعالجة": { label: "قيد المعالجة", className: "badge-warning" },
  محلول: { label: "محلول", className: "badge-success" },
};

function ObstacleCard({
  obstacle,
  index,
}: { obstacle: Obstacle; index: number }) {
  const priority = priorityConfig[obstacle.priority];
  const status = statusConfig[obstacle.status];
  const Icon = priority.icon;

  return (
    <div
      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:bg-muted/20 transition-colors"
      data-ocid={`financial.obstacle.${index + 1}`}
    >
      <div className="mt-0.5 flex-shrink-0">
        <Icon size={20} style={{ color: priority.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground leading-relaxed">
          {obstacle.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground">
            الأولوية:{" "}
            <span style={{ color: priority.color }} className="font-medium">
              {priority.label}
            </span>
          </span>
        </div>
      </div>
      <div className="flex-shrink-0">
        <span className={status.className}>{status.label}</span>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Main Page
// ──────────────────────────────────────────
export default function FinancialPage() {
  const { id } = useParams({ from: "/projects/$id/financial" });
  const navigate = useNavigate();
  const projectId = Number(id);

  const project = getProjectById(projectId);
  const financialItems = getFinancialItems(projectId);
  const obstacles = getObstacles(projectId);

  const spendingPct = project
    ? Math.round((project.spent / project.totalCost) * 100)
    : 0;

  if (!project) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4"
        data-ocid="financial.error_state"
      >
        <p className="text-muted-foreground text-lg">المشروع غير موجود</p>
        <button
          type="button"
          className="text-primary underline text-sm"
          onClick={() => navigate({ to: "/projects" })}
          data-ocid="financial.back_button"
        >
          العودة لقائمة المشاريع
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8" data-ocid="financial.page">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            البيانات المالية والتنفيذية
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{project.name}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium border border-primary/30 rounded-lg px-3 py-2 hover:bg-primary/5"
          onClick={() => navigate({ to: "/projects/$id", params: { id } })}
          data-ocid="financial.back_button"
        >
          <ArrowLeft size={16} />
          العودة للمشروع
        </button>
      </div>

      {/* Section 1: Gauges */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        data-ocid="financial.gauges_section"
      >
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground text-center">
              نسبة التنفيذ
            </CardTitle>
          </CardHeader>
          <CardContent
            className="flex justify-center py-4"
            data-ocid="financial.execution_gauge"
          >
            <CircularGauge
              value={project.progress}
              label="نسبة الإنجاز"
              colorClass="blue"
            />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground text-center">
              نسبة الإنفاق
            </CardTitle>
          </CardHeader>
          <CardContent
            className="flex justify-center py-4"
            data-ocid="financial.spending_gauge"
          >
            <CircularGauge
              value={spendingPct}
              label="من إجمالي الميزانية"
              colorClass="dynamic"
            />
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Budget Table */}
      <Card className="shadow-card" data-ocid="financial.budget_section">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-base font-semibold text-foreground">
            تفاصيل الميزانية
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {financialItems.length === 0 ? (
            <div
              className="py-12 text-center text-muted-foreground"
              data-ocid="financial.budget.empty_state"
            >
              لا توجد بنود ميزانية لهذا المشروع
            </div>
          ) : (
            <BudgetTable items={financialItems} />
          )}
        </CardContent>
      </Card>

      {/* Section 3: Obstacles */}
      <Card className="shadow-card" data-ocid="financial.obstacles_section">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-base font-semibold text-foreground">
            معوقات التنفيذ
            {obstacles.length > 0 && (
              <Badge variant="secondary" className="mr-2 text-xs">
                {obstacles.length}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          {obstacles.length === 0 ? (
            <div
              className="py-8 text-center text-muted-foreground"
              data-ocid="financial.obstacles.empty_state"
            >
              لا توجد معوقات مسجلة لهذا المشروع
            </div>
          ) : (
            obstacles.map((obstacle, idx) => (
              <ObstacleCard key={obstacle.id} obstacle={obstacle} index={idx} />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
