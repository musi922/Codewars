function findSmallestInt(arr) {
    let result = arr[0]
    for(let items of arr){
      if(items < result){
        result = items
      }
    }
    return result
  }
  console.log(findSmallestInt([34, 15, 88, 2]));
  console.log(findSmallestInt([34, -345, -1, 100]));


  //smallest way
  /*
  function findSmallestInt(args) {
    return Math.min(...args)
  }
  console.log(findSmallestInt([34, 15, 88, 2]));
  console.log(findSmallestInt([34, -345, -1, 100]));
   */