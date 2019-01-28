import { RequestMethod } from "../models/fail.model";
import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { FormKeyService } from "./fom-key.service";
import { ParamsBracketService } from "./params-bracket.service";


@Injectable()
export class HttpParamsService {
  public methods = Object.freeze(RequestMethod);

  constructor(
    private formKeyService: FormKeyService,
    private paramsBracketService: ParamsBracketService
  ){}

  public buildParamsFrom<T extends object>(request: T): HttpParams {
    return this.formKeyService.buildFrom(request);
  }

  public buildParamsEncodeStrings<T extends Object>(request: T): HttpParams {
    const params = Object.keys(request)
    .reduce((acc, key) => {
      const val = request[key];
      acc[key] = typeof val === 'string' ? encodeURIComponent(val) : val;
      return acc;
    }, {});
    return this.paramsBracketService.buildFrom(params);
  }
}