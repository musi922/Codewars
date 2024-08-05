"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
function toCamelCase(str) {
    return str.split(/[-,_]/).map(function (word, index) {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
