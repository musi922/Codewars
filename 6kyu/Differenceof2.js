function twosDifference(input){
    let result = [];
    for (let i=0;i<input.length;i++){
        for(let j=0;j<input.length;j++){
            if(input[j]-input[i]===2){
                result.push([input[i],input[j]])
            }
        }
    }
    return result.sort((a,b)=>a[0]-b[0])

  }
  console.log(twosDifference([1, 2, 3, 4]));
  console.log(twosDifference([4, 1, 2, 3]));
  console.log(twosDifference([1, 23, 3, 4, 7]));
  console.log(twosDifference([4, 3, 1, 5, 6]));
  console.log(twosDifference([1,3,5,6,8,10,15,32,12,14,56]));