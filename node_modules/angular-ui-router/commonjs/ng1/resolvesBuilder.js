"use strict";
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
/**
 * This is a [[StateBuilder.builder]] function for angular1 `resolve:` block on a [[Ng1StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
 * handles the `resolve` property with logic specific to angular-ui-router (ng1).
 */
function ng1ResolveBuilder(state) {
    var resolve = {};
    common_1.forEach(state.resolve || {}, function (resolveFn, name) {
        resolve[name] = predicates_1.isString(resolveFn) ? [resolveFn, function (x) { return x; }] : resolveFn;
    });
    return resolve;
}
exports.ng1ResolveBuilder = ng1ResolveBuilder;
//# sourceMappingURL=resolvesBuilder.js.map