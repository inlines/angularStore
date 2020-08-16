import { Injectable } from "@angular/core";
import { DepartmentsGetPayload } from "../models/department.model";
import { Employee, EmployeesGetPayload } from "../models/employee.model";

@Injectable()
export class EmployeesMockData {

  constructor(
    //private deepCopyService: DeepCopyService
  ){}

  private employees: Array<Employee> = Array.from({length:10}, (_, index) => {
    return {
      id: index,
      name: 'Employee#'+index,
      departmentId: 11,
      salary: 500
    }
  })

  public getEmployees(): EmployeesGetPayload {
    return {
      list: JSON.parse(JSON.stringify(this.employees)),
      totalCount: 10
    } as EmployeesGetPayload;
  }
}