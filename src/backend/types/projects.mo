module {
  public type ProjectStatus = {
    #OnTrack;
    #Delayed;
    #Completed;
    #Pending;
  };

  public type Project = {
    id : Nat;
    name : Text;
    location : Text;
    status : ProjectStatus;
    progress : Nat; // 0–100
    totalCost : Float;
    spent : Float;
    startDate : Text;
    endDate : Text;
    projectType : Text;
    year : Nat;
  };

  public type Document = {
    id : Nat;
    projectId : Nat;
    folder : DocumentFolder;
    name : Text;
    docNumber : Text;
    date : Text;
    fileUrl : Text;
  };

  public type DocumentFolder = {
    #Study;
    #Contract;
    #Execution;
    #Correspondence;
  };

  public type Task = {
    id : Nat;
    projectId : Nat;
    name : Text;
    plannedStart : Text;
    plannedEnd : Text;
    actualStart : ?Text;
    actualEnd : ?Text;
    assignee : Text;
  };

  public type FinancialItem = {
    id : Nat;
    projectId : Nat;
    category : Text;
    allocated : Float;
    spent : Float;
  };

  public type ObstaclePriority = {
    #High;
    #Medium;
    #Low;
  };

  public type ObstacleStatus = {
    #Open;
    #InProgress;
    #Resolved;
  };

  public type Obstacle = {
    id : Nat;
    projectId : Nat;
    description : Text;
    priority : ObstaclePriority;
    status : ObstacleStatus;
  };

  public type DashboardStats = {
    totalProjects : Nat;
    onTrack : Nat;
    delayed : Nat;
    completed : Nat;
    pending : Nat;
    totalBudget : Float;
    totalSpent : Float;
  };

  public type ReportData = {
    projectsByStatus : [(Text, Nat)];
    projectsByLocation : [(Text, Nat)];
    projectsByYear : [(Nat, Nat)];
    financialSummary : [(Text, Float, Float)]; // (category, allocated, spent)
  };
};
