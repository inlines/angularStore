import { Injectable } from "@angular/core";
import { DepartmentsGetPayload, Department } from "../models/department.model";
import { DeepCopyService } from "../services/deep-copy.service";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeesMockData {

  constructor(
    private deepCopyService: DeepCopyService
  ){}

  private employees: Array<Employee> = Array.from({length:10}, (_, index) => {
    return {
      id: index,
      name: 'Employee#'+index,
      departmentId: 11,
      salary: 500
    }
  })

  public getDepartments(): DepartmentsGetPayload {
    return this.deepCopyService.copy({
      list: this.employees,
      totalCount: 0
    }) as DepartmentsGetPayload;
  }
}