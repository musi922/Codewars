function humanReadable (seconds) {
  function addZeroIfNoTwoDigits(num){
    return num < 10 ? "0" + num: num

  }
  
  let hours = Math.floor(seconds/3600)
  let remainder = seconds % 3600
  let minutes  = Math.floor(remainder/60);
   remainder = remainder % 60;

return `${addZeroIfNoTwoDigits(hours)}:${addZeroIfNoTwoDigits(minutes)}:${addZeroIfNoTwoDigits(remainder)}`  

}

console.log(humanReadable (46))
console.log(humanReadable (60))
console.log(humanReadable (130))
console.log(humanReadable (3600))
console.log(humanReadable (505050050300))
