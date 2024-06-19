function convertTemp(temp, from_scale, to_scale) {
    let result;

    if (from_scale === "C") {
        if (to_scale === "F") {
            result = temp * 9 / 5 + 32;
        } else if (to_scale === "K") {
            result = temp + 273.15;
        } else if (to_scale === "R") {
            result = (temp + 273.15) * 9 / 5;
        } else if (to_scale === "De") {
            result = (100 - temp) * 3 / 2;
        } else if (to_scale === "N") {
            result = temp * 33 / 100;
        } else if (to_scale === "Re") {
            result = temp * 4 / 5;
        } else if (to_scale === "Ro") {
            result = temp * 21 / 40 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "F") {
        if (to_scale === "C") {
            result = (temp - 32) * 5 / 9;
        } else if (to_scale === "K") {
            result = (temp - 32) * 5 / 9 + 273.15;
        } else if (to_scale === "R") {
            result = temp + 459.67;
        } else if (to_scale === "De") {
            result = (212 - temp) * 5 / 6;
        } else if (to_scale === "N") {
            result = (temp - 32) * 11 / 60;
        } else if (to_scale === "Re") {
            result = (temp - 32) * 4 / 9;
        } else if (to_scale === "Ro") {
            result = (temp - 32) * 7 / 24 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "K") {
        if (to_scale === "C") {
            result = temp - 273.15;
        } else if (to_scale === "F") {
            result = (temp - 273.15) * 9 / 5 + 32;
        } else if (to_scale === "R") {
            result = temp * 9 / 5;
        } else if (to_scale === "De") {
            result = (373.15 - temp) * 3 / 2;
        } else if (to_scale === "N") {
            result = (temp - 273.15) * 33 / 100;
        } else if (to_scale === "Re") {
            result = (temp - 273.15) * 4 / 5;
        } else if (to_scale === "Ro") {
            result = (temp - 273.15) * 21 / 40 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "R") {
        if (to_scale === "C") {
            result = (temp - 491.67) * 5 / 9;
        } else if (to_scale === "F") {
            result = temp - 459.67;
        } else if (to_scale === "K") {
            result = temp * 5 / 9;
        } else if (to_scale === "De") {
            result = (671.67 - temp) * 5 / 6;
        } else if (to_scale === "N") {
            result = (temp - 491.67) * 11 / 60;
        } else if (to_scale === "Re") {
            result = (temp - 491.67) * 4 / 9;
        } else if (to_scale === "Ro") {
            result = (temp - 491.67) * 7 / 24 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "De") {
        if (to_scale === "C") {
            result = 100 - temp * 2 / 3;
        } else if (to_scale === "F") {
            result = 212 - temp * 6 / 5;
        } else if (to_scale === "K") {
            result = 373.15 - temp * 2 / 3;
        } else if (to_scale === "R") {
            result = 671.67 - temp * 6 / 5;
        } else if (to_scale === "N") {
            result = (100 - temp * 2 / 3) * 33 / 100;
        } else if (to_scale === "Re") {
            result = (100 - temp * 2 / 3) * 4 / 5;
        } else if (to_scale === "Ro") {
            result = (100 - temp * 2 / 3) * 21 / 40 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "N") {
        if (to_scale === "C") {
            result = temp * 100 / 33;
        } else if (to_scale === "F") {
            result = temp * 60 / 11 + 32;
        } else if (to_scale === "K") {
            result = temp * 100 / 33 + 273.15;
        } else if (to_scale === "R") {
            result = temp * 60 / 11 + 491.67;
        } else if (to_scale === "De") {
            result = (100 - (temp * 100 / 33)) * 3 / 2; // Fixed this line
        } else if (to_scale === "Re") {
            result = temp * 80 / 33;
        } else if (to_scale === "Ro") {
            result = temp * 35 / 22 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "Re") {
        if (to_scale === "C") {
            result = temp * 5 / 4;
        } else if (to_scale === "F") {
            result = temp * 9 / 4 + 32;
        } else if (to_scale === "K") {
            result = temp * 5 / 4 + 273.15;
        } else if (to_scale === "R") {
            result = temp * 9 / 4 + 491.67;
        } else if (to_scale === "De") {
            result = (80 - temp) * 15 / 8;
        } else if (to_scale === "N") {
            result = temp * 33 / 80;
        } else if (to_scale === "Ro") {
            result = temp * 21 / 32 + 7.5;
        } else {
            result = temp;
        }
    } else if (from_scale === "Ro") {
        if (to_scale === "C") {
            result = (temp - 7.5) * 40 / 21;
        } else if (to_scale === "F") {
            result = (temp - 7.5) * 24 / 7 + 32;
        } else if (to_scale === "K") {
            result = (temp - 7.5) * 40 / 21 + 273.15;
        } else if (to_scale === "R") {
            result = (temp - 7.5) * 24 / 7 + 491.67;
        } else if (to_scale === "De") {
            result = (60 - temp) * 20 / 7;
        } else if (to_scale === "N") {
            result = (temp - 7.5) * 22 / 35;
        } else if (to_scale === "Re") {
            result = (temp - 7.5) * 32 / 21;
        } else {
            result = temp;
        }
    } else {
        throw new Error("Unknown scale: " + from_scale);
    }

    return Math.round(result);
}

console.log(convertTemp(100, "C", "F")); 
console.log(convertTemp(40, "Re", "C")); 
console.log(convertTemp(60, "De", "F")); 
console.log(convertTemp(373.15, "K", "N")); 
console.log(convertTemp(666, "K", "K")); 
console.log(convertTemp(26, "N", "Ro")); 
