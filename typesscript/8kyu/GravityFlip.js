function flip(dir, arr) {
    if (dir === 'R') {
        var result = arr.sort(function (a, b) { return a - b; });
        return result;
    }
    return arr.sort(function (a, b) { return b - a; });
}
console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));
