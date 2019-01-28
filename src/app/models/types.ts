export type Primitive = string | number | boolean | undefined | symbol | null;
export type ObjectOrArray<T = any> = object | T[];
export type UncheckedTypes = Primitive | ObjectOrArray;
export enum UncheckedTypeNames {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  undefined = 'undefined',
  symbol = 'symbol',
  object = 'object'
}