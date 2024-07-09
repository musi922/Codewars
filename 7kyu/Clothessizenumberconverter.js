const sizeToNumber = (size) => {
    if (!size) return null;
    if (size === 'xs') return 34;
    if (size === 's') return 36;
    if (size === 'm') return 38;
    if (size === 'l') return 40;
    if (size === 'xl') return 42;
  
    if (size.startsWith('x') && size.endsWith('s')) {
      let count = size.length - 1;
      return 36 - (2 * count);
    }
  
    if (size.startsWith('x') && size.endsWith('l')) {
      let count = size.length - 1;
      return 40 + (2 * count);
    }
  
    return null;
  };