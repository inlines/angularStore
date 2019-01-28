import { Action } from "@ngrx/store";
import { EmployeesActionTypes } from "../employees.action-types";
import { EmployeesGetPayload } from "src/app/models/employee.model";
import { EmployeesState } from "../employees.state";



export class EmployeesListResponseAction implements Action {
  public readonly type = EmployeesActionTypes.EMPLOYEES_LIST_RESPONSE;

  constructor(
    public payload: EmployeesGetPayload
  ) {}

  public reduce(this: void, state: EmployeesState, action: EmployeesListResponseAction): EmployeesState {
    return {
      ...state,
      response: action.payload,
      inprogress: false
    }
  }
}