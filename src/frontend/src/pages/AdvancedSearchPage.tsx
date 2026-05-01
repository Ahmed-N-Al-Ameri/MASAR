import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type Document,
  type Project,
  getDocuments,
  getProjects,
} from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  FileText,
  FolderOpen,
  MapPin,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const DOMAINS = [
  { value: "projects", label: "المشاريع", icon: FolderOpen },
  { value: "documents", label: "الوثائق والمراسلات", icon: FileText },
  { value: "updates", label: "التحديثات", icon: TrendingUp },
  { value: "financial", label: "السجلات المالية", icon: Building2 },
  { value: "timelines", label: "الجداول الزمنية", icon: CalendarDays },
  { value: "committees", label: "أعمال لجان القسم", icon: MapPin },
];

const PROJECT_TYPE_OPTIONS = [
  { value: "all", label: "جميع الأنواع" },
  { value: "أنابيب", label: "أنابيب" },
  { value: "أنابيب غاز", label: "أنابيب غاز" },
  { value: "مستودعات", label: "مستودعات" },
  { value: "مراكز تحكم", label: "مراكز تحكم" },
  { value: "صيانة وتطوير", label: "صيانة وتطوير" },
  { value: "تسوية مالية", label: "تسوية مالية" },
];

const BENEFICIARY_OPTIONS = [
  { value: "all", label: "جميع الجهات" },
  { value: "وزارة الكهرباء", label: "وزارة الكهرباء" },
  { value: "شركة خطوط الأنابيب", label: "شركة خطوط الأنابيب" },
  { value: "شركة تسويق النفط", label: "شركة تسويق النفط" },
  { value: "شركة غاز الجنوب", label: "شركة غاز الجنوب" },
  { value: "شركة توزيع المنتجات", label: "شركة توزيع المنتجات" },
  { value: "شركة الغاز الوطنية", label: "شركة الغاز الوطنية" },
];

const PROJECT_STATUS_OPTIONS = [
  { value: "all", label: "جميع الحالات" },
  { value: "مستمر", label: "مستمر" },
  { value: "متوقف", label: "متوقف" },
  { value: "داخل للخدمة", label: "داخل للخدمة" },
  { value: "استلام نهائي", label: "استلام نهائي" },
  { value: "منجز تام", label: "منجز تام" },
  { value: "غير موقع", label: "غير موقع" },
  { value: "تسوية مالية", label: "تسوية مالية" },
  { value: "متعلقات مالية", label: "متعلقات مالية" },
  { value: "لم يباشر به", label: "لم يباشر به" },
];

const ACTION_STATUS_OPTIONS = [
  { value: "all", label: "جميع الحالات" },
  { value: "pending", label: "منتظر" },
  { value: "completed", label: "مكتمل" },
  { value: "cancelled", label: "ملغي" },
];

const YEAR_OPTIONS = [
  { value: "all", label: "جميع السنوات" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
];

const DOC_TYPE_OPTIONS = [
  { value: "all", label: "جميع الأنواع" },
  { value: "Study", label: "دراسة" },
  { value: "Contract", label: "عقد" },
  { value: "Execution", label: "تنفيذ" },
  { value: "Correspondence", label: "مراسلة" },
];

const STATUS_COLORS: Record<string, string> = {
  OnTrack: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Delayed: "bg-red-100 text-red-800 border-red-200",
  Completed: "bg-blue-100 text-blue-800 border-blue-200",
  Pending: "bg-amber-100 text-amber-800 border-amber-200",
};

const STATUS_LABELS: Record<string, string> = {
  OnTrack: "قيد التنفيذ",
  Delayed: "متأخر",
  Completed: "منجز",
  Pending: "بانتظار إجراء",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectFilters {
  projectName: string;
  projectNumber: string;
  projectType: string;
  location: string;
  beneficiary: string;
  executor: string;
  contractor: string;
  contractNumber: string;
  bookNumber: string;
  status: string;
  actionStatus: string;
  year: string;
  minProgress: string;
  maxProgress: string;
  minSpend: string;
  maxSpend: string;
}

interface DocFilters {
  bookNumber: string;
  dateFrom: string;
  dateTo: string;
  docType: string;
  folderName: string;
  relatedProject: string;
}

interface GenericFilters {
  keyword: string;
  dateFrom: string;
  dateTo: string;
}

type SearchResults =
  | { kind: "projects"; data: Project[] }
  | { kind: "documents"; data: Document[] }
  | {
      kind: "generic";
      data: { id: number; title: string; date: string; type: string }[];
    };

// ─── Helper ───────────────────────────────────────────────────────────────────

const allProjectsData = getProjects();
const allDocumentsData = getProjects().flatMap((p) => getDocuments(p.id));

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldGroup({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs font-semibold text-foreground">{label}</Label>
      {children}
    </div>
  );
}

function ProjectsFilterPanel({
  filters,
  onChange,
}: {
  filters: ProjectFilters;
  onChange: (f: Partial<ProjectFilters>) => void;
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <FieldGroup label="اسم المشروع">
        <Input
          value={filters.projectName}
          onChange={(e) => onChange({ projectName: e.target.value })}
          placeholder="أدخل اسم المشروع أو جزء منه"
          className="text-sm"
          data-ocid="search.project_name.input"
        />
      </FieldGroup>
      <FieldGroup label="رقم المشروع">
        <Input
          value={filters.projectNumber}
          onChange={(e) => onChange({ projectNumber: e.target.value })}
          placeholder="رقم المشروع"
          className="text-sm"
          data-ocid="search.project_number.input"
        />
      </FieldGroup>
      <FieldGroup label="نوع المشروع">
        <Select
          value={filters.projectType}
          onValueChange={(v) => onChange({ projectType: v })}
        >
          <SelectTrigger
            className="text-sm"
            data-ocid="search.project_type.select"
          >
            <SelectValue placeholder="اختر نوع المشروع" />
          </SelectTrigger>
          <SelectContent>
            {PROJECT_TYPE_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="الموقع">
        <Input
          value={filters.location}
          onChange={(e) => onChange({ location: e.target.value })}
          placeholder="المدينة أو المنطقة"
          className="text-sm"
          data-ocid="search.location.input"
        />
      </FieldGroup>
      <FieldGroup label="الجهة المستفيدة">
        <Select
          value={filters.beneficiary}
          onValueChange={(v) => onChange({ beneficiary: v })}
        >
          <SelectTrigger
            className="text-sm"
            data-ocid="search.beneficiary.select"
          >
            <SelectValue placeholder="اختر الجهة المستفيدة" />
          </SelectTrigger>
          <SelectContent>
            {BENEFICIARY_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="الجهة المنفذة">
        <Input
          value={filters.executor}
          onChange={(e) => onChange({ executor: e.target.value })}
          placeholder="اسم الجهة المنفذة"
          className="text-sm"
          data-ocid="search.executor.input"
        />
      </FieldGroup>
      <FieldGroup label="اسم المقاول">
        <Input
          value={filters.contractor}
          onChange={(e) => onChange({ contractor: e.target.value })}
          placeholder="اسم المقاول"
          className="text-sm"
          data-ocid="search.contractor.input"
        />
      </FieldGroup>
      <FieldGroup label="رقم العقد">
        <Input
          value={filters.contractNumber}
          onChange={(e) => onChange({ contractNumber: e.target.value })}
          placeholder="رقم العقد"
          className="text-sm"
          data-ocid="search.contract_number.input"
        />
      </FieldGroup>
      <FieldGroup label="رقم الكتاب">
        <Input
          value={filters.bookNumber}
          onChange={(e) => onChange({ bookNumber: e.target.value })}
          placeholder="رقم الكتاب"
          className="text-sm"
          data-ocid="search.book_number.input"
        />
      </FieldGroup>
      <FieldGroup label="حالة المشروع">
        <Select
          value={filters.status}
          onValueChange={(v) => onChange({ status: v })}
        >
          <SelectTrigger className="text-sm" data-ocid="search.status.select">
            <SelectValue placeholder="اختر الحالة" />
          </SelectTrigger>
          <SelectContent>
            {PROJECT_STATUS_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="حالة الإجراء">
        <Select
          value={filters.actionStatus}
          onValueChange={(v) => onChange({ actionStatus: v })}
        >
          <SelectTrigger
            className="text-sm"
            data-ocid="search.action_status.select"
          >
            <SelectValue placeholder="اختر حالة الإجراء" />
          </SelectTrigger>
          <SelectContent>
            {ACTION_STATUS_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="سنة الإدراج">
        <Select
          value={filters.year}
          onValueChange={(v) => onChange({ year: v })}
        >
          <SelectTrigger className="text-sm" data-ocid="search.year.select">
            <SelectValue placeholder="اختر السنة" />
          </SelectTrigger>
          <SelectContent>
            {YEAR_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="نسبة الإنجاز من (%)">
        <Input
          type="number"
          min="0"
          max="100"
          value={filters.minProgress}
          onChange={(e) => onChange({ minProgress: e.target.value })}
          placeholder="0"
          className="text-sm"
          data-ocid="search.min_progress.input"
        />
      </FieldGroup>
      <FieldGroup label="نسبة الإنجاز إلى (%)">
        <Input
          type="number"
          min="0"
          max="100"
          value={filters.maxProgress}
          onChange={(e) => onChange({ maxProgress: e.target.value })}
          placeholder="100"
          className="text-sm"
          data-ocid="search.max_progress.input"
        />
      </FieldGroup>
      <FieldGroup label="نسبة الصرف من (%)">
        <Input
          type="number"
          min="0"
          max="100"
          value={filters.minSpend}
          onChange={(e) => onChange({ minSpend: e.target.value })}
          placeholder="0"
          className="text-sm"
          data-ocid="search.min_spend.input"
        />
      </FieldGroup>
    </div>
  );
}

function DocsFilterPanel({
  filters,
  onChange,
}: { filters: DocFilters; onChange: (f: Partial<DocFilters>) => void }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <FieldGroup label="رقم الكتاب">
        <Input
          value={filters.bookNumber}
          onChange={(e) => onChange({ bookNumber: e.target.value })}
          placeholder="رقم الكتاب"
          className="text-sm"
          data-ocid="search.doc_book_number.input"
        />
      </FieldGroup>
      <FieldGroup label="تاريخ الكتاب من">
        <Input
          type="date"
          value={filters.dateFrom}
          onChange={(e) => onChange({ dateFrom: e.target.value })}
          className="text-sm"
          data-ocid="search.doc_date_from.input"
        />
      </FieldGroup>
      <FieldGroup label="تاريخ الكتاب إلى">
        <Input
          type="date"
          value={filters.dateTo}
          onChange={(e) => onChange({ dateTo: e.target.value })}
          className="text-sm"
          data-ocid="search.doc_date_to.input"
        />
      </FieldGroup>
      <FieldGroup label="نوع الوثيقة">
        <Select
          value={filters.docType}
          onValueChange={(v) => onChange({ docType: v })}
        >
          <SelectTrigger className="text-sm" data-ocid="search.doc_type.select">
            <SelectValue placeholder="اختر نوع الوثيقة" />
          </SelectTrigger>
          <SelectContent>
            {DOC_TYPE_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldGroup>
      <FieldGroup label="اسم الإضبارة">
        <Input
          value={filters.folderName}
          onChange={(e) => onChange({ folderName: e.target.value })}
          placeholder="اسم الإضبارة"
          className="text-sm"
          data-ocid="search.doc_folder.input"
        />
      </FieldGroup>
      <FieldGroup label="اسم المشروع المرتبط">
        <Input
          value={filters.relatedProject}
          onChange={(e) => onChange({ relatedProject: e.target.value })}
          placeholder="اسم المشروع"
          className="text-sm"
          data-ocid="search.doc_project.input"
        />
      </FieldGroup>
    </div>
  );
}

function GenericFilterPanel({
  filters,
  onChange,
}: {
  filters: GenericFilters;
  onChange: (f: Partial<GenericFilters>) => void;
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <FieldGroup label="كلمة البحث">
        <Input
          value={filters.keyword}
          onChange={(e) => onChange({ keyword: e.target.value })}
          placeholder="أدخل كلمة البحث"
          className="text-sm xl:col-span-1"
          data-ocid="search.generic_keyword.input"
        />
      </FieldGroup>
      <FieldGroup label="التاريخ من">
        <Input
          type="date"
          value={filters.dateFrom}
          onChange={(e) => onChange({ dateFrom: e.target.value })}
          className="text-sm"
          data-ocid="search.generic_date_from.input"
        />
      </FieldGroup>
      <FieldGroup label="التاريخ إلى">
        <Input
          type="date"
          value={filters.dateTo}
          onChange={(e) => onChange({ dateTo: e.target.value })}
          className="text-sm"
          data-ocid="search.generic_date_to.input"
        />
      </FieldGroup>
    </div>
  );
}

// ─── Results Components ───────────────────────────────────────────────────────

function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs w-10">
              #
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              اسم المشروع
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              رقم المشروع
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              نوع المشروع
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              الموقع
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              الجهة المستفيدة
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs min-w-[120px]">
              نسبة الإنجاز
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              الحالة
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs" />
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <tr
              key={project.id}
              className={cn(
                "border-b border-border hover:bg-muted/30 transition-smooth",
                idx % 2 === 0 ? "bg-card" : "bg-muted/10",
              )}
              data-ocid={`search.result.item.${idx + 1}`}
            >
              <td className="py-3 px-4 text-muted-foreground text-xs">
                {idx + 1}
              </td>
              <td className="py-3 px-4">
                <Link
                  to="/projects/$id"
                  params={{ id: String(project.id) }}
                  className="font-semibold text-foreground hover:text-primary transition-smooth line-clamp-1"
                  data-ocid={`search.result.link.${idx + 1}`}
                >
                  {project.name}
                </Link>
              </td>
              <td className="py-3 px-4 text-muted-foreground text-xs">
                {project.contractNumber ?? `PRJ-${project.id}`}
              </td>
              <td className="py-3 px-4 text-xs text-foreground">
                {project.projectType}
              </td>
              <td className="py-3 px-4 text-xs text-muted-foreground">
                {project.location}
              </td>
              <td className="py-3 px-4 text-xs text-muted-foreground line-clamp-1 max-w-[150px]">
                {project.beneficiary ?? "—"}
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        project.status === "متوقف"
                          ? "bg-destructive"
                          : project.status === "منجز تام" ||
                              project.status === "استلام نهائي"
                            ? "bg-primary"
                            : project.status === "لم يباشر به"
                              ? "bg-amber-500"
                              : "bg-emerald-500",
                      )}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-foreground w-8 text-left">
                    {project.progress}%
                  </span>
                </div>
              </td>
              <td className="py-3 px-4">
                <Badge
                  className={cn(
                    "text-[10px] font-semibold border",
                    STATUS_COLORS[project.status],
                  )}
                >
                  {STATUS_LABELS[project.status]}
                </Badge>
              </td>
              <td className="py-3 px-4">
                <Link
                  to="/projects/$id"
                  params={{ id: String(project.id) }}
                  className="text-xs font-medium text-primary hover:underline whitespace-nowrap"
                  data-ocid={`search.result.view_button.${idx + 1}`}
                >
                  عرض الملف
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocumentsTable({ docs }: { docs: Document[] }) {
  const folderLabels: Record<string, string> = {
    Study: "دراسة",
    Contract: "عقد",
    Execution: "تنفيذ",
    Correspondence: "مراسلة",
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs w-10">
              #
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              اسم الوثيقة
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              رقم الوثيقة
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              نوع الوثيقة
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              التاريخ
            </th>
            <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
              المشروع المرتبط
            </th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc, idx) => {
            const project = allProjectsData.find((p) => p.id === doc.projectId);
            return (
              <tr
                key={doc.id}
                className={cn(
                  "border-b border-border hover:bg-muted/30 transition-smooth",
                  idx % 2 === 0 ? "bg-card" : "bg-muted/10",
                )}
                data-ocid={`search.result.item.${idx + 1}`}
              >
                <td className="py-3 px-4 text-muted-foreground text-xs">
                  {idx + 1}
                </td>
                <td className="py-3 px-4 font-semibold text-foreground text-xs">
                  {doc.name}
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs">
                  {doc.docNumber}
                </td>
                <td className="py-3 px-4">
                  <Badge variant="outline" className="text-[10px]">
                    {folderLabels[doc.folder] ?? doc.folder}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs">
                  {doc.date}
                </td>
                <td className="py-3 px-4 text-xs text-muted-foreground">
                  {project?.name ?? "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Default filter state ─────────────────────────────────────────────────────

const DEFAULT_PROJECT_FILTERS: ProjectFilters = {
  projectName: "",
  projectNumber: "",
  projectType: "all",
  location: "",
  beneficiary: "all",
  executor: "",
  contractor: "",
  contractNumber: "",
  bookNumber: "",
  status: "all",
  actionStatus: "all",
  year: "all",
  minProgress: "",
  maxProgress: "",
  minSpend: "",
  maxSpend: "",
};

const DEFAULT_DOC_FILTERS: DocFilters = {
  bookNumber: "",
  dateFrom: "",
  dateTo: "",
  docType: "all",
  folderName: "",
  relatedProject: "",
};

const DEFAULT_GENERIC_FILTERS: GenericFilters = {
  keyword: "",
  dateFrom: "",
  dateTo: "",
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdvancedSearchPage() {
  const [domain, setDomain] = useState("projects");
  const [projectFilters, setProjectFilters] = useState<ProjectFilters>(
    DEFAULT_PROJECT_FILTERS,
  );
  const [docFilters, setDocFilters] = useState<DocFilters>(DEFAULT_DOC_FILTERS);
  const [genericFilters, setGenericFilters] = useState<GenericFilters>(
    DEFAULT_GENERIC_FILTERS,
  );
  const [results, setResults] = useState<SearchResults | null>(null);

  function handleSearch() {
    if (domain === "projects") {
      const f = projectFilters;
      const filtered = allProjectsData.filter((p) => {
        if (f.projectName && !p.name.includes(f.projectName)) return false;
        if (
          f.projectNumber &&
          String(p.id) !== f.projectNumber &&
          !(p.contractNumber ?? "").includes(f.projectNumber)
        )
          return false;
        if (f.projectType !== "all" && p.projectType !== f.projectType)
          return false;
        if (f.location && !p.location.includes(f.location)) return false;
        if (f.beneficiary !== "all" && p.beneficiary !== f.beneficiary)
          return false;
        if (f.contractor && !(p.contractor ?? "").includes(f.contractor))
          return false;
        if (
          f.contractNumber &&
          !(p.contractNumber ?? "").includes(f.contractNumber)
        )
          return false;
        if (f.status !== "all" && p.status !== f.status) return false;
        if (f.year !== "all" && String(p.year) !== f.year) return false;
        if (f.minProgress && p.progress < Number(f.minProgress)) return false;
        if (f.maxProgress && p.progress > Number(f.maxProgress)) return false;
        if (f.minSpend) {
          const spendRate = (p.spent / p.totalCost) * 100;
          if (spendRate < Number(f.minSpend)) return false;
        }
        return true;
      });
      setResults({ kind: "projects", data: filtered });
    } else if (domain === "documents") {
      const f = docFilters;
      const filtered = allDocumentsData.filter((d) => {
        if (f.bookNumber && !d.docNumber.includes(f.bookNumber)) return false;
        if (f.dateFrom && d.date < f.dateFrom) return false;
        if (f.dateTo && d.date > f.dateTo) return false;
        if (f.docType !== "all" && d.folder !== f.docType) return false;
        if (f.folderName && !d.name.includes(f.folderName)) return false;
        if (f.relatedProject) {
          const proj = allProjectsData.find((p) => p.id === d.projectId);
          if (!proj || !proj.name.includes(f.relatedProject)) return false;
        }
        return true;
      });
      setResults({ kind: "documents", data: filtered });
    } else {
      const kw = genericFilters.keyword.toLowerCase();
      const mockGeneric = allProjectsData.map((p) => ({
        id: p.id,
        title: p.name,
        date: p.lastUpdated ?? p.startDate,
        type: p.projectType,
      }));
      const filtered = mockGeneric.filter(
        (item) => !kw || item.title.toLowerCase().includes(kw),
      );
      setResults({ kind: "generic", data: filtered });
    }
  }

  function handleReset() {
    setProjectFilters(DEFAULT_PROJECT_FILTERS);
    setDocFilters(DEFAULT_DOC_FILTERS);
    setGenericFilters(DEFAULT_GENERIC_FILTERS);
    setResults(null);
  }

  function handleDomainChange(d: string) {
    setDomain(d);
    setResults(null);
  }

  const resultCount = results
    ? results.kind === "projects" || results.kind === "documents"
      ? results.data.length
      : results.data.length
    : 0;

  return (
    <div className="space-y-0" dir="rtl">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Search size={20} className="text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">البحث المتقدم</h1>
            <p className="text-xs text-muted-foreground">
              ابحث في جميع وحدات النظام
            </p>
          </div>
        </div>
      </div>

      {/* Main layout: Filters + Results */}
      <div className="flex gap-5 items-start">
        {/* ── Filters Panel (right) ─────────────────────────── */}
        <div className="w-full xl:w-[520px] 2xl:w-[600px] flex-shrink-0 space-y-4">
          {/* Domain Selector */}
          <Card className="border shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal
                  size={15}
                  className="text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold text-foreground">
                  مجال البحث
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {DOMAINS.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => handleDomainChange(d.value)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-smooth",
                      domain === d.value
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground",
                    )}
                    data-ocid={`search.domain.${d.value}`}
                  >
                    <d.icon size={13} aria-hidden="true" />
                    {d.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Filter Criteria */}
          <Card className="border shadow-card">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal
                  size={15}
                  className="text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-foreground">
                  معايير البحث
                </span>
              </div>

              {domain === "projects" && (
                <ProjectsFilterPanel
                  filters={projectFilters}
                  onChange={(f) =>
                    setProjectFilters((prev) => ({ ...prev, ...f }))
                  }
                />
              )}
              {domain === "documents" && (
                <DocsFilterPanel
                  filters={docFilters}
                  onChange={(f) => setDocFilters((prev) => ({ ...prev, ...f }))}
                />
              )}
              {domain !== "projects" && domain !== "documents" && (
                <GenericFilterPanel
                  filters={genericFilters}
                  onChange={(f) =>
                    setGenericFilters((prev) => ({ ...prev, ...f }))
                  }
                />
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-border">
                <Button
                  type="button"
                  onClick={handleSearch}
                  className="flex-1 gap-2 text-sm font-bold h-11"
                  data-ocid="search.submit_button"
                >
                  <Search size={16} aria-hidden="true" />
                  بحث
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 h-11 px-5"
                  data-ocid="search.reset_button"
                >
                  <X size={15} aria-hidden="true" />
                  مسح الفلاتر
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Results Area (left, flex-1) ───────────────────── */}
        <div className="flex-1 min-w-0">
          {results === null ? (
            /* Initial placeholder */
            <Card className="border shadow-card" data-ocid="search.placeholder">
              <CardContent className="py-24 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/8 flex items-center justify-center">
                  <Search
                    size={36}
                    className="text-primary/50"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-foreground mb-1">
                    ابدأ بحثك
                  </p>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    قم بتحديد معايير البحث من اللوحة اليمنى، ثم اضغط على زر{" "}
                    <strong className="text-foreground">بحث</strong> لعرض
                    النتائج
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              className="border shadow-card"
              data-ocid="search.results.section"
            >
              {/* Results header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <h2 className="text-sm font-bold text-foreground">
                    نتائج البحث
                  </h2>
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold">
                    عدد النتائج: {resultCount}{" "}
                    {results.kind === "projects"
                      ? "مشروع"
                      : results.kind === "documents"
                        ? "وثيقة"
                        : "نتيجة"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="text-xs gap-1.5"
                  data-ocid="search.results.reset_button"
                >
                  <X size={13} aria-hidden="true" />
                  مسح وإعادة البحث
                </Button>
              </div>

              {/* Results body */}
              {resultCount === 0 ? (
                <CardContent
                  className="py-16 flex flex-col items-center gap-3"
                  data-ocid="search.empty_state"
                >
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <Search
                      size={24}
                      className="text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    لا توجد نتائج مطابقة
                  </p>
                  <p className="text-xs text-muted-foreground text-center max-w-xs">
                    لم يتم العثور على نتائج تطابق معايير البحث. جرّب تعديل أو
                    تخفيف الشروط.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    data-ocid="search.empty_state.reset_button"
                  >
                    مسح الفلاتر
                  </Button>
                </CardContent>
              ) : results.kind === "projects" ? (
                <ProjectsTable projects={results.data} />
              ) : results.kind === "documents" ? (
                <DocumentsTable docs={results.data} />
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-right py-3 px-4 font-semibold text-foreground text-xs w-10">
                          #
                        </th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
                          العنوان
                        </th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
                          النوع
                        </th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground text-xs">
                          التاريخ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.data.map((item, idx) => (
                        <tr
                          key={item.id}
                          className={cn(
                            "border-b border-border hover:bg-muted/30 transition-smooth",
                            idx % 2 === 0 ? "bg-card" : "bg-muted/10",
                          )}
                          data-ocid={`search.result.item.${idx + 1}`}
                        >
                          <td className="py-3 px-4 text-muted-foreground text-xs">
                            {idx + 1}
                          </td>
                          <td className="py-3 px-4 font-semibold text-foreground text-xs">
                            {item.title}
                          </td>
                          <td className="py-3 px-4 text-xs text-muted-foreground">
                            {item.type}
                          </td>
                          <td className="py-3 px-4 text-xs text-muted-foreground">
                            {item.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
