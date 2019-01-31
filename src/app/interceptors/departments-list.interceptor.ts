import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { MockLoggerService } from "../services/mock-logger.service";
import { MockRequestGuardService } from "../services/mock-request-guard.service";
import { MockResponseService, Intercept } from "../services/mock-response.service";
import { DepartmentsMockData } from "../mock-data/departments-mock-data.service";
import { DepartmentsGetPayload } from "../models/department.model";


@Injectable()
export class DepartmentsListInterceptor implements HttpInterceptor {
  private readonly endpoint = /^departments$/;

  constructor(
    private logger: MockLoggerService,
    private requestGuard: MockRequestGuardService,
    private response: MockResponseService,
    private mocks: DepartmentsMockData
  ){}

  public intercept(request: HttpRequest<null>, next: HttpHandler): Intercept<DepartmentsGetPayload> {
    console.log('departments interceptor!');
    const isMatch = this.requestGuard.isMatch(request, this.endpoint);
    const isGet = this.requestGuard.isGet(request);
    debugger;
    if(isMatch && isGet) {
      this.logger.register(request);
      const departmentsList = this.mocks.getDepartments();
      return this.response.ok(departmentsList);
    }

    return next.handle(request);
  }
}