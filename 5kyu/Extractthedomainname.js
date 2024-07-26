"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = domainName;
function domainName(url) {
    var str;
    var result;
    if (url.includes('://')) {
        str = url.split('://');
        str = str[1];
    }
    else {
        str = url;
    }
    result = str.split('.');
    result = result[0];
    if (result === 'www') {
        str = str.split('.');
        result = str[1];
    }
    return result;
}
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("www.xakep.ru"));
