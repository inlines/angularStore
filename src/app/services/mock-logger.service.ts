import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class MockLoggerService {
  private registerRequestUrlWIthBody<T = any>(request: HttpRequest<T>): void {
    console.log(`${request.method} \n\n ${request.urlWithParams} \n\n ${JSON.stringify(request.body, null, 2)}`);
  }

  private registerRequestUrl(request: HttpRequest<null>): void {
    console.log(`${request.method} \n\n ${request.urlWithParams}`);
  }

  public register<T = any>(request: HttpRequest<T>): void {
    if(request.body) {
      this.registerRequestUrlWIthBody<T>(request);
    } else {
      this.registerRequestUrl(request as HttpRequest<null>);
    }
  }
}