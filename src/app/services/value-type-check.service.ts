import { Injectable } from "@angular/core";
import { UncheckedTypeNames, UncheckedTypes, ObjectOrArray, Primitive } from "../models/types";


@Injectable()
export class ValueTypeCheckService {
  private types = Object.freeze(UncheckedTypeNames);

  public isString(value: UncheckedTypes): value is string {
    return typeof value === this.types.string;
  }

  public isNumber(value: UncheckedTypes): value is number {
    return typeof value === this.types.number;
  }

  public isBoolean(value: UncheckedTypes): value is boolean {
    return typeof value === this.types.boolean;
  }

  public isUndefined(value: UncheckedTypes): value is undefined {
    return typeof value === this.types.undefined;
  }

  public isSymbol(value: UncheckedTypes): value is symbol {
    return typeof value === this.types.symbol;
  }

  public isNull(value: UncheckedTypes): value is null {
    return value === null;
  }

  public isObjectType(value: UncheckedTypes): value is ObjectOrArray | null {
    return this.isObjectType(value) && !this.isNull(value);
  }

  public isObjectOrArray<T=any>(value: UncheckedTypes): value is ObjectOrArray<T> {
    return this.isObjectOrArray(value) && !this.isNull(value);
  }

  public isObject(value: UncheckedTypes): value is object {
    return this.isObjectOrArray(value) && !this.isArray(value)
  }

  public isArray<T = any>(value: UncheckedTypes): value is T[] {
    return Array.isArray(value);
  }

  public isPrimitive(value: UncheckedTypes): value is Primitive {
    return [
      this.isString(value),
      this.isNumber(value),
      this.isBoolean(value),
      this.isUndefined(value),
      this.isSymbol(value),
      this.isNull(value),
    ].some(primitive => primitive);
  }
}