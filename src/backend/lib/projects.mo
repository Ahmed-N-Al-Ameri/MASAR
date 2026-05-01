import Types "../types/projects";
import Runtime "mo:core/Runtime";

module {
  public func getAllProjects() : [Types.Project] {
    Runtime.trap("not implemented");
  };

  public func getProjectById(projects : [Types.Project], id : Nat) : ?Types.Project {
    Runtime.trap("not implemented");
  };

  public func getDocumentsForProject(documents : [Types.Document], projectId : Nat) : [Types.Document] {
    Runtime.trap("not implemented");
  };

  public func getTasksForProject(tasks : [Types.Task], projectId : Nat) : [Types.Task] {
    Runtime.trap("not implemented");
  };

  public func getFinancialItemsForProject(items : [Types.FinancialItem], projectId : Nat) : [Types.FinancialItem] {
    Runtime.trap("not implemented");
  };

  public func getObstaclesForProject(obstacles : [Types.Obstacle], projectId : Nat) : [Types.Obstacle] {
    Runtime.trap("not implemented");
  };

  public func computeDashboardStats(projects : [Types.Project]) : Types.DashboardStats {
    Runtime.trap("not implemented");
  };

  public func computeReportData(
    projects : [Types.Project],
    financialItems : [Types.FinancialItem],
  ) : Types.ReportData {
    Runtime.trap("not implemented");
  };
};
