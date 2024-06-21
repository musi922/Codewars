const binaryArrayToNumber = arr => {
    let arra = arr.join('')
    let result = parseInt(arra,2)
    return result;
  
};

console.log(binaryArrayToNumber([1, 0, 0, 1]));


