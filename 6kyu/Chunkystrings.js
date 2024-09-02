function restoreBrackets(s) {
    const openBrackets = s.split('').filter(char => char === '[').length;
    return s + ']'.repeat(openBrackets);
}


console.log(restoreBrackets('x'));
console.log(restoreBrackets('[xy'));
console.log(restoreBrackets('[x[yy')); 
console.log(restoreBrackets('[[xyy')); 
console.log(restoreBrackets('[[ab[ab'));
console.log(restoreBrackets('[c[o[d[e[w[a[rs'));
