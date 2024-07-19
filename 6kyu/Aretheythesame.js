"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = comp;
function comp(a1, a2) {
    if (a2 !== null) {
        var check = a1 === null || a1 === void 0 ? void 0 : a1.every(function (item) { return a2.includes(item * item); });
        if (check) {
            return true;
        }
    }
    return false;
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
