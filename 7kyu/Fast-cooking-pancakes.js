function cookPancakes(n, m) {
    let minTime = 0;
    if(n%m===0){
      minTime = parseInt(n/m)*2
    }else {
      minTime = (parseInt(n/m)+1)*2
  
    }
    return minTime
  }