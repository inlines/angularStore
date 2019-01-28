import { Injectable } from "@angular/core";
import { ValueTypeCheckService } from "./value-type-check.service";
import { UncheckedTypes } from "../models/types";
import { CompileStylesheetMetadata } from "@angular/compiler";


@Injectable()
export class DeepCopyService {

  constructor(
    private typeCheck: ValueTypeCheckService
  ) {}

  public copy(data) {
    if(this.typeCheck.isPrimitive(data)) {
      return data;
    } else {
      const initial = this.typeCheck.isObject(data) ? {} : [];

      return Object.keys(data).reduce((copy, key) => {
        const value = data[key];

        if(this.typeCheck.isPrimitive(value)) {
          copy[key] = value;
        }

        if(this.typeCheck.isObject(value)) {
          copy[key] = this.copy(value);
        }

        if(this.typeCheck.isArray(value)) {
          copy[key] = Object.values(this.copy(value));
        }

        return copy;
      }, initial)
    }
  }
}