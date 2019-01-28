import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { ResponseData } from "../models/response-data.model";
import { RequestMethod } from "../models/fail.model";
import { EmployeesListRequestAction } from "../reducers/employees/actions/employees-list-request.action";
import { EmployeesActionTypes } from "../reducers/employees/employees.action-types";
import { EmployeesGetPayload } from "../models/employee.model";
import { EmployeesListResponseAction } from "../reducers/employees/actions/employees-list-response.action";
import { EmployeeListFailAction } from "../reducers/employees/actions/employees-list-fail.action";
import { HttpParamsService } from "../services/http-params.service";


@Injectable()
export class EmployeesEffects {
  @Effect()
  public requestEmployeesEffect = this.actions
    .pipe(
      ofType<EmployeesListRequestAction>(EmployeesActionTypes.EMPLOYEES_LIST_REQUEST),
      map(action => {
        const endpoint = 'employees';
        const params = this.httpParams.buildParamsEncodeStrings(action.payload);
        return this.http.get<ResponseData<EmployeesGetPayload>>(endpoint, {params})
          .pipe(
            map(response => new EmployeesListResponseAction(response.payload)),
            catchError((error: HttpErrorResponse) => {
              return of(new EmployeeListFailAction({
                method: RequestMethod.GET,
                error
              }))
            })
          )
      })
    );

  constructor(
    private actions: Actions,
    private http: HttpClient,
    private store: Store<AppState>,
    private httpParams: HttpParamsService
  ) {}
}