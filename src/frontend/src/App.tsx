import { AppLayout } from "@/components/AppLayout";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ProjectProfilePage = lazy(() => import("@/pages/ProjectProfilePage"));
const ArchivePage = lazy(() => import("@/pages/ArchivePage"));
const ReportsPage = lazy(() => import("@/pages/ReportsPage"));
const FinancialPage = lazy(() => import("@/pages/FinancialPage"));
const GanttPage = lazy(() => import("@/pages/GanttPage"));
const AdvancedSearchPage = lazy(() => import("@/pages/AdvancedSearchPage"));
const ProjectFilesPage = lazy(() => import("@/pages/ProjectFilesPage"));

// Auth guard helper
function requireAuth() {
  if (!localStorage.getItem("isLoggedIn")) {
    throw redirect({ to: "/login" });
  }
}

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">
              جاري التحميل...
            </span>
          </div>
        </div>
      }
    >
      <Outlet />
    </Suspense>
  ),
});

// Login route
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <LoginPage />,
});

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="الصفحة الرئيسية">
      <DashboardPage />
    </AppLayout>
  ),
});

// Projects list route
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="ملفات المشاريع">
      <ProjectsPage />
    </AppLayout>
  ),
});

// Project profile route
const projectProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="ملف المشروع">
      <ProjectProfilePage />
    </AppLayout>
  ),
});

// Project archive route
const projectArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id/archive",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="الأرشيف والوثائق">
      <ArchivePage />
    </AppLayout>
  ),
});

// Project gantt route
const projectGanttRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id/gantt",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="المخطط الزمني">
      <GanttPage />
    </AppLayout>
  ),
});

// Project financial route
const projectFinancialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id/financial",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="البيانات المالية والتنفيذية">
      <FinancialPage />
    </AppLayout>
  ),
});

// Reports route
const reportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reports",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="التقارير والإحصائيات">
      <ReportsPage />
    </AppLayout>
  ),
});

// Advanced search route
const advancedSearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/advanced-search",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="البحث المتقدم">
      <AdvancedSearchPage />
    </AppLayout>
  ),
});

// Project files route
const projectFilesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project-files",
  beforeLoad: requireAuth,
  component: () => (
    <AppLayout pageTitle="ملفات المشاريع">
      <ProjectFilesPage />
    </AppLayout>
  ),
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  projectsRoute,
  projectProfileRoute,
  projectArchiveRoute,
  projectGanttRoute,
  projectFinancialRoute,
  reportsRoute,
  advancedSearchRoute,
  projectFilesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
