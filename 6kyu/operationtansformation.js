function operation(a, b) {
    if (a === b) return 0;
    
    var operations = 0;
    
    while (a !== b) {
        if (a > b) {
            if (a % 2 === 0) {
                a = a / 2;
            } else {
                a = (a - 1) / 2;
            }
        } else {
            a = a * 2;
        }
        operations++;
    }
    
    return operations;
}