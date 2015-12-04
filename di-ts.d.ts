
/// <reference path="di.d.ts" />
/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts"/>

declare module "di-ts" {

  export var Injector: typeof di.Injector;

  export function Inject(classFunc: any): void;

  export function Provide(targetClassFunc: any): (classFunc: any) => void;

}
