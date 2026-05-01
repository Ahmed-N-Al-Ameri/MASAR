import { getDocuments, getObstacles, getProjects } from "@/data/mockData";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  ChevronLeft,
  Clock,
  DollarSign,
  FileText,
  Folder,
  FolderOpen,
  LayoutGrid,
  List,
  PlusCircle,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Upload,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ── Types ────────────────────────────────────────────────────────────────────

interface ProjectComponent {
  name: string;
  contractor: string;
  status: ComponentStatus;
  plannedProgress: number;
  actualProgress: number;
  contractCost: number;
  startDate: string;
  duration: string;
}

type ComponentStatus =
  | "مستمر"
  | "متوقف"
  | "داخل للخدمة"
  | "استلام نهائي"
  | "منجز تام"
  | "غير موقع"
  | "تسوية مالية"
  | "متعلقات مالية"
  | "لم يباشر به";

interface ProjectUpdate {
  date: string;
  type: string;
  desc: string;
  by: string;
  actionBy: string;
}

// ── Mock Components Data ─────────────────────────────────────────────────────

const projectComponents: Record<number, ProjectComponent[]> = {
  1: [
    {
      name: "خط نقل المياه الرئيسي",
      contractor: "شركة المياه المتحدة",
      status: "مستمر",
      plannedProgress: 70,
      actualProgress: 65,
      contractCost: 280000000,
      startDate: "2024-01-15",
      duration: "18 شهراً",
    },
    {
      name: "محطة الضخ الفرعية",
      contractor: "شركة الهندسة الكهربائية",
      status: "مستمر",
      plannedProgress: 60,
      actualProgress: 58,
      contractCost: 95000000,
      startDate: "2024-03-01",
      duration: "12 شهراً",
    },
    {
      name: "شبكة التوزيع المحلية",
      contractor: "مؤسسة البناء الحديث",
      status: "لم يباشر به",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 75000000,
      startDate: "2024-09-01",
      duration: "10 أشهر",
    },
  ],
  2: [
    {
      name: "الطريق الرئيسي - المقطع الأول",
      contractor: "شركة الطرق الحديثة",
      status: "متوقف",
      plannedProgress: 55,
      actualProgress: 40,
      contractCost: 520000000,
      startDate: "2023-08-01",
      duration: "24 شهراً",
    },
    {
      name: "جسر التقاطع الشمالي",
      contractor: "شركة الجسور والأنفاق",
      status: "غير موقع",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 300000000,
      startDate: "",
      duration: "18 شهراً",
    },
  ],
  3: [
    {
      name: "مبنى المركز الرئيسي",
      contractor: "مجموعة الإنشاءات الصحية",
      status: "استلام نهائي",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 200000000,
      startDate: "2022-03-01",
      duration: "30 شهراً",
    },
    {
      name: "الأجهزة الطبية والتجهيزات",
      contractor: "شركة المعدات الطبية",
      status: "منجز تام",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 120000000,
      startDate: "2023-06-01",
      duration: "12 شهراً",
    },
  ],
  4: [
    {
      name: "منظومة الألواح الشمسية",
      contractor: "شركة الطاقة الخضراء",
      status: "مستمر",
      plannedProgress: 85,
      actualProgress: 78,
      contractCost: 420000000,
      startDate: "2024-02-01",
      duration: "20 شهراً",
    },
    {
      name: "نظام تخزين الطاقة",
      contractor: "شركة التقنيات المتقدمة",
      status: "مستمر",
      plannedProgress: 70,
      actualProgress: 68,
      contractCost: 230000000,
      startDate: "2024-04-01",
      duration: "16 شهراً",
    },
  ],
  5: [
    {
      name: "المبنى الدراسي الرئيسي",
      contractor: "شركة التشييد التعليمي",
      status: "متوقف",
      plannedProgress: 45,
      actualProgress: 35,
      contractCost: 130000000,
      startDate: "2024-05-01",
      duration: "18 شهراً",
    },
    {
      name: "الملاعب والمرافق الرياضية",
      contractor: "شركة المنشآت الرياضية",
      status: "لم يباشر به",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 50000000,
      startDate: "",
      duration: "8 أشهر",
    },
  ],
  6: [
    {
      name: "الأرصفة البحرية - المرحلة الأولى",
      contractor: "مجموعة البناء البحري",
      status: "مستمر",
      plannedProgress: 60,
      actualProgress: 55,
      contractCost: 750000000,
      startDate: "2023-06-01",
      duration: "36 شهراً",
    },
    {
      name: "المباني الإدارية والخدمية",
      contractor: "شركة الإنشاءات التجارية",
      status: "مستمر",
      plannedProgress: 45,
      actualProgress: 40,
      contractCost: 450000000,
      startDate: "2023-10-01",
      duration: "30 شهراً",
    },
  ],
  7: [
    {
      name: "خط الصرف الرئيسي",
      contractor: "شركة البيئة والصرف",
      status: "تسوية مالية",
      plannedProgress: 15,
      actualProgress: 10,
      contractCost: 180000000,
      startDate: "2025-01-01",
      duration: "18 شهراً",
    },
    {
      name: "محطة المعالجة",
      contractor: "غير محدد",
      status: "غير موقع",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 110000000,
      startDate: "",
      duration: "24 شهراً",
    },
  ],
  8: [
    {
      name: "التشجير وتجهيز التربة",
      contractor: "شركة التشجير والبيئة",
      status: "داخل للخدمة",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 55000000,
      startDate: "2022-09-01",
      duration: "18 شهراً",
    },
    {
      name: "الممرات والبنية التحتية",
      contractor: "شركة البناء الحضري",
      status: "منجز تام",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 40000000,
      startDate: "2022-09-01",
      duration: "12 شهراً",
    },
  ],
};

// ── Mock Updates Data ─────────────────────────────────────────────────────────

const projectUpdates: Record<number, ProjectUpdate[]> = {
  1: [
    {
      date: "2026-04-10",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز خط نقل المياه الرئيسي إلى 65%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ",
    },
    {
      date: "2026-03-28",
      type: "استلام كتاب",
      desc: "استلام كتاب من شركة المياه المتحدة بشأن جدول تسليم المواد",
      by: "وحدة التقارير",
      actionBy: "الشركة المنفذة",
    },
    {
      date: "2026-03-15",
      type: "إجراء مكتمل",
      desc: "إكمال اختبارات الضغط للمرحلة الأولى من الخط الرئيسي",
      by: "شعبة الجودة",
      actionBy: "شعبة المتابعة",
    },
  ],
  2: [
    {
      date: "2026-03-20",
      type: "تسجيل معوق",
      desc: "توقف الأعمال بسبب اكتشاف آثار أثرية في موقع الحفر",
      by: "شعبة الإحصاء",
      actionBy: "هيئة الآثار",
    },
    {
      date: "2026-02-28",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز المقطع الأول من الطريق إلى 40%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ",
    },
  ],
  3: [
    {
      date: "2024-08-30",
      type: "استلام نهائي",
      desc: "إتمام الاستلام النهائي للمشروع وتسليمه للجهة المستفيدة",
      by: "لجنة الاستلام",
      actionBy: "وزارة الصحة",
    },
    {
      date: "2024-07-15",
      type: "إجراء مكتمل",
      desc: "انتهاء فترة الضمان وإصدار شهادة الإنجاز النهائية",
      by: "شعبة الجودة",
      actionBy: "الشركة المنفذة",
    },
  ],
  4: [
    {
      date: "2026-04-15",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز منظومة الألواح الشمسية إلى 78%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ",
    },
    {
      date: "2026-04-01",
      type: "استلام كتاب",
      desc: "استلام شهادة اختبار الدفعة الثالثة من الألواح الشمسية",
      by: "وحدة التقارير",
      actionBy: "الشركة المنفذة",
    },
  ],
  5: [
    {
      date: "2026-02-05",
      type: "تسجيل معوق",
      desc: "توقف العمل بسبب نزاع على حدود قطعة الأرض",
      by: "شعبة المتابعة",
      actionBy: "البلدية المختصة",
    },
    {
      date: "2026-01-20",
      type: "استلام كتاب",
      desc: "استلام كتاب من وزارة التعليم بشأن الموقف من استئناف العمل",
      by: "وحدة التقارير",
      actionBy: "وزارة التعليم",
    },
  ],
  6: [
    {
      date: "2026-04-01",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز المرحلة الأولى من الأرصفة البحرية إلى 55%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ",
    },
    {
      date: "2026-03-10",
      type: "إجراء مكتمل",
      desc: "اعتماد المخططات التفصيلية للمرحلة الثانية من المباني",
      by: "شعبة الهندسة",
      actionBy: "الهيئة العامة للموانئ",
    },
  ],
  7: [
    {
      date: "2025-12-15",
      type: "تسجيل معوق",
      desc: "تسجيل معوق قلة التخصيصات المالية للسنة 2026",
      by: "شعبة الإحصاء",
      actionBy: "وزارة النفط",
    },
    {
      date: "2025-11-20",
      type: "استلام كتاب",
      desc: "استلام كتاب من البلدية بشأن تأخر إجراءات نزع الملكية",
      by: "وحدة التقارير",
      actionBy: "بلدية المدينة المنورة",
    },
  ],
  8: [
    {
      date: "2024-03-31",
      type: "استلام نهائي",
      desc: "إتمام الاستلام النهائي للحديقة وتسليمها لأمانة الرياض",
      by: "لجنة الاستلام",
      actionBy: "أمانة منطقة الرياض",
    },
    {
      date: "2024-02-15",
      type: "إجراء مكتمل",
      desc: "إتمام زراعة جميع المساحات الخضراء وتشغيل نظام الري",
      by: "شعبة الجودة",
      actionBy: "شعبة التنفيذ",
    },
  ],
};

// ── Status Badge Config ───────────────────────────────────────────────────────

const componentStatusConfig: Record<
  ComponentStatus,
  { bg: string; text: string; border: string }
> = {
  مستمر: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  متوقف: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  "داخل للخدمة": {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
  },
  "استلام نهائي": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
  },
  "منجز تام": {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  "غير موقع": {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  "تسوية مالية": {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  "متعلقات مالية": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  "لم يباشر به": {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border",
  },
};

function ComponentStatusBadge({ status }: { status: ComponentStatus }) {
  const cfg = componentStatusConfig[status] ?? {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
        cfg.bg,
        cfg.text,
        cfg.border,
      )}
    >
      {status}
    </span>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCost(val: number): string {
  if (val >= 1e9) return `${(val / 1e9).toFixed(2)} مليار دينار`;
  if (val >= 1e6) return `${(val / 1e6).toFixed(0)} مليون دينار`;
  return `${val.toLocaleString("ar-IQ")} دينار`;
}

const FOLDER_LABELS = [
  { key: "Study", label: "إضبارة الدراسة", icon: <FileText size={20} /> },
  { key: "Contract", label: "إضبارة العقد", icon: <FileText size={20} /> },
  { key: "Execution", label: "إضبارة التنفيذ", icon: <FileText size={20} /> },
  {
    key: "Correspondence",
    label: "إضبارة المخاطبات",
    icon: <FileText size={20} />,
  },
  {
    key: "Disbursement",
    label: "إضبارة الصرف",
    icon: <DollarSign size={20} />,
  },
];

const UPDATE_ICONS: Record<string, React.ReactNode> = {
  "تحديث الإنجاز": <TrendingUp size={14} className="text-emerald-600" />,
  "استلام كتاب": <FileText size={14} className="text-blue-600" />,
  "تسجيل معوق": <AlertTriangle size={14} className="text-red-600" />,
  "إجراء مكتمل": <CheckCircle2 size={14} className="text-purple-600" />,
  "استلام نهائي": <CheckCircle2 size={14} className="text-green-600" />,
};

function getObstacleStatusLabel(s: string): {
  label: string;
  cls: string;
} {
  if (s === "Open")
    return {
      label: "مفتوح",
      cls: "bg-red-50 text-red-700 border-red-200",
    };
  if (s === "InProgress")
    return {
      label: "قيد المعالجة",
      cls: "bg-amber-50 text-amber-700 border-amber-200",
    };
  return {
    label: "تم الحل",
    cls: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
}

// ── Circular Progress ─────────────────────────────────────────────────────────

function CircularProgress({
  value,
  size = 80,
}: {
  value: number;
  size?: number;
}) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg
      width={size}
      height={size}
      className="-rotate-90"
      aria-label={`${value}%`}
      role="img"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        className="text-muted/30"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={
          value >= 70
            ? "text-emerald-500"
            : value >= 40
              ? "text-amber-500"
              : "text-red-500"
        }
      />
    </svg>
  );
}

// ── Project Status Map (from existing types) ──────────────────────────────────

const projectStatusMap: Record<
  string,
  { label: string; bg: string; text: string; border: string }
> = {
  OnTrack: {
    label: "قيد التنفيذ",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  Delayed: {
    label: "متأخر",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  Completed: {
    label: "مكتمل",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  Pending: {
    label: "قيد الانتظار",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
};

function ProjectStatusPill({ status }: { status: string }) {
  const cfg = projectStatusMap[status] ?? {
    label: status,
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        cfg.bg,
        cfg.text,
        cfg.border,
      )}
    >
      {cfg.label}
    </span>
  );
}

// ── Tab Bar ───────────────────────────────────────────────────────────────────

const TABS = [
  { id: "summary", label: "ملخص المشروع", icon: <LayoutGrid size={15} /> },
  { id: "components", label: "المكونات والعقود", icon: <List size={15} /> },
  {
    id: "documents",
    label: "الوثائق والإضابير",
    icon: <FolderOpen size={15} />,
  },
  {
    id: "updates",
    label: "التحديثات والمعوقات",
    icon: <RefreshCw size={15} />,
  },
  { id: "financial", label: "البيانات المالية", icon: <BarChart2 size={15} /> },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function ProjectFilesPage() {
  const allProjects = getProjects();

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState("summary");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);
  const components = selectedProjectId
    ? (projectComponents[selectedProjectId] ?? [])
    : [];
  const updates = selectedProjectId
    ? (projectUpdates[selectedProjectId] ?? [])
    : [];
  const obstacles = selectedProjectId ? getObstacles(selectedProjectId) : [];
  const documents = selectedProjectId ? getDocuments(selectedProjectId) : [];

  // Filter options
  const statuses = [...new Set(allProjects.map((p) => p.status))];
  const types = [...new Set(allProjects.map((p) => p.projectType))];
  const locations = [...new Set(allProjects.map((p) => p.location))];
  const years = [...new Set(allProjects.map((p) => p.year))].sort(
    (a, b) => b - a,
  );

  const filtered = allProjects.filter((p) => {
    if (filterStatus && p.status !== filterStatus) return false;
    if (filterType && p.projectType !== filterType) return false;
    if (filterLocation && p.location !== filterLocation) return false;
    if (filterYear && p.year !== Number(filterYear)) return false;
    return true;
  });

  function openProject(id: number) {
    setSelectedProjectId(id);
    setActiveTab("summary");
    setOpenFolder(null);
  }

  function backToList() {
    setSelectedProjectId(null);
    setOpenFolder(null);
  }

  function handleComingSoon() {
    toast.info("هذه الميزة قيد التطوير وستكون متاحة قريباً");
  }

  // ── Detail View ─────────────────────────────────────────────────────────────

  if (selectedProject) {
    const comps = components;
    const totalCost = selectedProject.totalCost;
    const spent = selectedProject.spent;
    const remaining = totalCost - spent;
    const spentPct = totalCost > 0 ? Math.round((spent / totalCost) * 100) : 0;

    return (
      <div className="space-y-5" dir="rtl">
        {/* Breadcrumb + back */}
        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            onClick={backToList}
            className="flex items-center gap-1.5 text-primary hover:underline font-medium"
            data-ocid="project-files.back_button"
          >
            <ArrowRight size={14} />
            ملفات المشاريع
          </button>
          <ChevronLeft size={13} className="text-muted-foreground" />
          <span className="text-foreground font-semibold truncate max-w-xs">
            {selectedProject.name}
          </span>
        </div>

        {/* Project header */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FolderOpen size={22} className="text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    #{selectedProject.id}
                  </span>
                  <ProjectStatusPill status={selectedProject.status} />
                </div>
                <h2 className="text-xl font-black text-foreground leading-tight">
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {selectedProject.location} — {selectedProject.projectType} —
                  سنة {selectedProject.year}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleComingSoon}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                data-ocid="project-files.edit_button"
              >
                تعديل الملف
              </button>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
          <div className="flex border-b border-border overflow-x-auto">
            {TABS.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px",
                  activeTab === tab.id
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                data-ocid={`project-files.tab.${tab.id}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── TAB: ملخص المشروع ── */}
          {activeTab === "summary" && (
            <div
              className="p-6 space-y-6"
              data-ocid="project-files.summary.panel"
            >
              {/* Summary cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">
                    الكلفة الكلية
                  </p>
                  <p className="text-base font-black text-foreground leading-snug">
                    {formatCost(totalCost)}
                  </p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">
                    المصروف التراكمي
                  </p>
                  <p className="text-base font-black text-blue-600 leading-snug">
                    {formatCost(spent)}
                  </p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">
                    المبلغ المتبقي
                  </p>
                  <p className="text-base font-black text-amber-600 leading-snug">
                    {formatCost(remaining)}
                  </p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 flex flex-col items-center gap-1">
                  <p className="text-xs text-muted-foreground mb-1">
                    نسبة الإنجاز
                  </p>
                  <div className="relative flex items-center justify-center">
                    <CircularProgress
                      value={selectedProject.progress}
                      size={72}
                    />
                    <span className="absolute text-sm font-black text-foreground">
                      {selectedProject.progress}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Basic info grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "اسم المشروع", value: selectedProject.name },
                  { label: "نوع المشروع", value: selectedProject.projectType },
                  { label: "موقع المشروع", value: selectedProject.location },
                  {
                    label: "سنة الإدراج",
                    value: String(selectedProject.year),
                  },
                  {
                    label: "الجهة المستفيدة",
                    value: selectedProject.beneficiary ?? "—",
                  },
                  {
                    label: "الجهة المنفذة",
                    value: selectedProject.contractor ?? "—",
                  },
                  {
                    label: "تاريخ المباشرة",
                    value: selectedProject.startDate,
                  },
                  {
                    label: "تاريخ الإنجاز المتوقع",
                    value: selectedProject.endDate,
                  },
                  {
                    label: "رقم العقد",
                    value: selectedProject.contractNumber ?? "—",
                  },
                  {
                    label: "آخر تحديث",
                    value: selectedProject.lastUpdated ?? "—",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-3 bg-muted/30 rounded-lg p-3"
                  >
                    <span className="text-xs font-semibold text-muted-foreground w-36 flex-shrink-0">
                      {row.label}
                    </span>
                    <span className="text-sm text-foreground font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description / notes */}
              <div className="bg-muted/30 rounded-xl p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  الوصف الموجز
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  مشروع {selectedProject.projectType} لخدمة الجهة المستفيدة "
                  {selectedProject.beneficiary ?? "غير محدد"}" في منطقة{" "}
                  {selectedProject.location}، بكلفة إجمالية{" "}
                  {formatCost(totalCost)} ونسبة إنجاز حالية{" "}
                  {selectedProject.progress}%.
                </p>
              </div>
            </div>
          )}

          {/* ── TAB: المكونات والعقود ── */}
          {activeTab === "components" && (
            <div
              className="p-6 space-y-4"
              data-ocid="project-files.components.panel"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-sm">
                  المكونات والعقود التابعة للمشروع ({comps.length})
                </h3>
                <button
                  type="button"
                  onClick={handleComingSoon}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                  data-ocid="project-files.add_component.button"
                >
                  <PlusCircle size={14} />
                  إضافة مكون
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 text-right">
                      {[
                        "اسم المكون/العقد",
                        "الشركة المنفذة",
                        "الموقف الحالي",
                        "الإنجاز المخطط",
                        "إنجاز تقدم العمل",
                        "الانحراف",
                        "مدة المشروع",
                        "مجموع الكلفة",
                      ].map((col) => (
                        <th
                          key={col}
                          className="px-4 py-3 text-xs font-bold text-muted-foreground border-b border-border"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comps.map((comp, i) => {
                      const deviation =
                        comp.plannedProgress - comp.actualProgress;
                      return (
                        <tr
                          key={`comp-${comp.name}`}
                          className={cn(
                            "border-b border-border/60 hover:bg-muted/30 transition-colors",
                            i % 2 === 1 ? "bg-muted/10" : "bg-background",
                          )}
                          data-ocid={`project-files.component.item.${i + 1}`}
                        >
                          <td className="px-4 py-3 font-semibold text-foreground">
                            {comp.name}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {comp.contractor}
                          </td>
                          <td className="px-4 py-3">
                            <ComponentStatusBadge status={comp.status} />
                          </td>
                          <td className="px-4 py-3 text-center text-muted-foreground">
                            {comp.plannedProgress}%
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-muted rounded-full h-1.5 min-w-[60px]">
                                <div
                                  className="h-1.5 rounded-full bg-primary"
                                  style={{
                                    width: `${comp.actualProgress}%`,
                                  }}
                                />
                              </div>
                              <span className="text-xs font-semibold text-foreground w-8">
                                {comp.actualProgress}%
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={cn(
                                "flex items-center justify-center gap-1 text-xs font-bold",
                                deviation > 0
                                  ? "text-emerald-600"
                                  : deviation < 0
                                    ? "text-red-600"
                                    : "text-muted-foreground",
                              )}
                            >
                              {deviation > 0 ? (
                                <TrendingUp size={12} />
                              ) : deviation < 0 ? (
                                <TrendingDown size={12} />
                              ) : null}
                              {deviation > 0 ? "+" : ""}
                              {deviation}%
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground text-center">
                            {comp.duration}
                          </td>
                          <td className="px-4 py-3 text-left font-semibold text-foreground">
                            {formatCost(comp.contractCost)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground bg-muted/40 rounded-lg px-4 py-2.5 border border-border">
                📌 البيانات التفصيلية تُحدَّث بصورة دورية من الشعب المختصة
              </p>
            </div>
          )}

          {/* ── TAB: الوثائق والإضابير ── */}
          {activeTab === "documents" && (
            <div
              className="p-6 space-y-4"
              data-ocid="project-files.documents.panel"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-sm">
                  الإضابير والوثائق
                </h3>
                <button
                  type="button"
                  onClick={handleComingSoon}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                  data-ocid="project-files.upload_button"
                >
                  <Upload size={14} />
                  رفع وثيقة
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {FOLDER_LABELS.map((folder) => {
                  const count = documents.filter(
                    (d) => d.folder === folder.key,
                  ).length;
                  const isOpen = openFolder === folder.key;
                  return (
                    <button
                      type="button"
                      key={folder.key}
                      onClick={() => setOpenFolder(isOpen ? null : folder.key)}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center",
                        isOpen
                          ? "bg-primary/10 border-primary/40 shadow-sm"
                          : "bg-background border-border hover:bg-muted/40",
                      )}
                      data-ocid={`project-files.folder.${folder.key.toLowerCase()}`}
                    >
                      <span
                        className={cn(
                          isOpen ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {isOpen ? (
                          <FolderOpen size={32} />
                        ) : (
                          <Folder size={32} />
                        )}
                      </span>
                      <span className="text-xs font-semibold text-foreground leading-tight">
                        {folder.label}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {count} وثيقة
                      </span>
                    </button>
                  );
                })}
              </div>

              {openFolder && (
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-muted/40 border-b border-border">
                    <p className="text-sm font-bold text-foreground">
                      {FOLDER_LABELS.find((f) => f.key === openFolder)?.label}
                    </p>
                  </div>
                  {documents.filter((d) => d.folder === openFolder).length ===
                  0 ? (
                    <div
                      className="p-8 text-center text-muted-foreground text-sm"
                      data-ocid="project-files.documents.empty_state"
                    >
                      <Folder size={32} className="mx-auto mb-2 opacity-30" />
                      لا توجد وثائق في هذه الإضبارة بعد
                    </div>
                  ) : (
                    <ul className="divide-y divide-border">
                      {documents
                        .filter((d) => d.folder === openFolder)
                        .map((doc) => (
                          <li
                            key={doc.id}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors"
                          >
                            <FileText
                              size={16}
                              className="text-primary flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate">
                                {doc.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {doc.docNumber} — {doc.date}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={handleComingSoon}
                              className="text-xs text-primary hover:underline flex-shrink-0"
                            >
                              عرض
                            </button>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── TAB: التحديثات والمعوقات ── */}
          {activeTab === "updates" && (
            <div
              className="p-6 space-y-6"
              data-ocid="project-files.updates.panel"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-sm">
                  آخر التحديثات والمعوقات
                </h3>
                <button
                  type="button"
                  onClick={handleComingSoon}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                  data-ocid="project-files.add_update.button"
                >
                  <PlusCircle size={14} />
                  تسجيل تحديث جديد
                </button>
              </div>

              {/* Updates */}
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                  آخر التحديثات
                </p>
                {updates.length === 0 ? (
                  <div
                    className="text-center py-8 text-muted-foreground text-sm"
                    data-ocid="project-files.updates.empty_state"
                  >
                    لا توجد تحديثات مسجلة
                  </div>
                ) : (
                  <div className="space-y-2">
                    {updates.map((upd, i) => (
                      <div
                        key={`upd-${upd.date}-${i}`}
                        className="flex gap-3 bg-muted/20 border border-border rounded-xl p-4 hover:bg-muted/40 transition-colors"
                        data-ocid={`project-files.update.item.${i + 1}`}
                      >
                        <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          {UPDATE_ICONS[upd.type] ?? (
                            <Clock
                              size={14}
                              className="text-muted-foreground"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {upd.type}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {upd.date}
                            </span>
                          </div>
                          <p className="text-sm text-foreground leading-snug">
                            {upd.desc}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            بواسطة: {upd.by} — ينتظر رد:{" "}
                            <span className="font-semibold text-foreground">
                              {upd.actionBy}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Obstacles */}
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                  المعوقات المسجلة
                </p>
                {obstacles.length === 0 ? (
                  <div
                    className="text-center py-6 text-muted-foreground text-sm"
                    data-ocid="project-files.obstacles.empty_state"
                  >
                    لا توجد معوقات مسجلة لهذا المشروع
                  </div>
                ) : (
                  <div className="space-y-2">
                    {obstacles.map((obs, i) => {
                      const st = getObstacleStatusLabel(obs.status);
                      return (
                        <div
                          key={obs.id}
                          className="flex items-start gap-3 bg-muted/20 border border-border rounded-xl p-4"
                          data-ocid={`project-files.obstacle.item.${i + 1}`}
                        >
                          <AlertTriangle
                            size={16}
                            className={cn(
                              "flex-shrink-0 mt-0.5",
                              obs.priority === "عالية"
                                ? "text-red-500"
                                : obs.priority === "متوسطة"
                                  ? "text-amber-500"
                                  : "text-muted-foreground",
                            )}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground">
                              {obs.description}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                              <span
                                className={cn(
                                  "text-xs font-medium px-2 py-0.5 rounded-full border",
                                  st.cls,
                                )}
                              >
                                {st.label}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                الأولوية:{" "}
                                {obs.priority === "عالية"
                                  ? "عالية"
                                  : obs.priority === "متوسطة"
                                    ? "متوسطة"
                                    : "منخفضة"}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── TAB: البيانات المالية ── */}
          {activeTab === "financial" && (
            <div
              className="p-6 space-y-6"
              data-ocid="project-files.financial.panel"
            >
              <h3 className="font-bold text-foreground text-sm">
                الموقف المالي للمشروع
              </h3>

              {/* Financial cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    label: "الكلفة الكلية للمشروع",
                    value: formatCost(totalCost),
                    icon: <DollarSign size={18} className="text-primary" />,
                    sub: "إجمالي تكلفة المشروع",
                  },
                  {
                    label: "التخصيص المقترح للسنة الحالية",
                    value: formatCost(Math.round(totalCost * 0.25)),
                    icon: <BarChart2 size={18} className="text-blue-500" />,
                    sub: "السنة المالية 2026",
                  },
                  {
                    label: "المصروف السنوي",
                    value: formatCost(Math.round(spent * 0.35)),
                    icon: <TrendingUp size={18} className="text-emerald-500" />,
                    sub: "مصروف السنة الحالية",
                  },
                  {
                    label: "المصروف التراكمي",
                    value: formatCost(spent),
                    icon: <BarChart2 size={18} className="text-blue-600" />,
                    sub: "إجمالي ما صُرف",
                  },
                  {
                    label: "المبلغ المتبقي",
                    value: formatCost(remaining),
                    icon: <DollarSign size={18} className="text-amber-500" />,
                    sub: "رصيد غير منصرف",
                  },
                  {
                    label: "نسبة الصرف",
                    value: `${spentPct}%`,
                    icon: <BarChart2 size={18} className="text-purple-500" />,
                    sub: "من إجمالي الكلفة",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-background border border-border rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-xs font-semibold text-muted-foreground leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-lg font-black text-foreground">
                      {item.value}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress comparison */}
              <div className="bg-background border border-border rounded-xl p-5 space-y-4">
                <p className="text-sm font-bold text-foreground">
                  مقارنة نسبة الإنجاز مع نسبة الصرف
                </p>
                {[
                  {
                    label: "نسبة الإنجاز الفعلي",
                    value: selectedProject.progress,
                    color: "bg-emerald-500",
                  },
                  {
                    label: "نسبة الصرف التراكمي",
                    value: spentPct,
                    color: "bg-blue-500",
                  },
                ].map((bar) => (
                  <div key={bar.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">
                        {bar.label}
                      </span>
                      <span className="font-black text-foreground">
                        {bar.value}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full", bar.color)}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-1">
                  {Math.abs(selectedProject.progress - spentPct) <= 5
                    ? "✅ نسبة الإنجاز والصرف متوازنتان"
                    : selectedProject.progress > spentPct
                      ? "✅ الإنجاز متقدم على الصرف — مؤشر جيد"
                      : "⚠️ الصرف متقدم على الإنجاز — يستوجب المراجعة"}
                </p>
              </div>

              {/* Notes */}
              <div className="bg-muted/30 border border-border rounded-xl p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-1.5">
                  ملاحظات مالية
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  جميع البيانات المالية محدّثة وفق آخر كشف حساب معتمد. التخصيص
                  المقترح للسنة الحالية يشمل أعمال المرحلة الجارية فقط.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── List View ────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-5" dir="rtl">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-black text-foreground">
            ملفات المشاريع
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            السجل الإلكتروني الشامل لجميع المشاريع
          </p>
        </div>
        <button
          type="button"
          onClick={handleComingSoon}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm"
          data-ocid="project-files.add_project.button"
        >
          <PlusCircle size={16} />
          إضافة مشروع جديد
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-card">
        <p className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wide">
          تصفية المشاريع
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label
              htmlFor="filter-status"
              className="text-xs text-muted-foreground mb-1 block"
            >
              حالة الموقف
            </label>
            <select
              id="filter-status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              data-ocid="project-files.filter.status.select"
            >
              <option value="">الكل</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {projectStatusMap[s]?.label ?? s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-type"
              className="text-xs text-muted-foreground mb-1 block"
            >
              نوع المشروع
            </label>
            <select
              id="filter-type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              data-ocid="project-files.filter.type.select"
            >
              <option value="">الكل</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-location"
              className="text-xs text-muted-foreground mb-1 block"
            >
              الموقع
            </label>
            <select
              id="filter-location"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              data-ocid="project-files.filter.location.select"
            >
              <option value="">الكل</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-year"
              className="text-xs text-muted-foreground mb-1 block"
            >
              سنة الإدراج
            </label>
            <select
              id="filter-year"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              data-ocid="project-files.filter.year.select"
            >
              <option value="">الكل</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        {(filterStatus || filterType || filterLocation || filterYear) && (
          <button
            type="button"
            onClick={() => {
              setFilterStatus("");
              setFilterType("");
              setFilterLocation("");
              setFilterYear("");
            }}
            className="mt-3 text-xs text-primary hover:underline"
            data-ocid="project-files.filter.clear.button"
          >
            مسح التصفية
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground">
        عرض {filtered.length} من {allProjects.length} مشروع
      </p>

      {/* Projects table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-right border-b border-border">
                {[
                  "التسلسل",
                  "اسم المشروع",
                  "الموقع",
                  "الحالة",
                  "نسبة الإنجاز",
                  "الكلفة الكلية",
                  "المصروف التراكمي",
                  "المكونات",
                  "",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3.5 text-xs font-bold text-muted-foreground"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-12 text-center text-muted-foreground"
                    data-ocid="project-files.list.empty_state"
                  >
                    <FolderOpen size={36} className="mx-auto mb-2 opacity-30" />
                    لا توجد مشاريع تطابق معايير التصفية المحددة
                  </td>
                </tr>
              ) : (
                filtered.map((project, i) => {
                  const compsCount = (projectComponents[project.id] ?? [])
                    .length;
                  return (
                    <tr
                      key={project.id}
                      className={cn(
                        "border-b border-border/60 hover:bg-primary/5 transition-colors group",
                        i % 2 === 1 ? "bg-muted/10" : "bg-background",
                      )}
                      data-ocid={`project-files.project.item.${i + 1}`}
                    >
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs font-bold text-muted-foreground">
                          {project.id}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {project.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {project.projectType} — {project.year}
                        </p>
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">
                        {project.location}
                      </td>
                      <td className="px-4 py-3.5">
                        <ProjectStatusPill status={project.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2 min-w-[100px]">
                          <div className="flex-1 bg-muted rounded-full h-1.5">
                            <div
                              className={cn(
                                "h-1.5 rounded-full",
                                project.progress >= 70
                                  ? "bg-emerald-500"
                                  : project.progress >= 40
                                    ? "bg-amber-500"
                                    : "bg-red-500",
                              )}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-foreground w-8 text-left">
                            {project.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-left font-semibold text-foreground">
                        {formatCost(project.totalCost)}
                      </td>
                      <td className="px-4 py-3.5 text-left text-muted-foreground">
                        {formatCost(project.spent)}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {compsCount}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          type="button"
                          onClick={() => openProject(project.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                          data-ocid={`project-files.open_button.${i + 1}`}
                        >
                          <FolderOpen size={13} />
                          عرض الملف
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary totals */}
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            label: "إجمالي الكلفة",
            value: formatCost(filtered.reduce((s, p) => s + p.totalCost, 0)),
            icon: <DollarSign size={18} className="text-primary" />,
          },
          {
            label: "إجمالي المصروف",
            value: formatCost(filtered.reduce((s, p) => s + p.spent, 0)),
            icon: <TrendingUp size={18} className="text-emerald-500" />,
          },
          {
            label: "إجمالي المتبقي",
            value: formatCost(
              filtered.reduce((s, p) => s + (p.totalCost - p.spent), 0),
            ),
            icon: <XCircle size={18} className="text-amber-500" />,
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-card"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              {card.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{card.label}</p>
              <p className="text-sm font-black text-foreground">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
