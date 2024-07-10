function warnTheSheep(queue:string[]): string{
    let wolfindex = queue.findIndex(el=>el==='wolf')
    if (queue.length-1 === wolfindex) {
        return "Pls go away and stop eating my sheep"
        
    }
    else{
        const sheepIndex = queue.length -1 -wolfindex
        return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`

    }
    
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
