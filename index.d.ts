/// <reference path="di.d.ts" />
import * as di from 'di';
declare module diTS {
    var Injector: typeof di.Injector;
    function Inject(classFunc: any): void;
    function Provide(targetClassFunc: any): (classFunc: any) => void;
}
export = diTS;
