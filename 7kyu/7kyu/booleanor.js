// /*
// Create an OR function that takes a list of boolean values and runs OR against all of them, without ( depending on language ) the or keyword or the || operator,.

// There will be between 0 and 6 elements ( inclusive ).
// Return None, nil or a similar empty value for an empty list.

// */

function alternate(items) {
    if(items.length==0){
        return null;
      }
    
    for(let i=0;i<items.length;i++){
       if(items[i] === true) return true;
      
    
  } return false;
    }
    
    console.log(alternate([true, false, false, false])); 
    console.log(alternate([false, false]));
    console.log(alternate([]));


// simple way using includes which returns true if it has it and false when no


function alternate(items) {
    return !items.length ? null : items.includes(true);
  }
  console.log(alternate([true, false, false, false])); 
   console.log(alternate([false, false]));
    console.log(alternate([]));