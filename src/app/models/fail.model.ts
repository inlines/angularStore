import {HttpErrorResponse} from '@angular/common/http'


export interface FailPayload {
  error: HttpErrorResponse;
  method: RequestMethod
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}