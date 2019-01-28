import { DepartmentsState } from "./departments.state";
import { DepartmentsListResponseAction } from "./actions/departments-list-response.action";
import { DepartmentsListRequestAction } from "./actions/departments-list-request.action";
import { DepartmentsListFailAction } from "./actions/departments-list-fail.action";
import { DepartmentsActionTypes } from "./departments.action-types";


const defaultState: DepartmentsState = {
  inprogress: false,
  response: {
    list: [],
    totalCount: 0
  }
};

type DepartmentsAction = (
  DepartmentsListResponseAction |
  DepartmentsListRequestAction |
  DepartmentsListFailAction
);

export function departmentsReducer(this: void, state = defaultState, action: DepartmentsAction): DepartmentsState {
  switch (action.type) {
    case DepartmentsActionTypes.DEPARTMENTS_LIST_FAIL: return action.reduce(state);
    case DepartmentsActionTypes.DEPARTMENTS_LIST_REQUEST: return action.reduce(state);
    case DepartmentsActionTypes.DEPARTMENTS_LIST_RESPONSE: return action.reduce(state, action);
    default: return {...state};
  }
}