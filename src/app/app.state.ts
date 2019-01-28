import { DepartmentsState } from "./reducers/departments/departments.state";
import { EmployeesState } from "./reducers/employees/employees.state";


export interface AppState {
  departments: DepartmentsState;
  employees: EmployeesState;
};
