
function timeForMilkAndCookies(date){
    let month = date.getMonth()
    let day = date.getDate()
    if (month === 11 && day === 24) {
             return true
    }
    return false;
}
console.log(timeForMilkAndCookies(new Date(2024, 11, 24)));