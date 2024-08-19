function vectorAffinity(xs, ys) {
    if (xs.length === 0 && ys.length === 0) {
        return 1;
    }

    const minLength = Math.min(xs.length, ys.length);
    const maxLength = Math.max(xs.length, ys.length);
    
    let matchCount = 0;
    for (let i = 0; i < minLength; i++) {
        if (xs[i] === ys[i]) {
            matchCount++;
        }
    }
    
    return matchCount / maxLength;
}

console.log(vectorAffinity([1, 2, 3, 4, 5], [1, 2, 2, 4, 3]));
console.log(vectorAffinity([1, 2, 3], [1, 2, 3]));
console.log(vectorAffinity([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(vectorAffinity([], []));