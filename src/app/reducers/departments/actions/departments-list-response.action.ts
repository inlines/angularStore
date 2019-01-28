import { Action } from "@ngrx/store";
import { DepartmentsActionTypes } from "../departments.action-types";
import { DepartmentsGetPayload } from "src/app/models/department.model";
import { DepartmentsState } from "../departments.state";


export class DepartmentsListResponseAction implements Action {
  public readonly type = DepartmentsActionTypes.DEPARTMENTS_LIST_RESPONSE;

  constructor(
    public payload: DepartmentsGetPayload
  ) {}

  public reduce(this: void, state: DepartmentsState, action: DepartmentsListResponseAction): DepartmentsState {
    debugger;
    return {
      ...state,
      response: action.payload,
      inprogress: false
    }
  }
}