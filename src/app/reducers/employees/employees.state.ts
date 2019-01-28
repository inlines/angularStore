import { EmployeesGetPayload } from "src/app/models/employee.model";


export interface EmployeesState {
  inprogress: boolean;
  response: EmployeesGetPayload;
}