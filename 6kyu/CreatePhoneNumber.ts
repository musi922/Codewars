function createPhoneNumber(numbers: number[]): string {
  const firstElements:string = numbers.slice(0,3).join('')
  const secondElements:string  = numbers.slice(3,6).join('')
  const thirdElement:string  = numbers.slice(6).join('')
    return `(${firstElements}) ${secondElements}-${thirdElement}`
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  