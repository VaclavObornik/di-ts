
/// <reference path="index.d.ts"/>

declare module "di-ts" {

  export var Injector: typeof di.Injector;
  export function Inject(classFunc: any): void;
  export function Provide(targetClassFunc: any): (classFunc: any) => void;
}