
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

}

declare module "di" {
  export = di;
}
