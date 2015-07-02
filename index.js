/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts"/>
/// <reference path="./di.d.ts"/>
require('reflect-metadata');
var di = require('di');
exports.Injector = di.Injector;
function factory(data) {
    function F() {
        di.Inject.apply(this, data);
    }
    F.prototype = di.Inject.prototype;
    return new F();
}
function Inject(classFunc) {
    var dependencies = Reflect.getMetadata("design:paramtypes", classFunc) || [];
    di.annotate(classFunc, factory(dependencies));
}
exports.Inject = Inject;
function Provide(targetClassFunc) {
    return function (classFunc) {
        di.annotate(classFunc, new di.Provide(targetClassFunc));
    };
}
exports.Provide = Provide;
//# sourceMappingURL=index.js.map