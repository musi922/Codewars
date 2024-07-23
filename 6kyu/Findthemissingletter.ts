export function findMissingLetter(array:string[]):string{
    const startcode = array[0].charCodeAt(0)
    for (let i = 0; i < array.length; i++) {
        const expectedcode = startcode + i;
        if (array[i].charCodeAt(0) !== expectedcode) {
            return String.fromCharCode(expectedcode)
            
        }
        
    }
    return ''

}
console.log(findMissingLetter(['a','b','c','d','f']));
