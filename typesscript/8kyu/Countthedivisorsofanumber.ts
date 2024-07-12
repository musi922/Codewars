function divisors(n: number) :number{
    let res:number[]=[]
    for(let i = 0; i<=n;i++){
      if(n % i === 0){
        res.push(i)
      }
    }
    return res.length
  }