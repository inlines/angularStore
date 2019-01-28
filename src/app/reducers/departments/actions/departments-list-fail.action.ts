import { Action } from "@ngrx/store";
import { DepartmentsActionTypes } from "../departments.action-types";
import { FailPayload } from "src/app/models/fail.model";
import { DepartmentsState } from "../departments.state";


export class DepartmentsListFailAction implements Action {
  public readonly type = DepartmentsActionTypes.DEPARTMENTS_LIST_FAIL;

  constructor(
    public payload: FailPayload
  ) {}

  public reduce(this: void, state: DepartmentsState): DepartmentsState {
    return {
      ...state,
      inprogress: false
    };
  }
}