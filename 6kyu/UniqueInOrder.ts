export function uniqueInOrder (iterable: string| (string | number)[]):(string | number)[] {
    let res:(string | number)[] = []
    for (let i = 0; i < iterable.length; i++) {
        
        if (iterable[i] !== iterable[i+1]) {
           res.push(iterable[i])
        }   
    }
    
	return res
};

console.log(uniqueInOrder([1,2,2,3,3]) );
console.log(uniqueInOrder('AAAABBBCCDAABBB'));

