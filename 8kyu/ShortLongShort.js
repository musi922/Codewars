let solution = (a, b)=> a.length !== b.length? a.length<b.length ? a + b + a : b + a +b: "strings should not be the same" ;
console.log(solution("1","22"));
console.log(solution("22","1"));
console.log(solution("1","1"));
