function order(words){
    const splitted = words.split(" ")
    splitted.sort((a,b)=>{
        return a.match(/\d/) - b.match(/\d/)
    })
    return splitted.join(" ")
  }
  console.log(order("is2 Thi1s T4est 3a"));
  