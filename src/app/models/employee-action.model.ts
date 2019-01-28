export interface EmployeeAction {
  id: string;
  timestamp: string;
  employeeId: number;
}

export interface EmployeeActionGetPayload {
  list: Array<EmployeeAction>;
  totalCount: number;
}

export interface EmployeeActionGetParams {
  offset: number;
  top: number;
}