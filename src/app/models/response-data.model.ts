export enum PayloadType {
  SUCCESS = 1,
  ERROR = 2,
  EXCEPTION = 3
}

export interface ResponseData<P> {
  type: PayloadType;
  payload: P;
}