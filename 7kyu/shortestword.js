/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/


function findShort(s){
    
    let result= s.split(" ");
    let shortest = result[0].length;
    for(let i=0;i<result.length;i++){
        if(result[i].length<shortest){
            shortest = result[i].length;
        }
      
    }
    return shortest
  }
  console.log( findShort("Pirlo boy"));


  //simple way
  function fiindShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log( fiindShort("Pirlo boy"));

//


    