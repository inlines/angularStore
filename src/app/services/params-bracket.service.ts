import { Injectable } from "@angular/core";
import { FormKeyService } from "./fom-key.service";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class ParamsBracketService extends FormKeyService {
  buildFrom<T extends Object>(request: T): HttpParams {
    const params = Object.keys(request)
    .filter(key => this.filterKey(key, request))
    .reduce<HttpParams>((acc, key) => {
      const val = request[key];
      if(Array.isArray(val)) {
        return val.reduce<HttpParams>((sub, item) => {
          return sub.append(`${key}[]`, item);
        }, acc);
      } else if (typeof val === 'object') {
          return Object.keys(val).reduce((sub, key1) => {
            return sub.append(`${key}[${key1}]`, val[key1]);
          }, acc);
        } else {
          return acc.append(key, val);
        }
      }, new HttpParams (
        {
          encoder: {
            encodeKey: (k: string): string => k,
            encodeValue: (v: string): string => v,
            decodeKey: (k: string): string => k,
            decodeValue: (v: string): string => v,
          }
        }
      ));
      return params;
    }
  }


