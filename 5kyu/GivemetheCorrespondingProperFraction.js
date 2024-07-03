let f=(dMax, pos)=>{
    let result = []
    let duplicates = [new Set(result)]
    for (let i = 0; i <= dMax ; i++) {
        for (let j = 0; j >= i ; j++) {
            var element = i / j
            result.push(element)
        }
        
    }
    return result
}
console.log(f(9));