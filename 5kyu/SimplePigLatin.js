let pigIt = (str)=>{
    let result = str.split(' ');
    let soln = [];
    for(let i=0;i<result.length;i++){
        let word = result[i];
        word= word.slice(1)+word[0]+'ay'
        soln.push((word + ' '))
         
    }
    return soln
}
console.log(pigIt('Pig latin is cool'));