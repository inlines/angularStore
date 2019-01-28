import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { of } from 'rxjs';
import { map, catchError, } from 'rxjs/operators';
import { DepartmentsListRequestAction } from "../reducers/departments/actions/departments-list-request.action";
import { DepartmentsActionTypes } from "../reducers/departments/departments.action-types";
import { DepartmentsGetPayload } from "../models/department.model";
import { ResponseData } from "../models/response-data.model";
import { DepartmentsListResponseAction } from "../reducers/departments/actions/departments-list-response.action";
import { DepartmentsListFailAction } from "../reducers/departments/actions/departments-list-fail.action";
import { RequestMethod } from "../models/fail.model";


@Injectable()
export class DepartmentsEffects {
  @Effect()
  public requestDepartmentsEffect = this.actions
    .pipe(
      ofType<DepartmentsListRequestAction>(DepartmentsActionTypes.DEPARTMENTS_LIST_REQUEST),
      map(action => {
        console.log('****');
        debugger;
        const endpoint = 'departments';
        return this.http.get<ResponseData<DepartmentsGetPayload>>(endpoint)
          .pipe(
            map(response => new DepartmentsListResponseAction(response.payload)),
            catchError((error: HttpErrorResponse) => {
              console.log('JOPA!');
              return of(new DepartmentsListFailAction({
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
    private store: Store<AppState>
  ) {}
}