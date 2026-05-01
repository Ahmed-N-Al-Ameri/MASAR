// TypeScript types matching backend contracts
export type ProjectStatus =
  | "مستمر"
  | "متوقف"
  | "داخل للخدمة"
  | "استلام نهائي"
  | "منجز تام"
  | "غير موقع"
  | "تسوية مالية"
  | "متعلقات مالية"
  | "لم يباشر به";

export type DocumentFolder =
  | "Study"
  | "Contract"
  | "Execution"
  | "Correspondence"
  | "ChangeOrder"
  | "Extension"
  | "Financial"
  | "Obstacles";

export type ObstaclePriority = "عالية" | "متوسطة" | "منخفضة";
export type ObstacleStatus = "مفتوح" | "قيد المعالجة" | "محلول";
export type NotificationType = "alert" | "update" | "pending" | "missing";

export type ObstacleType =
  | "قلة التخصيصات المالية"
  | "الوضع الأمني"
  | "عدم جاهزية الجهة المستفيدة"
  | "عدم الموافقة على المسار"
  | "عدم وصول المواد الاستيرادية"
  | "تعثر التعاقد"
  | "عدم توقيع العقد"
  | "تأخر المخاطبات أو الموافقات"
  | "التريث في تنفيذ المشروع";

export interface ProjectComponent {
  id: number;
  projectId: number;
  name: string;
  contractor: string;
  status: ProjectStatus;
  plannedProgress: number;
  actualProgress: number;
  contractCost: number;
  startDate: string;
  duration: string;
  notes?: string;
}

export interface Project {
  id: number;
  seq: number;
  name: string;
  location: string;
  status: ProjectStatus;
  progress: number;
  totalCost: number;
  spent: number;
  startDate: string;
  endDate: string;
  projectType: string;
  year: number;
  beneficiary?: string;
  contractor?: string;
  contractNumber?: string;
  lastUpdated?: string;
  hasMissingDocs?: boolean;
  pendingAction?: boolean;
  components?: ProjectComponent[];
}

export interface Document {
  id: number;
  projectId: number;
  folder: DocumentFolder;
  name: string;
  docNumber: string;
  date: string;
  fileUrl: string;
}

export interface Task {
  id: number;
  projectId: number;
  name: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart: string | null;
  actualEnd: string | null;
  assignee: string;
}

export interface FinancialItem {
  id: number;
  projectId: number;
  category: string;
  allocated: number;
  spent: number;
}

export interface Obstacle {
  id: number;
  projectId: number;
  type: ObstacleType;
  description: string;
  priority: ObstaclePriority;
  status: ObstacleStatus;
  affectedTime?: string;
  relatedParty?: string;
  action?: string;
}

export interface Notification {
  id: number;
  title: string;
  type: NotificationType;
  date: string;
  isRead: boolean;
}

export interface DashboardStats {
  totalProjects: number;
  continuing: number;
  stopped: number;
  inService: number;
  finalAccepted: number;
  financialSettlement: number;
  pendingAction: number;
  totalCost: number;
  totalSpent: number;
  totalRemaining: number;
  recentUpdatesCount: number;
  documentsCount: number;
  alertsCount: number;
}

export interface AlertsData {
  notUpdated: Project[];
  missingDocs: Project[];
  pendingAction: Project[];
}

export interface ReportData {
  projectsByStatus: [string, number][];
  projectsByLocation: [string, number][];
  projectsByYear: [number, number][];
  financialSummary: [string, number, number][];
}

// ───────────────────────────────────────────────────────────────
// REAL DATA — شركة خطوط الأنابيب النفطية — تقرير مارس 2026
// ───────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    seq: 1,
    name: "إيصال الوقود للمشاريع الصناعية والكهربائية",
    location: "متعدد المحافظات",
    status: "مستمر",
    progress: 71.9,
    totalCost: 2039579631853,
    spent: 570663260237,
    startDate: "2021-03-01",
    endDate: "2026-12-31",
    projectType: "أنابيب",
    year: 2021,
    beneficiary: "وزارة الكهرباء",
    contractor: "شركة المشاريع النفطية",
    contractNumber: "OPC-2021-001",
    lastUpdated: "2026-03-15",
    hasMissingDocs: false,
    pendingAction: true,
    components: [
      {
        id: 101,
        projectId: 1,
        name: 'خط أنابيب بغداد-الدورة 12"',
        contractor: "شركة المشاريع النفطية",
        status: "مستمر",
        plannedProgress: 80,
        actualProgress: 75,
        contractCost: 120000000000,
        startDate: "2021-03-01",
        duration: "18 شهر",
      },
      {
        id: 102,
        projectId: 1,
        name: "محطة ضخ الدورة",
        contractor: "شركة المعدات الهندسية",
        status: "مستمر",
        plannedProgress: 70,
        actualProgress: 68,
        contractCost: 85000000000,
        startDate: "2021-06-01",
        duration: "24 شهر",
      },
      {
        id: 103,
        projectId: 1,
        name: 'خط أنابيب الدورة-العامرية 10"',
        contractor: "بتروجت",
        status: "مستمر",
        plannedProgress: 65,
        actualProgress: 72.3,
        contractCost: 95000000000,
        startDate: "2022-01-01",
        duration: "18 شهر",
      },
    ],
  },
  {
    id: 2,
    seq: 2,
    name: "زيادة طاقات خزن المنتجات البيضاء وتطوير المستودعات ومحطات الضخ",
    location: "متعدد المحافظات",
    status: "مستمر",
    progress: 82.4,
    totalCost: 257744000000,
    spent: 233314182432,
    startDate: "2019-06-01",
    endDate: "2026-06-30",
    projectType: "مستودعات",
    year: 2019,
    beneficiary: "شركة خطوط الأنابيب",
    contractor: "شركة المشاريع النفطية",
    contractNumber: "OPC-2019-002",
    lastUpdated: "2026-03-20",
    hasMissingDocs: false,
    pendingAction: false,
  },
  {
    id: 3,
    seq: 3,
    name: "أنبوب المنتجات 14 بوصة (بصرة-بغداد) مع محطات الضخ",
    location: "بصرة-بغداد",
    status: "مستمر",
    progress: 98.5,
    totalCost: 150000000000,
    spent: 140000000000,
    startDate: "2018-01-01",
    endDate: "2026-06-30",
    projectType: "أنابيب",
    year: 2018,
    beneficiary: "شركة خطوط الأنابيب",
    contractor: "كوكاز",
    contractNumber: "OPC-2018-003",
    lastUpdated: "2026-03-10",
    hasMissingDocs: false,
    pendingAction: false,
  },
  {
    id: 4,
    seq: 4,
    name: "إنشاء مركز السيطرة الوطنية على حركة المنتجات النفطية والغاز",
    location: "بغداد",
    status: "متوقف",
    progress: 15,
    totalCost: 225500000000,
    spent: 25000000000,
    startDate: "2020-01-01",
    endDate: "2025-12-31",
    projectType: "مراكز تحكم",
    year: 2020,
    beneficiary: "شركة خطوط الأنابيب",
    contractor: "شركة المعدات الهندسية",
    contractNumber: "OPC-2020-004",
    lastUpdated: "2025-10-01",
    hasMissingDocs: true,
    pendingAction: true,
  },
  {
    id: 5,
    seq: 5,
    name: "زيادة الطاقات التصديرية من المنفذ الجنوبي",
    location: "البصرة",
    status: "مستمر",
    progress: 45,
    totalCost: 492500000000,
    spent: 180000000000,
    startDate: "2021-01-01",
    endDate: "2027-06-30",
    projectType: "أنابيب",
    year: 2021,
    beneficiary: "شركة تسويق النفط",
    contractor: "بتروجت",
    contractNumber: "OPC-2021-005",
    lastUpdated: "2026-03-05",
    hasMissingDocs: false,
    pendingAction: true,
  },
  {
    id: 6,
    seq: 6,
    name: "إيصال الغاز السائل إلى المحافظات بالأنابيب",
    location: "متعدد المحافظات",
    status: "مستمر",
    progress: 62.6,
    totalCost: 120000000000,
    spent: 72000000000,
    startDate: "2020-06-01",
    endDate: "2026-12-31",
    projectType: "أنابيب غاز",
    year: 2020,
    beneficiary: "شركة غاز الجنوب",
    contractor: "ميسان للطاقة",
    contractNumber: "OPC-2020-006",
    lastUpdated: "2026-03-12",
    hasMissingDocs: false,
    pendingAction: true,
  },
  {
    id: 7,
    seq: 7,
    name: "تحسين شبكات الأنابيب",
    location: "متعدد المحافظات",
    status: "مستمر",
    progress: 44.1,
    totalCost: 1351375955490,
    spent: 450000000000,
    startDate: "2019-01-01",
    endDate: "2027-12-31",
    projectType: "صيانة وتطوير",
    year: 2019,
    beneficiary: "شركة خطوط الأنابيب",
    contractor: "كوكاز",
    contractNumber: "OPC-2019-007",
    lastUpdated: "2026-03-18",
    hasMissingDocs: false,
    pendingAction: true,
    components: [
      {
        id: 701,
        projectId: 7,
        name: "تأهيل خط كركوك-بيجي",
        contractor: "كوكاز",
        status: "مستمر",
        plannedProgress: 55,
        actualProgress: 44,
        contractCost: 350000000000,
        startDate: "2020-05-01",
        duration: "36 شهر",
      },
      {
        id: 702,
        projectId: 7,
        name: "تأهيل خط بصرة-نجف",
        contractor: "شركة المشاريع النفطية",
        status: "متوقف",
        plannedProgress: 40,
        actualProgress: 22,
        contractCost: 280000000000,
        startDate: "2020-08-01",
        duration: "30 شهر",
      },
      {
        id: 703,
        projectId: 7,
        name: "استبدال الخطوط القديمة في بغداد",
        contractor: "ميسان للطاقة",
        status: "مستمر",
        plannedProgress: 60,
        actualProgress: 55,
        contractCost: 200000000000,
        startDate: "2021-03-01",
        duration: "24 شهر",
      },
    ],
  },
  {
    id: 8,
    seq: 8,
    name: "مستودع كربلاء",
    location: "كربلاء",
    status: "استلام نهائي",
    progress: 99.285,
    totalCost: 139650010000,
    spent: 138000000000,
    startDate: "2017-01-01",
    endDate: "2026-03-31",
    projectType: "مستودعات",
    year: 2017,
    beneficiary: "شركة توزيع المنتجات",
    contractor: "شركة المشاريع النفطية",
    contractNumber: "OPC-2017-008",
    lastUpdated: "2026-03-28",
    hasMissingDocs: false,
    pendingAction: false,
  },
  {
    id: 9,
    seq: 9,
    name: "مستودع السماوة",
    location: "السماوة",
    status: "مستمر",
    progress: 95.3,
    totalCost: 150685000000,
    spent: 143000000000,
    startDate: "2018-06-01",
    endDate: "2026-06-30",
    projectType: "مستودعات",
    year: 2018,
    beneficiary: "شركة توزيع المنتجات",
    contractor: "شركة المعدات الهندسية",
    contractNumber: "OPC-2018-009",
    lastUpdated: "2026-03-22",
    hasMissingDocs: false,
    pendingAction: false,
  },
  {
    id: 10,
    seq: 10,
    name: "مستودع العمارة",
    location: "العمارة",
    status: "داخل للخدمة",
    progress: 99.5,
    totalCost: 170516250000,
    spent: 168000000000,
    startDate: "2018-03-01",
    endDate: "2026-01-31",
    projectType: "مستودعات",
    year: 2018,
    beneficiary: "شركة توزيع المنتجات",
    contractor: "بتروجت",
    contractNumber: "OPC-2018-010",
    lastUpdated: "2026-03-01",
    hasMissingDocs: false,
    pendingAction: false,
  },
  {
    id: 11,
    seq: 11,
    name: "تسديد الحسابات للمشاريع المنجزة والمحذوفة",
    location: "متعدد",
    status: "تسوية مالية",
    progress: 100,
    totalCost: 50000000000,
    spent: 45000000000,
    startDate: "2022-01-01",
    endDate: "2026-12-31",
    projectType: "تسوية مالية",
    year: 2022,
    beneficiary: "شركة خطوط الأنابيب",
    contractor: "متعدد",
    contractNumber: "OPC-2022-011",
    lastUpdated: "2025-11-01",
    hasMissingDocs: true,
    pendingAction: false,
  },
  {
    id: 12,
    seq: 12,
    name: "أنبوب الغاز الشرقي (حلفاية-بصرة)",
    location: "حلفاية-بصرة",
    status: "مستمر",
    progress: 28,
    totalCost: 485101940000,
    spent: 95000000000,
    startDate: "2022-06-01",
    endDate: "2028-12-31",
    projectType: "أنابيب غاز",
    year: 2022,
    beneficiary: "شركة الغاز الوطنية",
    contractor: "كوكاز",
    contractNumber: "OPC-2022-012",
    lastUpdated: "2025-09-01",
    hasMissingDocs: false,
    pendingAction: true,
  },
];

const obstacles: Obstacle[] = [
  {
    id: 1,
    projectId: 4,
    type: "الوضع الأمني",
    description: "توقف العمل بسبب الأوضاع الأمنية في المنطقة",
    priority: "عالية",
    status: "مفتوح",
    relatedParty: "القوات الأمنية",
    action: "انتظار استقرار الوضع الأمني",
  },
  {
    id: 2,
    projectId: 7,
    type: "قلة التخصيصات المالية",
    description: "عدم كفاية التخصيصات المالية للسنة الحالية",
    priority: "عالية",
    status: "مفتوح",
    affectedTime: "6 أشهر",
    relatedParty: "وزارة التخطيط",
    action: "مخاطبة وزارة التخطيط لزيادة التخصيصات",
  },
  {
    id: 3,
    projectId: 5,
    type: "تأخر المخاطبات أو الموافقات",
    description: "تأخر الموافقة على المخططات الهندسية",
    priority: "متوسطة",
    status: "قيد المعالجة",
    relatedParty: "الجهات الهندسية المختصة",
    action: "متابعة الجهات المعنية للحصول على الموافقة",
  },
  {
    id: 4,
    projectId: 6,
    type: "عدم وصول المواد الاستيرادية",
    description: "تأخر وصول معدات الضخ المستوردة",
    priority: "متوسطة",
    status: "قيد المعالجة",
    relatedParty: "الجمارك العامة",
    action: "متابعة إجراءات الاستيراد والتخليص الجمركي",
  },
  {
    id: 5,
    projectId: 12,
    type: "عدم الموافقة على المسار",
    description: "لم تُستكمل موافقات الجهات ذات العلاقة على مسار الأنبوب",
    priority: "عالية",
    status: "مفتوح",
    relatedParty: "وزارة النفط / الجهات الأمنية",
    action: "مخاطبة الجهات للحصول على الموافقات اللازمة",
  },
  {
    id: 6,
    projectId: 1,
    type: "عدم جاهزية الجهة المستفيدة",
    description: "تأخر تجهيز موقع الاستلام من قبل الجهة المستفيدة",
    priority: "متوسطة",
    status: "قيد المعالجة",
    relatedParty: "وزارة الكهرباء",
    action: "مخاطبة وزارة الكهرباء لتسريع تجهيز المواقع",
  },
  {
    id: 7,
    projectId: 2,
    type: "التريث في تنفيذ المشروع",
    description: "بطء الشركة المنفذة في الإنجاز",
    priority: "منخفضة",
    status: "قيد المعالجة",
    relatedParty: "شركة المشاريع النفطية",
    action: "توجيه إنذار رسمي للشركة المنفذة",
  },
  {
    id: 8,
    projectId: 9,
    type: "تعثر التعاقد",
    description: "تأخر إجراءات العقد الإضافي للمراحل المتبقية",
    priority: "متوسطة",
    status: "مفتوح",
    relatedParty: "لجان العقود",
    action: "استكمال إجراءات التعاقد للمراحل المتبقية",
  },
];

const documents: Document[] = [
  {
    id: 1,
    projectId: 1,
    folder: "Study",
    name: "دراسة الجدوى الفنية والاقتصادية",
    docNumber: "OPC-STD-2021-001",
    date: "2021-01-15",
    fileUrl: "/docs/1.pdf",
  },
  {
    id: 2,
    projectId: 1,
    folder: "Contract",
    name: "عقد المقاول الرئيسي - شركة المشاريع النفطية",
    docNumber: "OPC-CON-2021-001",
    date: "2021-03-10",
    fileUrl: "/docs/2.pdf",
  },
  {
    id: 3,
    projectId: 1,
    folder: "Execution",
    name: "تقرير تقدم العمل - مارس 2026",
    docNumber: "OPC-EXE-2026-003",
    date: "2026-03-31",
    fileUrl: "/docs/3.pdf",
  },
  {
    id: 4,
    projectId: 1,
    folder: "Correspondence",
    name: "مخاطبة وزارة الكهرباء بشأن جاهزية المواقع",
    docNumber: "OPC-COR-2026-010",
    date: "2026-02-20",
    fileUrl: "/docs/4.pdf",
  },
  {
    id: 5,
    projectId: 2,
    folder: "Contract",
    name: "عقد مستودع كركوك",
    docNumber: "OPC-CON-2019-002",
    date: "2019-07-01",
    fileUrl: "/docs/5.pdf",
  },
  {
    id: 6,
    projectId: 2,
    folder: "Execution",
    name: "محضر استلام ابتدائي - مستودع الموصل",
    docNumber: "OPC-EXE-2025-020",
    date: "2025-11-15",
    fileUrl: "/docs/6.pdf",
  },
  {
    id: 7,
    projectId: 3,
    folder: "Contract",
    name: "عقد الإنشاء والتجهيز - كوكاز",
    docNumber: "OPC-CON-2018-003",
    date: "2018-03-01",
    fileUrl: "/docs/7.pdf",
  },
  {
    id: 8,
    projectId: 3,
    folder: "Execution",
    name: "شهادة الاختبار الهيدروستاتيكي",
    docNumber: "OPC-EXE-2026-031",
    date: "2026-01-20",
    fileUrl: "/docs/8.pdf",
  },
  {
    id: 9,
    projectId: 4,
    folder: "Study",
    name: "دراسة تصميم مركز السيطرة الوطنية",
    docNumber: "OPC-STD-2020-004",
    date: "2020-01-10",
    fileUrl: "/docs/9.pdf",
  },
  {
    id: 10,
    projectId: 5,
    folder: "Contract",
    name: "عقد إنشاء خط التصدير - بتروجت",
    docNumber: "OPC-CON-2021-005",
    date: "2021-02-01",
    fileUrl: "/docs/10.pdf",
  },
  {
    id: 11,
    projectId: 6,
    folder: "Execution",
    name: "تقرير تقدم العمل - فبراير 2026",
    docNumber: "OPC-EXE-2026-006",
    date: "2026-02-28",
    fileUrl: "/docs/11.pdf",
  },
  {
    id: 12,
    projectId: 7,
    folder: "Obstacles",
    name: "كتاب المعوقات المالية - قسم الدراسات",
    docNumber: "OPC-OBS-2026-007",
    date: "2026-03-01",
    fileUrl: "/docs/12.pdf",
  },
  {
    id: 13,
    projectId: 8,
    folder: "Execution",
    name: "محضر الاستلام النهائي - مستودع كربلاء",
    docNumber: "OPC-EXE-2026-008",
    date: "2026-03-15",
    fileUrl: "/docs/13.pdf",
  },
  {
    id: 14,
    projectId: 9,
    folder: "Contract",
    name: "العقد الإضافي للمراحل المتبقية",
    docNumber: "OPC-CON-2025-009",
    date: "2025-08-01",
    fileUrl: "/docs/14.pdf",
  },
  {
    id: 15,
    projectId: 10,
    folder: "Execution",
    name: "شهادة دخول مستودع العمارة للخدمة",
    docNumber: "OPC-EXE-2026-010",
    date: "2026-01-15",
    fileUrl: "/docs/15.pdf",
  },
  {
    id: 16,
    projectId: 12,
    folder: "Study",
    name: "دراسة مسار أنبوب الغاز الشرقي",
    docNumber: "OPC-STD-2022-012",
    date: "2022-04-01",
    fileUrl: "/docs/16.pdf",
  },
  {
    id: 17,
    projectId: 12,
    folder: "Obstacles",
    name: "كتاب موافقات مسار الأنبوب",
    docNumber: "OPC-OBS-2024-012",
    date: "2024-06-01",
    fileUrl: "/docs/17.pdf",
  },
  {
    id: 18,
    projectId: 1,
    folder: "ChangeOrder",
    name: "أمر تغيير رقم 3 - خط الدورة-العامرية",
    docNumber: "OPC-CHG-2023-001",
    date: "2023-09-01",
    fileUrl: "/docs/18.pdf",
  },
  {
    id: 19,
    projectId: 7,
    folder: "ChangeOrder",
    name: "أمر غيار - تأهيل خط كركوك-بيجي",
    docNumber: "OPC-CHG-2022-007",
    date: "2022-11-01",
    fileUrl: "/docs/19.pdf",
  },
  {
    id: 20,
    projectId: 5,
    folder: "Correspondence",
    name: "مخاطبة الجهات الهندسية للموافقة على المخططات",
    docNumber: "OPC-COR-2026-005",
    date: "2026-01-10",
    fileUrl: "/docs/20.pdf",
  },
  {
    id: 21,
    projectId: 2,
    folder: "Financial",
    name: "كشف الصرف التراكمي - مستودعات 2025",
    docNumber: "OPC-FIN-2025-002",
    date: "2025-12-31",
    fileUrl: "/docs/21.pdf",
  },
  {
    id: 22,
    projectId: 3,
    folder: "Extension",
    name: "كتاب تمديد المدة التعاقدية الثالث",
    docNumber: "OPC-EXT-2025-003",
    date: "2025-06-01",
    fileUrl: "/docs/22.pdf",
  },
  {
    id: 23,
    projectId: 11,
    folder: "Financial",
    name: "كشف التسوية المالية للمشاريع المنجزة",
    docNumber: "OPC-FIN-2025-011",
    date: "2025-09-01",
    fileUrl: "/docs/23.pdf",
  },
  {
    id: 24,
    projectId: 9,
    folder: "Correspondence",
    name: "مخاطبة لجان العقود لاستكمال إجراءات التعاقد",
    docNumber: "OPC-COR-2025-009",
    date: "2025-10-15",
    fileUrl: "/docs/24.pdf",
  },
];

const tasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    name: "أعمال الحفر والتحضير - خط الدورة",
    plannedStart: "2021-03-01",
    plannedEnd: "2021-09-30",
    actualStart: "2021-03-15",
    actualEnd: "2021-10-20",
    assignee: "شركة المشاريع النفطية",
  },
  {
    id: 2,
    projectId: 1,
    name: "تمديد الأنابيب - المرحلة الأولى",
    plannedStart: "2021-10-01",
    plannedEnd: "2022-06-30",
    actualStart: "2021-11-01",
    actualEnd: null,
    assignee: "شركة المشاريع النفطية",
  },
  {
    id: 3,
    projectId: 1,
    name: "تركيب معدات محطة الضخ",
    plannedStart: "2022-01-01",
    plannedEnd: "2022-12-31",
    actualStart: "2022-03-01",
    actualEnd: null,
    assignee: "شركة المعدات الهندسية",
  },
  {
    id: 4,
    projectId: 7,
    name: "تأهيل خط كركوك-بيجي - المرحلة الأولى",
    plannedStart: "2020-05-01",
    plannedEnd: "2022-05-31",
    actualStart: "2020-06-01",
    actualEnd: null,
    assignee: "كوكاز",
  },
  {
    id: 5,
    projectId: 7,
    name: "تأهيل خط بصرة-نجف",
    plannedStart: "2020-08-01",
    plannedEnd: "2022-12-31",
    actualStart: "2020-09-01",
    actualEnd: null,
    assignee: "شركة المشاريع النفطية",
  },
  {
    id: 6,
    projectId: 3,
    name: "تمديد الأنبوب الرئيسي بصرة-بغداد",
    plannedStart: "2018-01-01",
    plannedEnd: "2023-12-31",
    actualStart: "2018-03-01",
    actualEnd: null,
    assignee: "كوكاز",
  },
  {
    id: 7,
    projectId: 8,
    name: "أعمال الإنشاء المدنية",
    plannedStart: "2017-01-01",
    plannedEnd: "2022-06-30",
    actualStart: "2017-03-01",
    actualEnd: "2022-09-01",
    assignee: "شركة المشاريع النفطية",
  },
  {
    id: 8,
    projectId: 8,
    name: "تركيب الخزانات وتشغيل المستودع",
    plannedStart: "2022-07-01",
    plannedEnd: "2023-12-31",
    actualStart: "2022-10-01",
    actualEnd: "2025-12-31",
    assignee: "شركة المعدات الهندسية",
  },
  {
    id: 9,
    projectId: 10,
    name: "إنشاء الخزانات والمرافق",
    plannedStart: "2018-03-01",
    plannedEnd: "2023-06-30",
    actualStart: "2018-05-01",
    actualEnd: "2024-01-31",
    assignee: "بتروجت",
  },
  {
    id: 10,
    projectId: 10,
    name: "تشغيل المستودع ودخوله للخدمة",
    plannedStart: "2024-01-01",
    plannedEnd: "2024-12-31",
    actualStart: "2024-02-01",
    actualEnd: "2026-01-15",
    assignee: "بتروجت",
  },
];

const financialItems: FinancialItem[] = [
  {
    id: 1,
    projectId: 1,
    category: "أعمال الأنابيب والتمديدات",
    allocated: 800000000000,
    spent: 250000000000,
  },
  {
    id: 2,
    projectId: 1,
    category: "معدات محطات الضخ",
    allocated: 600000000000,
    spent: 180000000000,
  },
  {
    id: 3,
    projectId: 1,
    category: "أعمال مدنية وإنشائية",
    allocated: 400000000000,
    spent: 100000000000,
  },
  {
    id: 4,
    projectId: 1,
    category: "إدارة المشروع والإشراف",
    allocated: 239579631853,
    spent: 40663260237,
  },
  {
    id: 5,
    projectId: 7,
    category: "تأهيل خطوط الأنابيب",
    allocated: 900000000000,
    spent: 320000000000,
  },
  {
    id: 6,
    projectId: 7,
    category: "استبدال الخطوط القديمة",
    allocated: 300000000000,
    spent: 90000000000,
  },
  {
    id: 7,
    projectId: 7,
    category: "أعمال المحطات والصمامات",
    allocated: 151375955490,
    spent: 40000000000,
  },
  {
    id: 8,
    projectId: 5,
    category: "أعمال الأنابيب التصديرية",
    allocated: 350000000000,
    spent: 130000000000,
  },
  {
    id: 9,
    projectId: 5,
    category: "محطات الضخ الجديدة",
    allocated: 142500000000,
    spent: 50000000000,
  },
  {
    id: 10,
    projectId: 3,
    category: "تمديد الأنبوب الرئيسي",
    allocated: 100000000000,
    spent: 95000000000,
  },
  {
    id: 11,
    projectId: 3,
    category: "محطات الضخ والصيانة",
    allocated: 50000000000,
    spent: 45000000000,
  },
];

const notifications: Notification[] = [
  {
    id: 1,
    title: "مركز السيطرة الوطنية — متوقف — يتطلب إجراءً عاجلاً",
    type: "pending",
    date: "2026-04-20",
    isRead: false,
  },
  {
    id: 2,
    title: "أنبوب الغاز الشرقي — لم يتم تحديثه منذ أكثر من 200 يوم",
    type: "alert",
    date: "2026-04-19",
    isRead: false,
  },
  {
    id: 3,
    title: "تسديد الحسابات — وثائق التسوية المالية ناقصة",
    type: "missing",
    date: "2026-04-18",
    isRead: false,
  },
  {
    id: 4,
    title: "تحسين شبكات الأنابيب — معوق مالي مفتوح منذ 3 أشهر",
    type: "alert",
    date: "2026-04-17",
    isRead: false,
  },
  {
    id: 5,
    title: "زيادة الطاقات التصديرية — تأخر موافقة المخططات الهندسية",
    type: "pending",
    date: "2026-04-15",
    isRead: false,
  },
  {
    id: 6,
    title: "مستودع كربلاء — تم رفع محضر الاستلام النهائي",
    type: "update",
    date: "2026-03-28",
    isRead: true,
  },
  {
    id: 7,
    title: "مستودع العمارة — دخل الخدمة بنسبة إنجاز 99.5%",
    type: "update",
    date: "2026-03-01",
    isRead: true,
  },
  {
    id: 8,
    title: "إيصال الغاز السائل — تأخر وصول معدات الضخ المستوردة",
    type: "pending",
    date: "2026-03-12",
    isRead: false,
  },
];

export const statsData = {
  totalReports: 18,
  totalStats: 12,
};

// ─── Helper Functions ────────────────────────────────────────────
export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getDocuments(projectId: number): Document[] {
  return documents.filter((d) => d.projectId === projectId);
}

export function getAllDocuments(): Document[] {
  return documents;
}

export function getProjectTasks(projectId: number): Task[] {
  return tasks.filter((t) => t.projectId === projectId);
}

export function getFinancialItems(projectId: number): FinancialItem[] {
  return financialItems.filter((f) => f.projectId === projectId);
}

export function getObstacles(projectId?: number): Obstacle[] {
  if (projectId === undefined) return obstacles;
  return obstacles.filter((o) => o.projectId === projectId);
}

export function getNotifications(): Notification[] {
  return notifications;
}

export function getUnreadNotificationCount(): number {
  return notifications.filter((n) => !n.isRead).length;
}

export function getProjectComponents(projectId: number): ProjectComponent[] {
  const project = projects.find((p) => p.id === projectId);
  return project?.components ?? [];
}

export function getAlerts(): AlertsData {
  const today = new Date("2026-04-23");
  const notUpdated = projects.filter((p) => {
    if (!p.lastUpdated) return true;
    const diff =
      (today.getTime() - new Date(p.lastUpdated).getTime()) /
      (1000 * 60 * 60 * 24);
    return diff > 90 && p.status !== "منجز تام" && p.status !== "استلام نهائي";
  });
  const missingDocs = projects.filter((p) => p.hasMissingDocs);
  const pendingActionProjects = projects.filter((p) => p.pendingAction);
  return { notUpdated, missingDocs, pendingAction: pendingActionProjects };
}

export function getDashboardStats(): DashboardStats {
  const continuing = projects.filter((p) => p.status === "مستمر").length;
  const stopped = projects.filter(
    (p) => p.status === "متوقف" || p.status === "لم يباشر به",
  ).length;
  const inService = projects.filter((p) => p.status === "داخل للخدمة").length;
  const finalAccepted = projects.filter(
    (p) => p.status === "استلام نهائي",
  ).length;
  const financialSettlement = projects.filter(
    (p) => p.status === "تسوية مالية" || p.status === "متعلقات مالية",
  ).length;
  const pendingActionCount = projects.filter((p) => p.pendingAction).length;

  const totalCost = projects.reduce((sum, p) => sum + p.totalCost, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const totalRemaining = totalCost - totalSpent;

  return {
    totalProjects: projects.length,
    continuing,
    stopped,
    inService,
    finalAccepted,
    financialSettlement,
    pendingAction: pendingActionCount,
    totalCost,
    totalSpent,
    totalRemaining,
    recentUpdatesCount: 8,
    documentsCount: documents.length,
    alertsCount: notifications.filter((n) => !n.isRead).length,
  };
}

export function getReportData(): ReportData {
  const statusMap: Record<string, number> = {};
  const locationMap: Record<string, number> = {};
  const yearMap: Record<number, number> = {};

  for (const p of projects) {
    statusMap[p.status] = (statusMap[p.status] || 0) + 1;
    locationMap[p.location] = (locationMap[p.location] || 0) + 1;
    yearMap[p.year] = (yearMap[p.year] || 0) + 1;
  }

  const financialSummary: [string, number, number][] = projects
    .slice(0, 7)
    .map((p) => [
      p.name.length > 25 ? `${p.name.substring(0, 25)}...` : p.name,
      p.totalCost,
      p.spent,
    ]);

  return {
    projectsByStatus: Object.entries(statusMap) as [string, number][],
    projectsByLocation: Object.entries(locationMap) as [string, number][],
    projectsByYear: Object.entries(yearMap).map(([y, c]) => [Number(y), c]) as [
      number,
      number,
    ][],
    financialSummary,
  };
}
