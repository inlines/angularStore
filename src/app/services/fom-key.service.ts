import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class FormKeyService {
  buildFrom<T extends Object>(request: T): HttpParams {
    const params = Object.keys(request)
    .filter(key => this.filterKey(key, request))
    .reduce<HttpParams>((acc,key) => acc.append(key, request[key]), new HttpParams())
    return params;
  }

  filterKey<T extends Object>(key: string, request: T): boolean {
    const value = request[key];
    return value !==  null && value !== undefined && !Number.isNaN(value) ;
  }
} 