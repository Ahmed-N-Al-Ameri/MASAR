import { Badge } from "@/components/ui/badge";
import { getProjectById, getProjectTasks } from "@/data/mockData";
import type { Task } from "@/data/mockData";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useMemo } from "react";

// ─── Date helpers ────────────────────────────────────────────────────────────

function parseDate(s: string): Date {
  return new Date(`${s}T00:00:00`);
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function formatMonth(d: Date): string {
  return d.toLocaleDateString("ar-SA", { month: "short", year: "numeric" });
}

function clampPercent(val: number): number {
  return Math.max(0, Math.min(100, val));
}

// ─── Bar position calculator ─────────────────────────────────────────────────

interface BarRect {
  leftPct: number;
  widthPct: number;
}

function barRect(
  start: string,
  end: string,
  rangeStart: Date,
  totalDays: number,
): BarRect {
  const s = parseDate(start);
  const e = parseDate(end);
  const leftPct = clampPercent((daysBetween(rangeStart, s) / totalDays) * 100);
  const widthPct = clampPercent((daysBetween(s, e) / totalDays) * 100);
  return { leftPct, widthPct };
}

// ─── Month header builder ────────────────────────────────────────────────────

interface MonthCol {
  label: string;
  leftPct: number;
  widthPct: number;
}

function buildMonthCols(rangeStart: Date, totalDays: number): MonthCol[] {
  const cols: MonthCol[] = [];
  let cursor = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1);
  while (cursor <= addDays(rangeStart, totalDays)) {
    const nextMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    const colStart = cursor < rangeStart ? rangeStart : cursor;
    const colEnd =
      nextMonth > addDays(rangeStart, totalDays)
        ? addDays(rangeStart, totalDays)
        : nextMonth;
    const leftPct = clampPercent(
      (daysBetween(rangeStart, colStart) / totalDays) * 100,
    );
    const widthPct = clampPercent(
      (daysBetween(colStart, colEnd) / totalDays) * 100,
    );
    cols.push({ label: formatMonth(cursor), leftPct, widthPct });
    cursor = nextMonth;
  }
  return cols;
}

// ─── Task summary helpers ────────────────────────────────────────────────────

function isCompleted(task: Task): boolean {
  return !!task.actualEnd;
}

function isDelayed(task: Task): boolean {
  if (!task.actualEnd) return false;
  return parseDate(task.actualEnd) > parseDate(task.plannedEnd);
}

function durationDays(start: string, end: string): number {
  return daysBetween(parseDate(start), parseDate(end));
}

// ─── Legend item ─────────────────────────────────────────────────────────────

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm text-foreground">
      <span className={`inline-block w-5 h-3 rounded-sm ${color}`} />
      {label}
    </span>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function GanttPage() {
  const { id } = useParams({ from: "/projects/$id/gantt" });
  const navigate = useNavigate();
  const projectId = Number(id);
  const project = getProjectById(projectId);
  const tasks = getProjectTasks(projectId);

  // Calculate timeline range
  const { rangeStart, totalDays, monthCols } = useMemo(() => {
    if (!tasks.length) {
      const today = new Date();
      return {
        rangeStart: today,
        totalDays: 90,
        monthCols: buildMonthCols(today, 90),
      };
    }
    const allDates = tasks.flatMap((t) => {
      const dates = [parseDate(t.plannedStart), parseDate(t.plannedEnd)];
      if (t.actualStart) dates.push(parseDate(t.actualStart));
      if (t.actualEnd) dates.push(parseDate(t.actualEnd));
      return dates;
    });
    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));
    // Pad by 7 days on each side
    const rangeStart = addDays(minDate, -7);
    const rangeEnd = addDays(maxDate, 7);
    const totalDays = Math.max(daysBetween(rangeStart, rangeEnd), 30);
    return {
      rangeStart,
      totalDays,
      monthCols: buildMonthCols(rangeStart, totalDays),
    };
  }, [tasks]);

  // Summary stats
  const completedCount = tasks.filter(isCompleted).length;
  const delayedCount = tasks.filter(isDelayed).length;

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
        لم يتم العثور على المشروع
      </div>
    );
  }

  return (
    <div dir="rtl" className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">المخطط الزمني</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{project.name}</p>
        </div>
        <button
          type="button"
          data-ocid="gantt.back_button"
          onClick={() => navigate({ to: "/projects/$id", params: { id } })}
          className="flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-md transition-colors"
        >
          <span className="text-base">&#8592;</span>
          العودة للمشروع
        </button>
      </div>

      {/* Summary stats */}
      <div data-ocid="gantt.summary_section" className="grid grid-cols-3 gap-4">
        {[
          {
            label: "عدد الأنشطة",
            value: tasks.length,
            color: "text-foreground",
          },
          {
            label: "المكتملة",
            value: completedCount,
            color: "text-emerald-600",
          },
          { label: "المتأخرة", value: delayedCount, color: "text-red-600" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-lg p-4 text-center shadow-sm"
          >
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 bg-card border border-border rounded-lg px-5 py-3 shadow-sm">
        <span className="text-sm font-semibold text-muted-foreground ml-2">
          المفتاح:
        </span>
        <LegendItem color="bg-blue-500" label="مخطط" />
        <LegendItem color="bg-orange-400" label="فعلي" />
        <LegendItem color="bg-red-500" label="تأخير" />
      </div>

      {/* Gantt Chart */}
      <div
        data-ocid="gantt.chart_panel"
        className="bg-card border border-border rounded-xl shadow-sm overflow-hidden"
      >
        {/* Column header row */}
        <div className="flex border-b border-border">
          {/* Task info columns */}
          <div className="flex-none w-[380px] border-l border-border bg-muted/40 grid grid-cols-[28px_1fr_100px_70px_70px] items-center px-3 py-2 gap-2">
            <span className="text-xs font-bold text-muted-foreground text-center">
              #
            </span>
            <span className="text-xs font-bold text-muted-foreground">
              اسم النشاط
            </span>
            <span className="text-xs font-bold text-muted-foreground text-center">
              المسؤول
            </span>
            <span className="text-xs font-bold text-muted-foreground text-center">
              مخطط
            </span>
            <span className="text-xs font-bold text-muted-foreground text-center">
              فعلي
            </span>
          </div>
          {/* Timeline header */}
          <div className="flex-1 relative h-9 bg-muted/20 overflow-hidden">
            {monthCols.map((col) => (
              <div
                key={`${col.label}-${col.leftPct}`}
                className="absolute top-0 bottom-0 flex items-center justify-center border-l border-border/50 overflow-hidden"
                style={{ left: `${col.leftPct}%`, width: `${col.widthPct}%` }}
              >
                <span className="text-[11px] font-medium text-muted-foreground whitespace-nowrap px-1">
                  {col.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Task rows */}
        {tasks.length === 0 ? (
          <div
            data-ocid="gantt.empty_state"
            className="flex flex-col items-center justify-center py-16 gap-3"
          >
            <div className="text-4xl text-muted-foreground/30">&#128197;</div>
            <p className="text-muted-foreground text-sm">
              لا توجد أنشطة لهذا المشروع
            </p>
          </div>
        ) : (
          tasks.map((task, idx) => {
            const plannedBar = barRect(
              task.plannedStart,
              task.plannedEnd,
              rangeStart,
              totalDays,
            );
            const hasActual = !!task.actualStart && !!task.actualEnd;
            const hasActualStart = !!task.actualStart;
            const actualBar = hasActual
              ? barRect(
                  task.actualStart!,
                  task.actualEnd!,
                  rangeStart,
                  totalDays,
                )
              : hasActualStart
                ? barRect(
                    task.actualStart!,
                    task.plannedEnd,
                    rangeStart,
                    totalDays,
                  )
                : null;
            const delayed = isDelayed(task);
            const delayBar =
              delayed && task.actualEnd
                ? barRect(
                    task.plannedEnd,
                    task.actualEnd!,
                    rangeStart,
                    totalDays,
                  )
                : null;
            const rowBg = idx % 2 === 0 ? "bg-background" : "bg-muted/20";

            return (
              <div
                key={task.id}
                data-ocid={`gantt.item.${idx + 1}`}
                className={`flex border-b border-border/50 last:border-b-0 ${rowBg}`}
                style={{ height: "44px" }}
              >
                {/* Task info */}
                <div className="flex-none w-[380px] border-l border-border/50 grid grid-cols-[28px_1fr_100px_70px_70px] items-center px-3 gap-2">
                  <span className="text-xs text-muted-foreground text-center font-mono">
                    {idx + 1}
                  </span>
                  <span
                    className="text-xs font-medium text-foreground truncate"
                    title={task.name}
                  >
                    {task.name}
                  </span>
                  <span
                    className="text-[10px] text-muted-foreground text-center truncate"
                    title={task.assignee}
                  >
                    {task.assignee}
                  </span>
                  <span className="text-[10px] text-muted-foreground text-center font-mono">
                    {durationDays(task.plannedStart, task.plannedEnd)}د
                  </span>
                  <span className="text-[10px] text-muted-foreground text-center font-mono">
                    {task.actualStart && task.actualEnd
                      ? `${durationDays(task.actualStart, task.actualEnd)}د`
                      : task.actualStart
                        ? "جار"
                        : "—"}
                  </span>
                </div>

                {/* Timeline bars */}
                <div className="flex-1 relative overflow-hidden">
                  {/* Month grid lines */}
                  {monthCols.map((col) => (
                    <div
                      key={`gridline-${col.label}-${col.leftPct}`}
                      className="absolute top-0 bottom-0 border-l border-border/20"
                      style={{ left: `${col.leftPct}%` }}
                    />
                  ))}

                  {/* Planned bar */}
                  <div
                    data-ocid={`gantt.bar_planned.${idx + 1}`}
                    className="absolute top-1/2 -translate-y-1/2 h-5 rounded bg-blue-500/80 border border-blue-600/40"
                    style={{
                      left: `${plannedBar.leftPct}%`,
                      width: `${Math.max(plannedBar.widthPct, 0.4)}%`,
                    }}
                    title={`مخطط: ${task.plannedStart} — ${task.plannedEnd}`}
                  />

                  {/* Actual bar */}
                  {actualBar && (
                    <div
                      data-ocid={`gantt.bar_actual.${idx + 1}`}
                      className="absolute top-1/2 h-3 rounded bg-orange-400/90 border border-orange-500/40"
                      style={{
                        top: "calc(50% + 4px)",
                        left: `${actualBar.leftPct}%`,
                        width: `${Math.max(actualBar.widthPct, 0.4)}%`,
                      }}
                      title={`فعلي: ${task.actualStart} — ${task.actualEnd ?? "جاري"}`}
                    />
                  )}

                  {/* Delay indicator */}
                  {delayBar && delayBar.widthPct > 0 && (
                    <div
                      data-ocid={`gantt.bar_delay.${idx + 1}`}
                      className="absolute top-1/2 h-5 -translate-y-1/2 rounded bg-red-500/80 border border-red-600/40 flex items-center justify-center overflow-hidden"
                      style={{
                        left: `${delayBar.leftPct}%`,
                        width: `${Math.max(delayBar.widthPct, 0.8)}%`,
                        minWidth: "28px",
                      }}
                      title="تأخير"
                    >
                      <span className="text-[9px] font-bold text-white whitespace-nowrap px-0.5">
                        تأخير
                      </span>
                    </div>
                  )}

                  {/* Status badge overlay */}
                  {isCompleted(task) && !delayed && (
                    <div
                      className="absolute left-1 top-1/2 -translate-y-1/2"
                      style={{
                        left: `${plannedBar.leftPct + plannedBar.widthPct + 0.5}%`,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-[9px] py-0 px-1 h-4 bg-emerald-100 text-emerald-700 border-emerald-300"
                      >
                        مكتمل
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer note */}
      <p className="text-xs text-muted-foreground text-center pb-2">
        المخطط الزمني يعرض الأنشطة المخططة والفعلية لمشروع: {project.name}
      </p>
    </div>
  );
}
