function lastDigit(n, m) {  
    let result = Math.pow(n, m);
    return result % 10;
}

console.log(lastDigit(4, 1)); 
console.log(lastDigit(2, 3));
console.log(lastDigit(10, 3)); 
console.log(lastDigit(4, 2)); 
console.log(lastDigit(9, 7)); 
