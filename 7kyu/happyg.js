function gHappy(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g' && (str[i - 1] !== 'g' && str[i + 1] !== 'g')) {
            return false;
        }
    }
    return true;
}

console.log(gHappy("gg0gg3gg0gg"));
console.log(gHappy("gog")); 