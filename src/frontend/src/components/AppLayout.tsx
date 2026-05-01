import { getUnreadNotificationCount } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  AlertCircle,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  ChevronLeft,
  DollarSign,
  FileText,
  FolderOpen,
  Home,
  LogOut,
  PieChart,
  Search,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";

const LOGO_PATH = "/assets/logo.png";

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("");
}

interface NavItem {
  to?: string;
  label: string;
  icon: React.ReactNode;
  exact?: boolean;
  disabled?: boolean;
  ocid: string;
  subItems?: SubNavItem[];
}

interface SubNavItem {
  to?: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  ocid: string;
}

const navItems: NavItem[] = [
  {
    to: "/",
    label: "الصفحة الرئيسية",
    icon: <Home size={18} />,
    exact: true,
    ocid: "nav.home",
  },
  {
    to: "/advanced-search",
    label: "البحث المتقدم",
    icon: <Search size={18} />,
    ocid: "nav.advanced_search",
  },
  {
    to: "/project-files",
    label: "المشاريع الاستثمارية",
    icon: <FolderOpen size={18} />,
    ocid: "nav.project_files",
    subItems: [
      {
        to: "/projects",
        label: "المشاريع التشغيلية",
        icon: <Briefcase size={16} />,
        ocid: "nav.operational_projects",
      },
    ],
  },
  {
    disabled: true,
    label: "الوثائق والمراسلات",
    icon: <FileText size={18} />,
    ocid: "nav.docs",
  },
  {
    disabled: true,
    label: "البيانات المالية",
    icon: <DollarSign size={18} />,
    ocid: "nav.financial",
  },
  {
    to: "/reports",
    label: "التقارير",
    icon: <BarChart3 size={18} />,
    ocid: "nav.reports",
  },
  {
    disabled: true,
    label: "الإحصائيات",
    icon: <PieChart size={18} />,
    ocid: "nav.stats",
  },
  {
    disabled: true,
    label: "الجداول الزمنية",
    icon: <CalendarDays size={18} />,
    ocid: "nav.gantt",
  },
  {
    disabled: true,
    label: "لجان القسم",
    icon: <Users size={18} />,
    ocid: "nav.committees",
  },
  {
    disabled: true,
    label: "التحديثات والتنبيهات",
    icon: <AlertCircle size={18} />,
    ocid: "nav.alerts",
  },
  {
    disabled: true,
    label: "الإدارة والصلاحيات",
    icon: <Shield size={18} />,
    ocid: "nav.admin",
  },
];

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [username] = useState(
    () => localStorage.getItem("username") || "المستخدم",
  );
  const initials = getInitials(username);
  const unreadCount = getUnreadNotificationCount();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  }

  function handleSearchFocus() {
    void navigate({ to: "/advanced-search" });
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    void navigate({ to: "/advanced-search" });
  }

  function isActive(item: NavItem) {
    if (!item.to) return false;
    if (item.exact) return pathname === item.to;
    return pathname.startsWith(item.to);
  }

  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      {/* RTL Sidebar — fixed on the right */}
      <aside className="fixed right-0 top-0 h-screen w-64 bg-card border-l border-border flex flex-col z-30 shadow-elevated">
        {/* MASAR Logo Mark */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border bg-primary/5">
          <img
            src={LOGO_PATH}
            alt="شعار نظام مسار"
            className="h-12 w-auto object-contain flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-black text-primary leading-tight">
              نظام مسار
            </p>
            <p className="text-[10px] text-muted-foreground leading-tight font-medium tracking-wide">
              MASAR SYSTEM
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 px-2 overflow-y-auto">
          <p className="text-[10px] font-bold text-muted-foreground/60 px-2 mb-2 uppercase tracking-widest">
            القائمة الرئيسية
          </p>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const active = isActive(item);
              if (item.disabled) {
                return (
                  <li key={item.label}>
                    <div
                      className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-not-allowed opacity-45"
                      title="قريباً"
                      data-ocid={`${item.ocid}.link`}
                    >
                      <span className="flex-shrink-0 text-muted-foreground">
                        {item.icon}
                      </span>
                      <span className="truncate text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="mr-auto text-[9px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-medium">
                        قريباً
                      </span>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <Link
                    to={item.to!}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-smooth group",
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    data-ocid={`${item.ocid}.link`}
                  >
                    <span
                      className={cn(
                        "flex-shrink-0",
                        active
                          ? "text-primary-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                    {active && (
                      <ChevronLeft
                        size={13}
                        className="mr-auto text-primary-foreground/70 flex-shrink-0"
                      />
                    )}
                  </Link>
                  {/* Sub-items */}
                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="mt-0.5 space-y-0.5 pr-4 border-r-2 border-primary/20 mr-5">
                      {item.subItems.map((sub) => {
                        const subActive = sub.to
                          ? pathname.startsWith(sub.to)
                          : false;
                        if (sub.disabled) {
                          return (
                            <li key={sub.label}>
                              <div
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs cursor-not-allowed opacity-45 text-muted-foreground"
                                title="قريباً"
                                data-ocid={`${sub.ocid}.link`}
                              >
                                <span className="flex-shrink-0">
                                  {sub.icon}
                                </span>
                                <span className="truncate">{sub.label}</span>
                              </div>
                            </li>
                          );
                        }
                        return (
                          <li key={sub.to ?? sub.label}>
                            <Link
                              to={sub.to!}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth group",
                                subActive
                                  ? "bg-primary/15 text-primary font-semibold"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                              )}
                              data-ocid={`${sub.ocid}.link`}
                            >
                              <span
                                className={cn(
                                  "flex-shrink-0",
                                  subActive
                                    ? "text-primary"
                                    : "text-muted-foreground group-hover:text-foreground",
                                )}
                              >
                                {sub.icon}
                              </span>
                              <span className="truncate">{sub.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User footer in sidebar */}
        <div className="border-t border-border p-3 bg-muted/20">
          <p className="text-[9px] font-semibold text-muted-foreground/70 truncate mb-2 leading-tight">
            قسم الدراسات والتخطيط والمتابعة
            <br />
            شعبة برمجة وجدولة المشاريع
          </p>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-xs font-bold text-primary-foreground">
                {initials}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-foreground truncate">
                {username}
              </p>
              <p className="text-[10px] text-muted-foreground truncate">
                شعبة برمجة وجدولة المشاريع
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-smooth"
            data-ocid="nav.logout.button"
          >
            <LogOut size={13} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 mr-64 flex flex-col min-h-screen">
        {/* Top Header — full width, fixed */}
        <header className="sticky top-0 z-20 bg-card border-b border-border shadow-card">
          <div className="flex items-center gap-4 px-6 py-3">
            {/* Right side: company + system branding */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="hidden lg:block text-right">
                <p className="text-sm font-black text-primary leading-tight">
                  نظام مسار (MASAR)
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  شركة خطوط الأنابيب النفطية — OPC
                </p>
                <p className="text-[9px] text-muted-foreground/70 leading-tight">
                  قسم الدراسات والتخطيط والمتابعة
                </p>
              </div>
              {/* System logo — placed to the right of the text in RTL */}
              <div className="h-10 w-auto flex-shrink-0 overflow-hidden">
                <img
                  src={LOGO_PATH}
                  alt="شعار نظام مسار"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            {/* Center: quick search */}
            <div className="flex-1 max-w-xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search
                  size={15}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  placeholder="بحث سريع في المشاريع والوثائق..."
                  className="w-full bg-background border border-input rounded-lg pr-9 pl-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth"
                  data-ocid="header.search_input"
                />
              </form>
            </div>

            {/* Left side: notifications + user info + logout */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Bell notification */}
              <button
                type="button"
                className="relative p-2 rounded-lg hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
                aria-label="الإشعارات"
                data-ocid="header.notifications.button"
              >
                <Bell size={18} />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white leading-none">
                      {unreadCount}
                    </span>
                  </span>
                )}
              </button>

              {/* Divider */}
              <div className="w-px h-6 bg-border" />

              {/* User info */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-[11px] font-bold text-primary-foreground">
                    {initials}
                  </span>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {username}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    شعبة برمجة وجدولة المشاريع
                  </p>
                </div>
              </div>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-smooth border border-destructive/20"
                data-ocid="header.logout.button"
                aria-label="تسجيل الخروج"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">خروج</span>
              </button>
            </div>
          </div>

          {/* Page title sub-bar */}
          <div className="px-6 py-2 bg-muted/30 border-t border-border/50 flex items-center justify-between">
            <h1 className="text-sm font-bold text-foreground">
              {pageTitle || "الصفحة الرئيسية"}
            </h1>
            <span className="text-[11px] text-muted-foreground">
              {new Date().toLocaleDateString("ar-SA", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-background">{children}</main>

        {/* Footer */}
        <footer className="bg-muted/40 border-t border-border px-6 py-3 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
