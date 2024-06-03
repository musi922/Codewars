
function mergeStrings(first, second) {
  let overlap = '';
  
  for (let i = 0; i < first.length; i++) {
    if (second.startsWith(first.slice(i))) {
      overlap = first.slice(i);
    }
  }
  
  return first + second.slice(overlap.length);
}
console.log(mergeStrings("abc","def"));
console.log(mergeStrings("abc","adef"));