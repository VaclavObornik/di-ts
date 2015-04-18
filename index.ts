
/// <reference path="./di.d.ts"/>

import 'reflect-metadata';
import * as di from 'di'

declare var Reflect: any;

export var Injector = di.Injector;

export function Inject(classFunc: any) {
  const dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
  (<any>di).annotate.apply(di, [classFunc].concat(dependencies.map((dep: any) => new (<any>di).Inject(dep))));
}

export function Provide(targetClassFunc: any) {
  return function (classFunc: any) {
    (<any>di).annotate(classFunc, new (<any>di).Provide(targetClassFunc));
  };
}

