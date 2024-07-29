function solution(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result += ' ' + str[i];
        }
        else
            result += str[i];
    }
    return result;
}
console.log(solution("camelCasing"));
