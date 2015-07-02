
/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts"/>
/// <reference path="./di.d.ts"/>

import 'reflect-metadata';
import * as di from 'di'

export var Injector = di.Injector;

function factory(data: Array<any>) : di.Inject {
  function F() : void {
    di.Inject.apply(this, data);
  }
  F.prototype = di.Inject.prototype;
  return new F();
}

export function Inject(classFunc: any) {
  const dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
  di.annotate(classFunc, factory(dependencies));
}

export function Provide(targetClassFunc: any) {
  return function (classFunc: any) {
    di.annotate(classFunc, new di.Provide(targetClassFunc));
  };
}


