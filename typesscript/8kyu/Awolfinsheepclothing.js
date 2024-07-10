function warnTheSheep(queue) {
    var wolfindex = queue.findIndex(function (el) { return el === 'wolf'; });
    if (queue.length - 1 === wolfindex) {
        return "Pls go away and stop eating my sheep";
    }
    else {
        var sheepIndex = queue.length - 1 - wolfindex;
        return "Oi! Sheep number ".concat(sheepIndex, " You are about to be eaten by a wolf!");
    }
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
