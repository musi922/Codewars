function highAndLow(numbers){
    const numArray = numbers.split(" ").map(Number)
    const high = Math.max(...numArray);
    const low = Math.min(...numArray);
    return `${high} ${low}`
  
  }

  console.log(highAndLow("1 2 3 4 5"));
  