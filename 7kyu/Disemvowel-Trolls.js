//use replace method to remove all vowels from text

function disemvowel(str){
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(disemvowel("This website is for losers LOL!"))