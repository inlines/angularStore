import { Injectable } from "@angular/core";
import { PayloadType, ResponseData } from "../models/response-data.model";
import { throwError, Observable, of } from "rxjs";
import { HttpErrorResponse, HttpEvent, HttpResponse } from "@angular/common/http";
import { delay } from "rxjs/operators";


export type Intercept<T> = Observable<HttpEvent<ResponseData<T | HttpErrorResponse>>>;

@Injectable()
export class MockResponseService {

  private type = Object.freeze(PayloadType);

  public error(url: string): Observable<never> {
    return throwError(new HttpErrorResponse({
      url,
      status: 500,
      statusText: 'Internal Server Error'
    }));
  }

  public ok<T = any>(data: T, responseDelay = 500): Intercept<T> {
    return of(new HttpResponse({
      body: {
        type: this.type.SUCCESS,
        payload: data,
      },
    }))
    .pipe(
      delay(responseDelay)
    )
  }
}