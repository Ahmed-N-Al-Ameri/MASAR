import Types "types/projects";
import ProjectsApi "mixins/projects-api";

actor {
  public query func getProjects() : async [Types.Project] {
    ProjectsApi.getProjects();
  };

  public query func getProjectById(id : Nat) : async ?Types.Project {
    ProjectsApi.getProjectById(id);
  };

  public query func getDocuments(projectId : Nat) : async [Types.Document] {
    ProjectsApi.getDocuments(projectId);
  };

  public query func getProjectTasks(projectId : Nat) : async [Types.Task] {
    ProjectsApi.getProjectTasks(projectId);
  };

  public query func getFinancialItems(projectId : Nat) : async [Types.FinancialItem] {
    ProjectsApi.getFinancialItems(projectId);
  };

  public query func getObstacles(projectId : Nat) : async [Types.Obstacle] {
    ProjectsApi.getObstacles(projectId);
  };

  public query func getDashboardStats() : async Types.DashboardStats {
    ProjectsApi.getDashboardStats();
  };

  public query func getReportData() : async Types.ReportData {
    ProjectsApi.getReportData();
  };
};
