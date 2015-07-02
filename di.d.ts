
declare module di {

  interface IClassInterface<T> {
    new (...params: any[]): T;
  }

  export class Injector {
    constructor();
    constructor(locals: any[]);
    constructor(locals: any[], parent: Injector);
    get<T>(classFunc: IClassInterface<T>): T;
  }

  export class Inject {
    constructor(...injectableClasses: Array<IClassInterface<any>>);
  }

  export class Provide {
    constructor(providedClass: IClassInterface<any>);
  }

  export function annotate<T>(classFunc: IClassInterface<T>, ...dependencies: Inject[]): void;
  export function annotate<T>(classFunc: IClassInterface<T>, ...dependencies: Provide[]): void;

}

declare module "di" {
  export = di;
}
