function relativelyPrime(n, arr) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        if( n % arr[i] !== 0 || arr[i] % n !== 0){
            result.push(arr[i])

        }
    }
    return result
  
}
console.log(relativelyPrime(8, [1, 2, 3, 4, 5, 6, 7]));