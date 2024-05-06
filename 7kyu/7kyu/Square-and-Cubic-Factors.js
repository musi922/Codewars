function factors(n) {
    // your code here
    let sq = [ ];
    let cb = [ ];
    for(i=2;(i*i)<=n;i++){
      if(n%(i*i)===0){
        sq.push(i);
      }
    }
    for (j=2;(j*j*j)<=n;j++){
      if(n%(j*j*j)===0){
        cb.push(j);
      }
    }
    return result = [ sq,cb ];
     
  }
  console.log(factors(4))