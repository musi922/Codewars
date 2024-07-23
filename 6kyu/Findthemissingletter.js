"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMissingLetter = findMissingLetter;
function findMissingLetter(array) {
    var startcode = array[0].charCodeAt(0);
    for (var i = 0; i < array.length; i++) {
        var expectedcode = startcode + i;
        if (array[i].charCodeAt(0) !== expectedcode) {
            return String.fromCharCode(expectedcode);
        }
    }
    return '';
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
