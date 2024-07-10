function points(games : string[]): number {
    let result  =0
    for (let i = 0; i < games.length; i++) {
        const element = games[i].split(":")
        const x = parseInt(element[0])
        const y = parseInt(element[1])
        if (x>y) {
            result+=3
        }
        else if(x === y){
            result+=1
        }
        else{
            result+=0
        } 
    }
    return result
  }
  console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));
  