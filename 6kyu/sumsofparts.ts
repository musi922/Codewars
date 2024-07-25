export function partsSums(ls: number[]): number[] {
    const arr:number[] = []
    let sum = ls.reduce((a,b)=> (a + b),0)
    arr.push(sum)
    
    for (const num of ls) {
        sum -= num;
        arr.push(sum)  
    }

    return arr
}

console.log(partsSums([0, 1, 3, 6, 10]));
