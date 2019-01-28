export interface Employee {
  id: number;
  name: string;
  departmentId: number;
  salary: number;
}

export interface EmployeesGetPayload {
  list: Array<Employee>;
  totalCount: number;
}

export interface EmployeesGetParams {
  id?: number | null,
  name?: string | null,
  departmentId?: number | null;
  salary?: number | null;
}