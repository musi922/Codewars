function toNato(words) {
    return words
        .split('')
        .filter(function (char) { return char !== ' '; })
        .map(function (char) {
        return NATO[char.toUpperCase()] || char;
    })
        .join(' ');
}
