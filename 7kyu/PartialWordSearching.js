let wordSearch =(query, seq)=>{

    let lowquery = query.toLowerCase();
    let result = seq.filter(a=>a.toLowerCase().includes(lowquery));
    return result.length === 0 ? ["Empty"] : result
}

console.log(wordSearch("me", ["home", "milk", "Mercury", "fish"]));