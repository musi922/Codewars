let high = (x) =>{

    let result = [];
    let maximumnumber = 0
    let text = x.split(' ');
    for (let i = 0; i < text.length; i++) {
        let word = text[i]
        let words = 0
        for (let j = 0; j < word.length; j++) {
            let char = word.charCodeAt(j)-96
            words += char
            
        }
        if (words>maximumnumber) {
            maximumnumber = words;
            result = word
            
        }
       
    }
    return result
}
console.log(high('man i need a taxi up to ubud'));