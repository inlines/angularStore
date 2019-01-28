import { Employee } from "./employee.model";

export interface Department {
  id: number,
  name: string,
  head: Employee | null;
}

export interface DepartmentsGetPayload {
  list: Array<Department>;
  totalCount: number;
}