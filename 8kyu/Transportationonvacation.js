function rentalCarCost(d) {

    if(d<3) return d*40
    if(d>=3&&d<7) return (d*40)-20
    if(d>=7) return (d*40)-50
  
  }
  console.log(rentalCarCost(2));
  console.log(rentalCarCost(4));
  console.log(rentalCarCost(7));