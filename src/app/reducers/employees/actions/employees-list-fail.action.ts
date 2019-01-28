import { Action } from "@ngrx/store";
import { FailPayload } from "src/app/models/fail.model";
import { EmployeesActionTypes } from "../employees.action-types";
import { EmployeesState } from "../employees.state";


export class EmployeeListFailAction implements Action {
  public readonly type = EmployeesActionTypes.EMPLOYEES_LIST_FAIL;

  constructor(
    public payload: FailPayload
  ) {}

  public reduce(this: void, state: EmployeesState): EmployeesState {
    return {
      ...state,
      inprogress: false
    };
  }
}