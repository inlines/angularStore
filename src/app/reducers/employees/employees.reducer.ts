import { EmployeesState } from "./employees.state";
import { EmployeesListRequestAction } from "./actions/employees-list-request.action";
import { EmployeesListResponseAction } from "./actions/employees-list-response.action";
import { EmployeeListFailAction } from "./actions/employees-list-fail.action";
import { EmployeesActionTypes } from "./employees.action-types";


const defaultState: EmployeesState = {
  inprogress: false,
  response: {
    list: [],
    totalCount: 0
  }
};

type EmployeesAction = (
  EmployeesListRequestAction |
  EmployeesListResponseAction |
  EmployeeListFailAction
);

export function employeesReducer(this: void, state = defaultState, action: EmployeesAction): EmployeesState{
  switch (action.type) {
    case EmployeesActionTypes.EMPLOYEES_LIST_FAIL: return action.reduce(state);
    case EmployeesActionTypes.EMPLOYEES_LIST_REQUEST: return action.reduce(state);
    case EmployeesActionTypes.EMPLOYEES_LIST_RESPONSE: return action.reduce(state, action);
    default: return {...state};
  }
}