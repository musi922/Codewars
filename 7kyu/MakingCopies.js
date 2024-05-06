/*
Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.
 */


function copyList(list){
    let result = [...list];
    if(list.length==0) return error;
    return result
    
  }
  console.log(copyList([1,2,3,4,5]))

  //simple way
