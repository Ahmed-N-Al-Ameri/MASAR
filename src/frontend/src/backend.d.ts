import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ReportData {
    projectsByStatus: Array<[string, bigint]>;
    projectsByYear: Array<[bigint, bigint]>;
    financialSummary: Array<[string, number, number]>;
    projectsByLocation: Array<[string, bigint]>;
}
export interface Obstacle {
    id: bigint;
    status: ObstacleStatus;
    description: string;
    projectId: bigint;
    priority: ObstaclePriority;
}
export interface FinancialItem {
    id: bigint;
    allocated: number;
    spent: number;
    projectId: bigint;
    category: string;
}
export interface Task {
    id: bigint;
    plannedEnd: string;
    assignee: string;
    name: string;
    projectId: bigint;
    plannedStart: string;
    actualEnd?: string;
    actualStart?: string;
}
export interface Document {
    id: bigint;
    docNumber: string;
    date: string;
    name: string;
    projectId: bigint;
    folder: DocumentFolder;
    fileUrl: string;
}
export interface Project {
    id: bigint;
    status: ProjectStatus;
    endDate: string;
    projectType: string;
    name: string;
    year: bigint;
    totalCost: number;
    spent: number;
    progress: bigint;
    location: string;
    startDate: string;
}
export interface DashboardStats {
    delayed: bigint;
    pending: bigint;
    completed: bigint;
    totalProjects: bigint;
    totalSpent: number;
    totalBudget: number;
    onTrack: bigint;
}
export enum DocumentFolder {
    Contract = "Contract",
    Study = "Study",
    Execution = "Execution",
    Correspondence = "Correspondence"
}
export enum ObstaclePriority {
    Low = "Low",
    High = "High",
    Medium = "Medium"
}
export enum ObstacleStatus {
    Open = "Open",
    InProgress = "InProgress",
    Resolved = "Resolved"
}
export enum ProjectStatus {
    OnTrack = "OnTrack",
    Delayed = "Delayed",
    Completed = "Completed",
    Pending = "Pending"
}
export interface backendInterface {
    getDashboardStats(): Promise<DashboardStats>;
    getDocuments(projectId: bigint): Promise<Array<Document>>;
    getFinancialItems(projectId: bigint): Promise<Array<FinancialItem>>;
    getObstacles(projectId: bigint): Promise<Array<Obstacle>>;
    getProjectById(id: bigint): Promise<Project | null>;
    getProjectTasks(projectId: bigint): Promise<Array<Task>>;
    getProjects(): Promise<Array<Project>>;
    getReportData(): Promise<ReportData>;
}
