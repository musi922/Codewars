function findYear(month, dayOfWeek) {
    for (let year = 2014; year <= 2050; year++) {
        if (new Date(year, month).getDay() === dayOfWeek) {
            return year;
        }
    }
    return 0;
}

console.log(findYear(11, 2)); 
console.log(findYear(4, 55)); 