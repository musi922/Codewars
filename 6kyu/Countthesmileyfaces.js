"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSmileys = countSmileys;
function countSmileys(arr) {
    var validsmiles = new Set([':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D']);
    var counter = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var smile = arr_1[_i];
        if (validsmiles.has(smile)) {
            counter++;
        }
    }
    return counter;
}
console.log(countSmileys([':)', ';(', ';}', ':-D']));
