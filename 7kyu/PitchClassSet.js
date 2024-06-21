const binaryArrayToNumber = arr => {
    let arra = arr.join('')
    let result = parseInt(arra,2)
    return result;
  
};

console.log(binaryArrayToNumber([1, 0, 0, 1]));


//simpleway

const binaryArrayToNumbers = arr => parseInt(arr.join(''),2)
console.log(binaryArrayToNumbers([1, 0, 0, 1]));