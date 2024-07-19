export function getMiddle(s:string):string {
    let arr = s.split('')
    if (arr.length % 2 !== 0) {
        const odd = Math.floor(arr.length / 2)
       return arr[odd]  
    }
    const even = Math.floor(arr.length/2)
    return arr[even-1] + arr[even]
  }

console.log(getMiddle("testing"));
console.log(getMiddle("middle"));