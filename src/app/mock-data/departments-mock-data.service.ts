import { Injectable } from "@angular/core";
import { DepartmentsGetPayload, Department } from "../models/department.model";
import { DeepCopyService } from "../services/deep-copy.service";

@Injectable()
export class DepartmentsMockData {

  constructor(
    private deepCopyService: DeepCopyService
  ){}

  private departments: Array<Department> = Array.from({length:10}, (_, index) => {
    return {
      id: index,
      name: 'department#'+index,
      head: null
    }
  })

  public getDepartments(): DepartmentsGetPayload {
    return this.deepCopyService.copy({
      list: this.departments,
      totalCount: 0
    }) as DepartmentsGetPayload;
  }
}