"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddle = getMiddle;
function getMiddle(s) {
    var arr = s.split('');
    if (arr.length % 2 !== 0) {
        var odd = Math.floor(arr.length / 2);
        return arr[odd];
    }
    var even = Math.floor(arr.length / 2);
    return arr[even - 1] + arr[even];
}
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
