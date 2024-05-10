function smash (words) {
    let result = [...words].toString("").replace(/,/g, " ")
   
    
    return result
 };

 console.log(smash(["hello","Richard","How","are","you"]));


 //simple way 
 function smash (words) {
    let result = words.join(" ")
   
    
    return result
 };

 console.log(smash(["hello","Richard","How","are","you"]));