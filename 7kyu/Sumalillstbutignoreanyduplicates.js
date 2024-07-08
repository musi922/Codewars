function sumNoDuplicates(numList) {
    let Uniquenumbers = numList.filter(num=>numList.indexOf(num)===numList.lastIndexOf(num))
    const sum = Uniquenumbers.reduce((a,b)=>a+b,0)
    return sum
  }
  console.log(sumNoDuplicates([3, 4, 3, 6]));