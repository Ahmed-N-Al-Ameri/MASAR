import { ProgressBar } from "@/components/ProgressBar";
import { StatusBadge } from "@/components/StatusBadge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Project, type ProjectStatus, getProjects } from "@/data/mockData";
import { useNavigate } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";
import { useMemo, useState } from "react";

const STATUS_LABELS: Record<ProjectStatus, string> = {
  مستمر: "مستمر",
  متوقف: "متوقف",
  "داخل للخدمة": "داخل للخدمة",
  "استلام نهائي": "استلام نهائي",
  "منجز تام": "منجز تام",
  "غير موقع": "غير موقع",
  "تسوية مالية": "تسوية مالية",
  "متعلقات مالية": "متعلقات مالية",
  "لم يباشر به": "لم يباشر به",
};

const ALL_TYPES = [
  "أنابيب",
  "مستودعات",
  "أنابيب غاز",
  "مراكز تحكم",
  "صيانة وتطوير",
  "تسوية مالية",
] as const;

export default function ProjectsPage() {
  const navigate = useNavigate();
  const allProjects = useMemo(() => getProjects(), []);

  const [yearFilter, setYearFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showComingSoon, setShowComingSoon] = useState(false);

  const uniqueLocations = useMemo(
    () => [...new Set(allProjects.map((p) => p.location))].sort(),
    [allProjects],
  );

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      if (yearFilter !== "all" && p.year !== Number(yearFilter)) return false;
      if (typeFilter !== "all" && p.projectType !== typeFilter) return false;
      if (locationFilter !== "all" && p.location !== locationFilter)
        return false;
      if (statusFilter !== "all" && p.status !== statusFilter) return false;
      return true;
    });
  }, [allProjects, yearFilter, typeFilter, locationFilter, statusFilter]);

  function handleView(project: Project) {
    navigate({ to: "/projects/$id", params: { id: String(project.id) } });
  }

  return (
    <div className="flex flex-col gap-6 p-6" dir="rtl">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground font-display">
            مخزون المشاريع
          </h1>
          <Badge
            variant="secondary"
            className="text-sm font-semibold px-2.5 py-0.5"
            data-ocid="projects.total_badge"
          >
            {allProjects.length} مشروع
          </Badge>
        </div>
        <Button
          className="gap-2"
          onClick={() => setShowComingSoon(true)}
          data-ocid="projects.new_project_button"
        >
          <PlusCircle className="h-4 w-4" />
          مشروع جديد
        </Button>
      </div>

      {/* Filter bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Select value={yearFilter} onValueChange={setYearFilter} dir="rtl">
          <SelectTrigger data-ocid="projects.year_filter">
            <SelectValue placeholder="السنة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع السنوات</SelectItem>
            {[2017, 2018, 2019, 2020, 2021, 2022].map((y) => (
              <SelectItem key={y} value={String(y)}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={setTypeFilter} dir="rtl">
          <SelectTrigger data-ocid="projects.type_filter">
            <SelectValue placeholder="النوع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الأنواع</SelectItem>
            {ALL_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={locationFilter}
          onValueChange={setLocationFilter}
          dir="rtl"
        >
          <SelectTrigger data-ocid="projects.location_filter">
            <SelectValue placeholder="الموقع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المواقع</SelectItem>
            {uniqueLocations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter} dir="rtl">
          <SelectTrigger data-ocid="projects.status_filter">
            <SelectValue placeholder="الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الحالات</SelectItem>
            {(Object.keys(STATUS_LABELS) as ProjectStatus[]).map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_LABELS[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" data-ocid="projects.table">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground w-12">
                  #
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                  اسم المشروع
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground hidden md:table-cell">
                  رقم المشروع
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground hidden lg:table-cell">
                  الموقع
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                  الحالة
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground min-w-[140px]">
                  التقدم
                </th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground w-24">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="py-16 text-center text-muted-foreground"
                    data-ocid="projects.empty_state"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-3xl text-muted-foreground/40">
                        —
                      </span>
                      <p className="text-base font-medium">
                        لا توجد مشاريع تطابق معايير البحث
                      </p>
                      <p className="text-xs">حاول تغيير عوامل التصفية أعلاه</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((project, index) => (
                  <tr
                    key={project.id}
                    className={[
                      "border-b border-border last:border-0 transition-colors duration-150",
                      "hover:bg-primary/5 cursor-pointer",
                      index % 2 === 1 ? "bg-muted/20" : "bg-card",
                    ].join(" ")}
                    onClick={() => handleView(project)}
                    onKeyDown={(e) => e.key === "Enter" && handleView(project)}
                    tabIndex={0}
                    data-ocid={`projects.item.${index + 1}`}
                  >
                    <td className="py-3.5 px-4 text-muted-foreground font-mono text-xs tabular-nums">
                      {index + 1}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground leading-snug">
                        {project.name}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-0.5 md:hidden">
                        {project.location}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-muted-foreground font-mono text-xs tabular-nums hidden md:table-cell">
                      PRJ-{String(project.id).padStart(4, "0")}
                    </td>
                    <td className="py-3.5 px-4 text-foreground hidden lg:table-cell">
                      {project.location}
                    </td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="py-3.5 px-4">
                      <ProgressBar value={project.progress} size="sm" />
                    </td>
                    <td
                      className="py-3.5 px-4"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary/40 hover:bg-primary/10 hover:border-primary transition-colors"
                        onClick={() => handleView(project)}
                        data-ocid={`projects.view_button.${index + 1}`}
                      >
                        عرض
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <div className="px-4 py-3 border-t border-border bg-muted/30 text-xs text-muted-foreground text-right">
            عرض {filtered.length} من أصل {allProjects.length} مشروع
          </div>
        )}
      </div>

      {/* Coming Soon Dialog */}
      <AlertDialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <AlertDialogContent dir="rtl" data-ocid="projects.coming_soon_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-right">
              إنشاء مشروع جديد
            </AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              هذه الميزة قيد التطوير وستكون متاحة قريباً.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row-reverse justify-start gap-2">
            <AlertDialogCancel data-ocid="projects.coming_soon_close_button">
              حسناً
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
