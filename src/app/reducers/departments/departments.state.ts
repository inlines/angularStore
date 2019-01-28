import { DepartmentsGetPayload } from "src/app/models/department.model";


export interface DepartmentsState {
  inprogress: boolean;
  response: DepartmentsGetPayload;
}