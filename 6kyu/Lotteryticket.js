function bingo(ticket, win) {
    let miniWins = 0;
    for (const [str, num] of ticket) {
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === num) {
          miniWins++;
          break;
        }
      }
    }
    return miniWins >= win ? 'Winner!' : 'Loser!';
  }
  