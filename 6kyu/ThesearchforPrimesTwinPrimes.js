let twinPrime = (n) => {
    let result = [];
    for (let i = 2; i < n; i++) { 
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                break
                
            }
            else{
                result.push(i)
            }}
            
    }
    return result;
}

console.log(twinPrime(10));
