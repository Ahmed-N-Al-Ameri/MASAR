import Types "../types/projects";
import ProjectLib "../lib/projects";
import Runtime "mo:core/Runtime";

module {
  public func getProjects() : [Types.Project] {
    Runtime.trap("not implemented");
  };

  public func getProjectById(id : Nat) : ?Types.Project {
    Runtime.trap("not implemented");
  };

  public func getDocuments(projectId : Nat) : [Types.Document] {
    Runtime.trap("not implemented");
  };

  public func getProjectTasks(projectId : Nat) : [Types.Task] {
    Runtime.trap("not implemented");
  };

  public func getFinancialItems(projectId : Nat) : [Types.FinancialItem] {
    Runtime.trap("not implemented");
  };

  public func getObstacles(projectId : Nat) : [Types.Obstacle] {
    Runtime.trap("not implemented");
  };

  public func getDashboardStats() : Types.DashboardStats {
    Runtime.trap("not implemented");
  };

  public func getReportData() : Types.ReportData {
    Runtime.trap("not implemented");
  };
};
