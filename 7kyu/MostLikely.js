function mostLikely(prob1,prob2){
    let res1 = prob1.split(':')
    let probability1 = res1[0]/res1[1]
    let res2 = prob2.split(':')
    let probability2 = res2[0]/res2[1]
    if (probability1>probability2) {
        return true
        
    }
    return false
  
}
console.log(mostLikely('1:3','1:2'));