import { Injectable } from "@angular/core";
import { RequestMethod } from "../models/fail.model";
import { HttpRequest } from "@angular/common/http";


@Injectable()
export class MockRequestGuardService {

  private methods = Object.freeze(RequestMethod);

  public isMatch<T = any>(request: HttpRequest<T>, endpoint: RegExp): boolean {
    return !!request.url.match(endpoint);
  }

  public isGet<T = any>(request: HttpRequest<T>): boolean {
    return request.method === this.methods.GET;
  }

  public isPost<T = any>(request: HttpRequest<T>): boolean {
    return request.method === this.methods.POST;
  }

  public isPut<T = any>(request: HttpRequest<T>): boolean {
    return request.method === this.methods.PUT;
  }

  public isDelete<T = any>(request: HttpRequest<T>): boolean {
    return request.method === this.methods.DELETE;
  }
}