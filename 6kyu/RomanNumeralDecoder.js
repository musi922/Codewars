"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(roman) {
    var codes = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    var splitArr = roman.split('');
    splitArr.map(function (e, i) {
        codes[splitArr[i]] < codes[splitArr[i + 1]] ? result -= codes[e] : result += codes[e];
    });
    return result;
}
