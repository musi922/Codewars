/*

Your task is to write an update for a lottery machine. 
Its current version produces a sequence of random letters
 and integers (passed as a string to the function). 
 Your code must filter out all letters and return unique integers as
  a string, in their order of first appearance. If there are no integers 
  in the string return "One more run!"

 */



  function lottery(str){
    var numbers = [];
    var num = /\d/
    var result = str.split('')
    for(let i=0;i<result.length;i++){
      if(num.test(result[i]) && !numbers.includes(result[i]) ){
     numbers.push(result[i])}
    }
    

 if (numbers.length === 0) {
  return "One more run!";
}
return numbers.join('')

}

 console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ"))
 console.log(lottery("555"))
 
