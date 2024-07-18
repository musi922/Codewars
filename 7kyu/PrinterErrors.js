"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printerError = printerError;
function printerError(s) {
    var letters = s.match(/[n-z]/g);
    if (letters) {
        var tot = letters.length;
        return "".concat(tot, "/").concat(s.length);
    }
    return "0/".concat(s.length);
}
console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
