/// <reference path="di.d.ts" />
import * as di from 'di';
export declare var Injector: typeof di.Injector;
export declare function Inject(classFunc: any): void;
export declare function Provide(targetClassFunc: any): (classFunc: any) => void;
