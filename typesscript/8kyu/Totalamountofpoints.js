function points(games) {
    var result = 0;
    for (var i = 0; i < games.length; i++) {
        var element = games[i].split(":");
        var x = parseInt(element[0]);
        var y = parseInt(element[1]);
        if (x > y) {
            result += 3;
        }
        else if (x === y) {
            result += 1;
        }
        else {
            result += 0;
        }
    }
    return result;
}
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
