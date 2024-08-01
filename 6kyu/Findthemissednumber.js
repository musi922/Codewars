function findNumber(start, stop, string) {
    let count = '';
  
    for (let i = start; i <= stop; i++) {
      count += i;
    }
  
    for (const char of string) {
      count = count.replace(char, '');
    }
  
    const result = [];
  
    for (let i = start; i <= stop; i++) {
      let current = i.toString();
  
      if (current.length !== count.length) {
        continue;
      }
  
      for (const char of count) {
        current = current.replace(char, '');
      }
  
      if (current === '') {
        result.push(i);
      }
    }
  
    return result;
  }