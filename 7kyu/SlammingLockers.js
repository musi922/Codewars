function lockerRun(lockers) {
    let result = [];
    for(let i=1 ;i*i<=lockers;i++){
        result.push(i*i)
    }
    return result
}
console.log(lockerRun(100));