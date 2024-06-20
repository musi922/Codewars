let toUnderscore=(string)=> typeof string  === 'number' ? String(string) : string.split('').map((char,index)=> char >= 'A' && char <= 'Z'  && index>0 ? "_"+ char.toLowerCase(): char.toLowerCase()).join('');
console.log(toUnderscore("MoviesAndBooks"));
console.log(toUnderscore("TestController"));
console.log(toUnderscore(1))

