function isAlt(word) {
    const vowels = 'aeiouAEIOU';
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    for (let i = 0; i < word.length - 1; i++) {
        const currentIsVowel = vowels.includes(word[i]);
        const nextIsConsonant = consonants.includes(word[i+1]);
        
        if (currentIsVowel !== nextIsConsonant) {
            return false;
        }
    }
    return true;
}

console.log(isAlt("amazon")); 
console.log(isAlt("apple"));  