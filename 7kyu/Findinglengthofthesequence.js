let lengthOfSequence = function (arr, n) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===n) {
            count++
        } 
    }
    if (count === 2 ) {
        let firstindex = arr.indexOf(n)
        let lastindex = arr.lastIndexOf(n)
        let result = arr.slice(firstindex,lastindex+1).length
        return result
    }
    return 0;
    
    
  
  }
  console.log(lengthOfSequence([0,1,2,3,4,1,0],1));
  console.log(lengthOfSequence([1,1],1));
  console.log(lengthOfSequence([-7,5,0,2,9,5],5));