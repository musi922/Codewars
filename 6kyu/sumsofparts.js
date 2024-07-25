"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partsSums = partsSums;
function partsSums(ls) {
    var arr = [];
    var sum = ls.reduce(function (a, b) { return (a + b); }, 0);
    arr.push(sum);
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var num = ls_1[_i];
        sum -= num;
        arr.push(sum);
    }
    return arr;
}
console.log(partsSums([0, 1, 3, 6, 10]));
