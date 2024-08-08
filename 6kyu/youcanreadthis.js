function toNato(words) {
    return words
        .split('')
        .filter(char => char !== ' ')
        .map(char => {
            return NATO[char.toUpperCase()] || char;
        })
        .join(' ')