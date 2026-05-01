import { ProgressBar } from "@/components/ProgressBar";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Task, getProjectById, getProjectTasks } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  FolderOpen,
  Hash,
  MapPin,
  Tag,
} from "lucide-react";

interface ProjectProfilePageProps {
  defaultTab?: string;
}

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000)
    return `${(amount / 1_000_000_000).toFixed(2)} مليار ر.س`;
  if (amount >= 1_000_000)
    return `${(amount / 1_000_000).toFixed(1)} مليون ر.س`;
  return `${amount.toLocaleString("ar-SA")} ر.س`;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Compute task duration in days
function durationDays(start: string, end: string): number {
  return Math.max(
    1,
    Math.ceil(
      (new Date(end).getTime() - new Date(start).getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );
}

interface MiniGanttProps {
  tasks: Task[];
}

function MiniGantt({ tasks }: MiniGanttProps) {
  const preview = tasks.slice(0, 4);
  if (preview.length === 0)
    return <p className="text-sm text-muted-foreground">لا توجد مهام مسجلة.</p>;

  const maxDuration = Math.max(
    ...preview.map((t) => durationDays(t.plannedStart, t.plannedEnd)),
  );

  return (
    <div className="space-y-3" data-ocid="gantt_preview.section">
      {preview.map((task, idx) => {
        const duration = durationDays(task.plannedStart, task.plannedEnd);
        const widthPct = Math.round((duration / maxDuration) * 100);
        const isActualDone = !!task.actualEnd;
        const isInProgress = !!task.actualStart && !task.actualEnd;

        return (
          <div
            key={task.id}
            className="flex items-center gap-3"
            data-ocid={`gantt_preview.item.${idx + 1}`}
          >
            <span className="text-xs text-foreground font-medium w-40 truncate text-right shrink-0">
              {task.name}
            </span>
            <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden relative">
              <div
                className={cn(
                  "h-full rounded-full transition-smooth flex items-center justify-end px-2",
                  isActualDone
                    ? "bg-emerald-500"
                    : isInProgress
                      ? "bg-primary"
                      : "bg-muted-foreground/30",
                )}
                style={{ width: `${widthPct}%` }}
              >
                <span className="text-[10px] font-semibold text-white leading-none">
                  {duration}د
                </span>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground w-16 shrink-0 text-left">
              {isActualDone ? "مكتمل" : isInProgress ? "جاري" : "لم يبدأ"}
            </span>
          </div>
        );
      })}
      <div className="flex items-center gap-4 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
          <span className="text-xs text-muted-foreground">مكتمل</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
          <span className="text-xs text-muted-foreground">قيد التنفيذ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-muted-foreground/30 inline-block" />
          <span className="text-xs text-muted-foreground">لم يبدأ</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectProfilePage({
  defaultTab = "summary",
}: ProjectProfilePageProps) {
  const { id } = useParams({ strict: false }) as { id?: string };
  const projectId = id ? Number(id) : Number.NaN;

  const project = Number.isNaN(projectId)
    ? undefined
    : getProjectById(projectId);
  const tasks = Number.isNaN(projectId) ? [] : getProjectTasks(projectId);

  if (!project) {
    return (
      <div
        className="flex flex-col items-center justify-center h-64 gap-3"
        data-ocid="project_not_found.section"
      >
        <p className="text-lg font-semibold text-foreground">
          المشروع غير موجود
        </p>
        <p className="text-sm text-muted-foreground">
          لم يتم العثور على مشروع بهذا المعرف
        </p>
        <Link to="/projects">
          <Button
            variant="outline"
            size="sm"
            data-ocid="back_to_projects.button"
          >
            <ArrowLeft className="w-4 h-4 ml-1" />
            العودة إلى المشاريع
          </Button>
        </Link>
      </div>
    );
  }

  const remaining = project.totalCost - project.spent;

  const basicInfoRows: { label: string; value: string }[] = [
    { label: "اسم المشروع", value: project.name },
    { label: "الموقع", value: project.location },
    { label: "النوع", value: project.projectType },
    { label: "السنة", value: String(project.year) },
    {
      label: "حالة المشروع",
      value: project.status,
    },
    { label: "تاريخ البدء", value: formatDate(project.startDate) },
    { label: "تاريخ الانتهاء", value: formatDate(project.endDate) },
    { label: "التكلفة الإجمالية", value: formatCurrency(project.totalCost) },
  ];

  return (
    <div className="space-y-6" data-ocid="project_profile.page">
      {/* Header */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1
                className="text-2xl font-bold text-foreground leading-tight"
                data-ocid="project_profile.title"
              >
                {project.name}
              </h1>
              <StatusBadge
                status={project.status}
                className="text-sm px-3 py-1"
              />
            </div>
            {/* Key info chips */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border border-border">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border border-border">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border border-border">
                <Tag className="w-3 h-3" />
                {project.projectType}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm shrink-0 bg-muted/60 px-3 py-1.5 rounded-md border border-border">
            <Hash className="w-3.5 h-3.5" />
            <span className="font-mono font-medium">
              رقم المشروع: PRJ-{String(project.id).padStart(3, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue={defaultTab} data-ocid="project_profile.tabs">
        <TabsList className="w-full justify-start border-b border-border bg-transparent h-auto p-0 gap-0 rounded-none">
          {[
            { value: "summary", label: "الملخص" },
            { value: "basic", label: "البيانات الأساسية" },
            { value: "archive", label: "الأرشيف" },
            { value: "financial", label: "المالية" },
            { value: "executive", label: "التنفيذي" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              data-ocid={`project_profile.tab.${tab.value}`}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="mt-6 space-y-6">
          {/* Metric Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-ocid="summary.metrics.section"
          >
            <Card className="border-border shadow-card">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  التكلفة الإجمالية
                </CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p
                  className="text-xl font-bold text-foreground"
                  data-ocid="summary.total_cost.card"
                >
                  {formatCurrency(project.totalCost)}
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-border shadow-card"
              style={{ borderTop: "3px solid oklch(0.52 0.14 262)" }}
            >
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  المصروف
                </CardTitle>
                <div className="w-2 h-2 rounded-full bg-primary" />
              </CardHeader>
              <CardContent>
                <p
                  className="text-xl font-bold text-foreground"
                  data-ocid="summary.spent.card"
                >
                  {formatCurrency(project.spent)}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {Math.round((project.spent / project.totalCost) * 100)}% من
                  الإجمالي
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-border shadow-card"
              style={{
                borderTop: `3px solid ${remaining >= 0 ? "oklch(0.68 0.12 142)" : "oklch(0.55 0.18 25)"}`,
              }}
            >
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  المتبقي
                </CardTitle>
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    remaining >= 0 ? "bg-emerald-500" : "bg-destructive",
                  )}
                />
              </CardHeader>
              <CardContent>
                <p
                  className={cn(
                    "text-xl font-bold",
                    remaining >= 0 ? "text-emerald-600" : "text-destructive",
                  )}
                  data-ocid="summary.remaining.card"
                >
                  {formatCurrency(Math.abs(remaining))}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {remaining >= 0 ? "ضمن الميزانية" : "تجاوز الميزانية"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Progress */}
          <Card
            className="border-border shadow-card"
            data-ocid="summary.progress.section"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                نسبة الإنجاز
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">التقدم الكلي</span>
                <span className="font-bold text-primary text-lg">
                  {project.progress}%
                </span>
              </div>
              <ProgressBar
                value={project.progress}
                showLabel={false}
                size="md"
                className="[&>div]:h-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground pt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </CardContent>
          </Card>

          {/* Mini Gantt */}
          <Card
            className="border-border shadow-card"
            data-ocid="summary.gantt.section"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                المخطط الزمني التقريبي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MiniGantt tasks={tasks} />
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card
            className="border-border shadow-card"
            data-ocid="summary.timeline.section"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                الجدول الزمني
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">تاريخ البدء</p>
                    <p
                      className="font-semibold text-sm text-foreground"
                      data-ocid="summary.start_date"
                    >
                      {formatDate(project.startDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      تاريخ الانتهاء
                    </p>
                    <p
                      className="font-semibold text-sm text-foreground"
                      data-ocid="summary.end_date"
                    >
                      {formatDate(project.endDate)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Basic Info Tab */}
        <TabsContent value="basic" className="mt-6">
          <Card
            className="border-border shadow-card"
            data-ocid="basic_info.section"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                البيانات الأساسية للمشروع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-border">
                {basicInfoRows.map((row, idx) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0 gap-4"
                    data-ocid={`basic_info.row.${idx + 1}`}
                  >
                    <span className="text-sm text-muted-foreground font-medium shrink-0 w-36">
                      {row.label}
                    </span>
                    <span className="text-sm text-foreground font-semibold text-left flex-1 truncate">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Archive Tab */}
        <TabsContent value="archive" className="mt-6">
          <Card
            className="border-border shadow-card"
            data-ocid="archive_stub.section"
          >
            <CardContent className="py-12 flex flex-col items-center gap-4">
              <FolderOpen className="w-12 h-12 text-muted-foreground/50" />
              <div className="text-center">
                <p className="font-semibold text-foreground mb-1">
                  أرشيف الوثائق
                </p>
                <p className="text-sm text-muted-foreground">
                  اطلع على جميع الوثائق والملفات المرفقة بهذا المشروع
                </p>
              </div>
              <Link
                to="/projects/$id/archive"
                params={{ id: String(project.id) }}
              >
                <Button
                  variant="default"
                  data-ocid="archive_stub.open_modal_button"
                >
                  <FolderOpen className="w-4 h-4 ml-1.5" />
                  فتح الأرشيف
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financial" className="mt-6">
          <Card
            className="border-border shadow-card"
            data-ocid="financial_stub.section"
          >
            <CardContent className="py-12 flex flex-col items-center gap-4">
              <DollarSign className="w-12 h-12 text-muted-foreground/50" />
              <div className="text-center">
                <p className="font-semibold text-foreground mb-1">
                  البيانات المالية
                </p>
                <p className="text-sm text-muted-foreground">
                  تفاصيل ميزانية المشروع والإنفاق والتحليل المالي
                </p>
              </div>
              <Link
                to="/projects/$id/financial"
                params={{ id: String(project.id) }}
              >
                <Button
                  variant="default"
                  data-ocid="financial_stub.open_modal_button"
                >
                  <DollarSign className="w-4 h-4 ml-1.5" />
                  عرض البيانات المالية
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Executive Tab */}
        <TabsContent value="executive" className="mt-6">
          <Card
            className="border-border shadow-card"
            data-ocid="executive_stub.section"
          >
            <CardContent className="py-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Clock className="w-6 h-6 text-muted-foreground/60" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-1">
                  قيد التطوير
                </p>
                <p className="text-sm text-muted-foreground">
                  هذه الوحدة قيد التطوير وستكون متاحة قريباً
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
