
declare module di {

  interface IClassInterface<T> {
    new (...params: any[]): T;
  }

  export class Injector {
    constructor();
    constructor(locals: any[]);
    constructor(locals: any[], parent: Injector);
    //can anybody solve this?? :)
    //get<T, U extends IClassInterface<any>>(classFunc: U): T; //todo IClassInterface<T>
    get(classFunc: any): any; //todo IClassInterface<T>
  }

}

declare module "di" {
  export = di;
}
