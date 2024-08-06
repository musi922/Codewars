"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rot = rot;
exports.selfieAndRot = selfieAndRot;
exports.oper = oper;
function rot(s) {
    return s.split("\n").map(function (el) { return el.split('').reverse().join(''); }).reverse().join('\n');
}
function selfieAndRot(s) {
    var initial = s.split("\n").map(function (el) { return el + ".".repeat(el.length); }).join("\n");
    var rotated = rot(s).split("\n").map(function (el) { return ".".repeat(el.length) + el; }).join("\n");
    return initial + "\n" + rotated;
}
function oper(fn, s) {
    return fn(s);
}
console.log(oper(selfieAndRot, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(rot, "abcd\nefgh\nijkl\nmnop"));
