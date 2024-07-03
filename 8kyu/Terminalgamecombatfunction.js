function combat(health, damage) {
    let current = health-damage;
    if(current<0){
      current = 0 
    }
    return current
  }
  console.log(combat(100, 5))
  console.log(combat(20, 30))
  