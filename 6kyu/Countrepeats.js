function countRepeats(str) {
    let result=[]
    for(let i=0; i<str.length; i++){
        if (str[i]===str[i+1]) {
            result.push(str[i])
       }
     }
  return result.length
}
console.log(countRepeats('abbbbc'))
console.log(countRepeats('abbcca'))
console.log(countRepeats('ab cca'))
