import { Action } from "@ngrx/store";
import { EmployeesActionTypes } from "../employees.action-types";
import { EmployeesState } from "../employees.state";
import { EmployeeActionGetParams } from "src/app/models/employee-action.model";


export class EmployeesListRequestAction implements Action {
  public readonly type = EmployeesActionTypes.EMPLOYEES_LIST_REQUEST;

  public constructor(
      public payload: EmployeeActionGetParams
    ) {}

  public reduce(this: void, state: EmployeesState): EmployeesState {
    return {
      ...state,
      inprogress: true,
    }
  }
}