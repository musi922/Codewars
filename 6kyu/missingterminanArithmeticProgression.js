const findMissing = function (list) {  
    const diff1 = list[1] - list[0];
    const diff2 = list[2] - list[1];
    
    const commonDiff = diff1 === diff2 ? diff1 : list[2] - list[0] === 2 * diff1 ? diff1 : diff2;
    
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== commonDiff) {
            return list[i] + commonDiff;
            
        }
    }
    
    return list[list.length - 1] + commonDiff;
}

console.log(findMissing([1, 3, 5, 9, 11])); 
console.log(findMissing([1, 5, 7, 9, 11])); 
console.log(findMissing([1, 3, 4]));
