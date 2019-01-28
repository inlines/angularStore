import { Action } from "@ngrx/store";
import { DepartmentsActionTypes } from "../departments.action-types";
import { DepartmentsState } from "../departments.state";


export class DepartmentsListRequestAction implements Action {
  public readonly type = DepartmentsActionTypes.DEPARTMENTS_LIST_REQUEST;

  public reduce(this: void, state: DepartmentsState): DepartmentsState {
    return {
      ...state,
      inprogress: true,
    }
  }
}