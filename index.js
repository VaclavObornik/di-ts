/// <reference path="./di.d.ts"/>
require('reflect-metadata');
var di = require('di');
exports.Injector = di.Injector;
function Inject(classFunc) {
    var dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
    di.annotate.apply(di, [classFunc].concat(dependencies.map(function (dep) { return new di.Inject(dep); })));
}
exports.Inject = Inject;
function Provide(targetClassFunc) {
    return function (classFunc) {
        di.annotate(classFunc, new di.Provide(targetClassFunc));
    };
}
exports.Provide = Provide;
//# sourceMappingURL=index.js.map