/// <reference path="./di.d.ts"/>
require('reflect-metadata');
var di = require('di');
var diTS;
(function (diTS) {
    diTS.Injector = di.Injector;
    function Inject(classFunc) {
        var dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
        di.annotate.apply(di, [classFunc].concat(dependencies.map(function (dep) { return new di.Inject(dep); })));
    }
    diTS.Inject = Inject;
    function Provide(targetClassFunc) {
        return function (classFunc) {
            di.annotate(classFunc, new di.Provide(targetClassFunc));
        };
    }
    diTS.Provide = Provide;
})(diTS || (diTS = {}));
module.exports = diTS;
//# sourceMappingURL=index.js.map