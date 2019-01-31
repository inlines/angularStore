import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { MockLoggerService } from "../services/mock-logger.service";
import { MockRequestGuardService } from "../services/mock-request-guard.service";
import { MockResponseService, Intercept } from "../services/mock-response.service";
import { DepartmentsGetPayload } from "../models/department.model";
import { EmployeesMockData } from "../mock-data/employee-mock-data.service";


@Injectable()
export class EmployeeListInterceptor implements HttpInterceptor {
  private readonly endpoint = /^employees$/;

  constructor(
    private logger: MockLoggerService,
    private requestGuard: MockRequestGuardService,
    private response: MockResponseService,
    private mocks: EmployeesMockData
  ){}

  public intercept(request: HttpRequest<null>, next: HttpHandler): Intercept<DepartmentsGetPayload> {
    const isMatch = this.requestGuard.isMatch(request, this.endpoint);
    const isGet = this.requestGuard.isGet(request);

    //if(isMatch && isGet) {
      this.logger.register(request);
      const employeesList = this.mocks.getDepartments();
      return this.response.ok(employeesList);
    //}

    return next.handle(request);
  }
}