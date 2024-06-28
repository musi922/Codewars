function equableTriangle(a,b,c) {
    const perimeter = a + b + c 
    const s = perimeter / 2
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    if(area === perimeter){
      return true
    }
    else{
      return false
    }
  }
  