
/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts"/>
/// <reference path="./di.d.ts"/>

import 'reflect-metadata';
import * as di from 'di'


export var Injector = di.Injector;

export function Inject(classFunc: any) {
  const dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
  var annotateArgs = [classFunc].concat(dependencies.map((dep: any) => new di.Inject(dep)));
  di.annotate.apply(di, annotateArgs);
}

export function Provide(targetClassFunc: any) {
  return function (classFunc: any) {
    di.annotate(classFunc, new di.Provide(targetClassFunc));
  };
}


