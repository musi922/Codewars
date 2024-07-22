export function countSmileys(arr: string[]): number {
  const validsmiles = new Set([':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D'])
  let counter = 0

  for(const smile of arr){
    if (validsmiles.has(smile)) {
      counter++  
    }
  }
    return counter
  }

  console.log(countSmileys([':)', ';(', ';}', ':-D']));
  