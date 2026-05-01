import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Search, F as FolderOpen, l as FileText, w as CalendarDays, a as cn, L as Link, e as getProjects, k as getDocuments } from "./index-D0P90mBY.js";
import { B as Badge } from "./badge-CZY1RXcR.js";
import { B as Button } from "./button-B8NTql6j.js";
import { C as Card, a as CardContent } from "./card-TCYZkj4C.js";
import { I as Input, L as Label } from "./label-DHOaOnxj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Cym7zlZc.js";
import { T as TrendingUp } from "./trending-up-sej8Zq6u.js";
import { B as Building2 } from "./building-2-BTG3rz8B.js";
import { M as MapPin } from "./map-pin-ClY89Epo.js";
import "./index-Gc6HE7gQ.js";
import "./index-DHghFEUd.js";
import "./index-s9KzvRTy.js";
import "./index-BYMg47DA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const DOMAINS = [
  { value: "projects", label: "المشاريع", icon: FolderOpen },
  { value: "documents", label: "الوثائق والمراسلات", icon: FileText },
  { value: "updates", label: "التحديثات", icon: TrendingUp },
  { value: "financial", label: "السجلات المالية", icon: Building2 },
  { value: "timelines", label: "الجداول الزمنية", icon: CalendarDays },
  { value: "committees", label: "أعمال لجان القسم", icon: MapPin }
];
const PROJECT_TYPE_OPTIONS = [
  { value: "all", label: "جميع الأنواع" },
  { value: "أنابيب", label: "أنابيب" },
  { value: "أنابيب غاز", label: "أنابيب غاز" },
  { value: "مستودعات", label: "مستودعات" },
  { value: "مراكز تحكم", label: "مراكز تحكم" },
  { value: "صيانة وتطوير", label: "صيانة وتطوير" },
  { value: "تسوية مالية", label: "تسوية مالية" }
];
const BENEFICIARY_OPTIONS = [
  { value: "all", label: "جميع الجهات" },
  { value: "وزارة الكهرباء", label: "وزارة الكهرباء" },
  { value: "شركة خطوط الأنابيب", label: "شركة خطوط الأنابيب" },
  { value: "شركة تسويق النفط", label: "شركة تسويق النفط" },
  { value: "شركة غاز الجنوب", label: "شركة غاز الجنوب" },
  { value: "شركة توزيع المنتجات", label: "شركة توزيع المنتجات" },
  { value: "شركة الغاز الوطنية", label: "شركة الغاز الوطنية" }
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
  { value: "لم يباشر به", label: "لم يباشر به" }
];
const ACTION_STATUS_OPTIONS = [
  { value: "all", label: "جميع الحالات" },
  { value: "pending", label: "منتظر" },
  { value: "completed", label: "مكتمل" },
  { value: "cancelled", label: "ملغي" }
];
const YEAR_OPTIONS = [
  { value: "all", label: "جميع السنوات" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" }
];
const DOC_TYPE_OPTIONS = [
  { value: "all", label: "جميع الأنواع" },
  { value: "Study", label: "دراسة" },
  { value: "Contract", label: "عقد" },
  { value: "Execution", label: "تنفيذ" },
  { value: "Correspondence", label: "مراسلة" }
];
const STATUS_COLORS = {
  OnTrack: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Delayed: "bg-red-100 text-red-800 border-red-200",
  Completed: "bg-blue-100 text-blue-800 border-blue-200",
  Pending: "bg-amber-100 text-amber-800 border-amber-200"
};
const STATUS_LABELS = {
  OnTrack: "قيد التنفيذ",
  Delayed: "متأخر",
  Completed: "منجز",
  Pending: "بانتظار إجراء"
};
const allProjectsData = getProjects();
const allDocumentsData = getProjects().flatMap((p) => getDocuments(p.id));
function FieldGroup({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: label }),
    children
  ] });
}
function ProjectsFilterPanel({
  filters,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "اسم المشروع", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.projectName,
        onChange: (e) => onChange({ projectName: e.target.value }),
        placeholder: "أدخل اسم المشروع أو جزء منه",
        className: "text-sm",
        "data-ocid": "search.project_name.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "رقم المشروع", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.projectNumber,
        onChange: (e) => onChange({ projectNumber: e.target.value }),
        placeholder: "رقم المشروع",
        className: "text-sm",
        "data-ocid": "search.project_number.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "نوع المشروع", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.projectType,
        onValueChange: (v) => onChange({ projectType: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "text-sm",
              "data-ocid": "search.project_type.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر نوع المشروع" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PROJECT_TYPE_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "الموقع", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.location,
        onChange: (e) => onChange({ location: e.target.value }),
        placeholder: "المدينة أو المنطقة",
        className: "text-sm",
        "data-ocid": "search.location.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "الجهة المستفيدة", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.beneficiary,
        onValueChange: (v) => onChange({ beneficiary: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "text-sm",
              "data-ocid": "search.beneficiary.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر الجهة المستفيدة" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BENEFICIARY_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "الجهة المنفذة", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.executor,
        onChange: (e) => onChange({ executor: e.target.value }),
        placeholder: "اسم الجهة المنفذة",
        className: "text-sm",
        "data-ocid": "search.executor.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "اسم المقاول", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.contractor,
        onChange: (e) => onChange({ contractor: e.target.value }),
        placeholder: "اسم المقاول",
        className: "text-sm",
        "data-ocid": "search.contractor.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "رقم العقد", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.contractNumber,
        onChange: (e) => onChange({ contractNumber: e.target.value }),
        placeholder: "رقم العقد",
        className: "text-sm",
        "data-ocid": "search.contract_number.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "رقم الكتاب", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.bookNumber,
        onChange: (e) => onChange({ bookNumber: e.target.value }),
        placeholder: "رقم الكتاب",
        className: "text-sm",
        "data-ocid": "search.book_number.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "حالة المشروع", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.status,
        onValueChange: (v) => onChange({ status: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-sm", "data-ocid": "search.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر الحالة" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PROJECT_STATUS_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "حالة الإجراء", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.actionStatus,
        onValueChange: (v) => onChange({ actionStatus: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "text-sm",
              "data-ocid": "search.action_status.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر حالة الإجراء" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ACTION_STATUS_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "سنة الإدراج", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.year,
        onValueChange: (v) => onChange({ year: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-sm", "data-ocid": "search.year.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر السنة" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: YEAR_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "نسبة الإنجاز من (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "number",
        min: "0",
        max: "100",
        value: filters.minProgress,
        onChange: (e) => onChange({ minProgress: e.target.value }),
        placeholder: "0",
        className: "text-sm",
        "data-ocid": "search.min_progress.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "نسبة الإنجاز إلى (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "number",
        min: "0",
        max: "100",
        value: filters.maxProgress,
        onChange: (e) => onChange({ maxProgress: e.target.value }),
        placeholder: "100",
        className: "text-sm",
        "data-ocid": "search.max_progress.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "نسبة الصرف من (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "number",
        min: "0",
        max: "100",
        value: filters.minSpend,
        onChange: (e) => onChange({ minSpend: e.target.value }),
        placeholder: "0",
        className: "text-sm",
        "data-ocid": "search.min_spend.input"
      }
    ) })
  ] });
}
function DocsFilterPanel({
  filters,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "رقم الكتاب", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.bookNumber,
        onChange: (e) => onChange({ bookNumber: e.target.value }),
        placeholder: "رقم الكتاب",
        className: "text-sm",
        "data-ocid": "search.doc_book_number.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "تاريخ الكتاب من", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: filters.dateFrom,
        onChange: (e) => onChange({ dateFrom: e.target.value }),
        className: "text-sm",
        "data-ocid": "search.doc_date_from.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "تاريخ الكتاب إلى", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: filters.dateTo,
        onChange: (e) => onChange({ dateTo: e.target.value }),
        className: "text-sm",
        "data-ocid": "search.doc_date_to.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "نوع الوثيقة", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: filters.docType,
        onValueChange: (v) => onChange({ docType: v }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-sm", "data-ocid": "search.doc_type.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "اختر نوع الوثيقة" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DOC_TYPE_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "اسم الإضبارة", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.folderName,
        onChange: (e) => onChange({ folderName: e.target.value }),
        placeholder: "اسم الإضبارة",
        className: "text-sm",
        "data-ocid": "search.doc_folder.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "اسم المشروع المرتبط", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.relatedProject,
        onChange: (e) => onChange({ relatedProject: e.target.value }),
        placeholder: "اسم المشروع",
        className: "text-sm",
        "data-ocid": "search.doc_project.input"
      }
    ) })
  ] });
}
function GenericFilterPanel({
  filters,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "كلمة البحث", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: filters.keyword,
        onChange: (e) => onChange({ keyword: e.target.value }),
        placeholder: "أدخل كلمة البحث",
        className: "text-sm xl:col-span-1",
        "data-ocid": "search.generic_keyword.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "التاريخ من", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: filters.dateFrom,
        onChange: (e) => onChange({ dateFrom: e.target.value }),
        className: "text-sm",
        "data-ocid": "search.generic_date_from.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "التاريخ إلى", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: filters.dateTo,
        onChange: (e) => onChange({ dateTo: e.target.value }),
        className: "text-sm",
        "data-ocid": "search.generic_date_to.input"
      }
    ) })
  ] });
}
function ProjectsTable({ projects }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs w-10", children: "#" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "اسم المشروع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "رقم المشروع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "نوع المشروع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "الموقع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "الجهة المستفيدة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs min-w-[120px]", children: "نسبة الإنجاز" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "الحالة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: projects.map((project, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        className: cn(
          "border-b border-border hover:bg-muted/30 transition-smooth",
          idx % 2 === 0 ? "bg-card" : "bg-muted/10"
        ),
        "data-ocid": `search.result.item.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/projects/$id",
              params: { id: String(project.id) },
              className: "font-semibold text-foreground hover:text-primary transition-smooth line-clamp-1",
              "data-ocid": `search.result.link.${idx + 1}`,
              children: project.name
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: project.contractNumber ?? `PRJ-${project.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-foreground", children: project.projectType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-muted-foreground", children: project.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-muted-foreground line-clamp-1 max-w-[150px]", children: project.beneficiary ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "h-full rounded-full",
                  project.status === "متوقف" ? "bg-destructive" : project.status === "منجز تام" || project.status === "استلام نهائي" ? "bg-primary" : project.status === "لم يباشر به" ? "bg-amber-500" : "bg-emerald-500"
                ),
                style: { width: `${project.progress}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-8 text-left", children: [
              project.progress,
              "%"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: cn(
                "text-[10px] font-semibold border",
                STATUS_COLORS[project.status]
              ),
              children: STATUS_LABELS[project.status]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/projects/$id",
              params: { id: String(project.id) },
              className: "text-xs font-medium text-primary hover:underline whitespace-nowrap",
              "data-ocid": `search.result.view_button.${idx + 1}`,
              children: "عرض الملف"
            }
          ) })
        ]
      },
      project.id
    )) })
  ] }) });
}
function DocumentsTable({ docs }) {
  const folderLabels = {
    Study: "دراسة",
    Contract: "عقد",
    Execution: "تنفيذ",
    Correspondence: "مراسلة"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs w-10", children: "#" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "اسم الوثيقة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "رقم الوثيقة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "نوع الوثيقة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "التاريخ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "المشروع المرتبط" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: docs.map((doc, idx) => {
      const project = allProjectsData.find((p) => p.id === doc.projectId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: cn(
            "border-b border-border hover:bg-muted/30 transition-smooth",
            idx % 2 === 0 ? "bg-card" : "bg-muted/10"
          ),
          "data-ocid": `search.result.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-foreground text-xs", children: doc.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: doc.docNumber }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: folderLabels[doc.folder] ?? doc.folder }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: doc.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-muted-foreground", children: (project == null ? void 0 : project.name) ?? "—" })
          ]
        },
        doc.id
      );
    }) })
  ] }) });
}
const DEFAULT_PROJECT_FILTERS = {
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
  maxSpend: ""
};
const DEFAULT_DOC_FILTERS = {
  bookNumber: "",
  dateFrom: "",
  dateTo: "",
  docType: "all",
  folderName: "",
  relatedProject: ""
};
const DEFAULT_GENERIC_FILTERS = {
  keyword: "",
  dateFrom: "",
  dateTo: ""
};
function AdvancedSearchPage() {
  const [domain, setDomain] = reactExports.useState("projects");
  const [projectFilters, setProjectFilters] = reactExports.useState(
    DEFAULT_PROJECT_FILTERS
  );
  const [docFilters, setDocFilters] = reactExports.useState(DEFAULT_DOC_FILTERS);
  const [genericFilters, setGenericFilters] = reactExports.useState(
    DEFAULT_GENERIC_FILTERS
  );
  const [results, setResults] = reactExports.useState(null);
  function handleSearch() {
    if (domain === "projects") {
      const f = projectFilters;
      const filtered = allProjectsData.filter((p) => {
        if (f.projectName && !p.name.includes(f.projectName)) return false;
        if (f.projectNumber && String(p.id) !== f.projectNumber && !(p.contractNumber ?? "").includes(f.projectNumber))
          return false;
        if (f.projectType !== "all" && p.projectType !== f.projectType)
          return false;
        if (f.location && !p.location.includes(f.location)) return false;
        if (f.beneficiary !== "all" && p.beneficiary !== f.beneficiary)
          return false;
        if (f.contractor && !(p.contractor ?? "").includes(f.contractor))
          return false;
        if (f.contractNumber && !(p.contractNumber ?? "").includes(f.contractNumber))
          return false;
        if (f.status !== "all" && p.status !== f.status) return false;
        if (f.year !== "all" && String(p.year) !== f.year) return false;
        if (f.minProgress && p.progress < Number(f.minProgress)) return false;
        if (f.maxProgress && p.progress > Number(f.maxProgress)) return false;
        if (f.minSpend) {
          const spendRate = p.spent / p.totalCost * 100;
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
        type: p.projectType
      }));
      const filtered = mockGeneric.filter(
        (item) => !kw || item.title.toLowerCase().includes(kw)
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
  function handleDomainChange(d) {
    setDomain(d);
    setResults(null);
  }
  const resultCount = results ? results.kind === "projects" || results.kind === "documents" ? results.data.length : results.data.length : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20, className: "text-primary", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "البحث المتقدم" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "ابحث في جميع وحدات النظام" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full xl:w-[520px] 2xl:w-[600px] flex-shrink-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SlidersHorizontal,
              {
                size: 15,
                className: "text-primary",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: "مجال البحث" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: DOMAINS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleDomainChange(d.value),
              className: cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-smooth",
                domain === d.value ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              ),
              "data-ocid": `search.domain.${d.value}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { size: 13, "aria-hidden": "true" }),
                d.label
              ]
            },
            d.value
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SlidersHorizontal,
              {
                size: 15,
                className: "text-primary",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: "معايير البحث" })
          ] }),
          domain === "projects" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProjectsFilterPanel,
            {
              filters: projectFilters,
              onChange: (f) => setProjectFilters((prev) => ({ ...prev, ...f }))
            }
          ),
          domain === "documents" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            DocsFilterPanel,
            {
              filters: docFilters,
              onChange: (f) => setDocFilters((prev) => ({ ...prev, ...f }))
            }
          ),
          domain !== "projects" && domain !== "documents" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            GenericFilterPanel,
            {
              filters: genericFilters,
              onChange: (f) => setGenericFilters((prev) => ({ ...prev, ...f }))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-5 mt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                onClick: handleSearch,
                className: "flex-1 gap-2 text-sm font-bold h-11",
                "data-ocid": "search.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, "aria-hidden": "true" }),
                  "بحث"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: handleReset,
                className: "gap-2 h-11 px-5",
                "data-ocid": "search.reset_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15, "aria-hidden": "true" }),
                  "مسح الفلاتر"
                ]
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: results === null ? (
        /* Initial placeholder */
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", "data-ocid": "search.placeholder", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-24 flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 36,
              className: "text-primary/50",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground mb-1", children: "ابدأ بحثك" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground max-w-sm", children: [
              "قم بتحديد معايير البحث من اللوحة اليمنى، ثم اضغط على زر",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "بحث" }),
              " لعرض النتائج"
            ] })
          ] })
        ] }) })
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border shadow-card",
          "data-ocid": "search.results.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground", children: "نتائج البحث" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold", children: [
                  "عدد النتائج: ",
                  resultCount,
                  " ",
                  results.kind === "projects" ? "مشروع" : results.kind === "documents" ? "وثيقة" : "نتيجة"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleReset,
                  className: "text-xs gap-1.5",
                  "data-ocid": "search.results.reset_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13, "aria-hidden": "true" }),
                    "مسح وإعادة البحث"
                  ]
                }
              )
            ] }),
            resultCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CardContent,
              {
                className: "py-16 flex flex-col items-center gap-3",
                "data-ocid": "search.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Search,
                    {
                      size: 24,
                      className: "text-muted-foreground",
                      "aria-hidden": "true"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "لا توجد نتائج مطابقة" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center max-w-xs", children: "لم يتم العثور على نتائج تطابق معايير البحث. جرّب تعديل أو تخفيف الشروط." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: handleReset,
                      "data-ocid": "search.empty_state.reset_button",
                      children: "مسح الفلاتر"
                    }
                  )
                ]
              }
            ) : results.kind === "projects" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsTable, { projects: results.data }) : results.kind === "documents" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentsTable, { docs: results.data }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs w-10", children: "#" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "العنوان" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "النوع" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 font-semibold text-foreground text-xs", children: "التاريخ" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: results.data.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: cn(
                    "border-b border-border hover:bg-muted/30 transition-smooth",
                    idx % 2 === 0 ? "bg-card" : "bg-muted/10"
                  ),
                  "data-ocid": `search.result.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-muted-foreground text-xs", children: idx + 1 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-foreground text-xs", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-muted-foreground", children: item.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-xs text-muted-foreground", children: item.date })
                  ]
                },
                item.id
              )) })
            ] }) })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  AdvancedSearchPage as default
};
