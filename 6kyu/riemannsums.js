function frame(score) {
    const frames = score.split(';').filter(f => f.trim() !== '');
    let player1Wins = 0;
    let player2Wins = 0;
    
    frames.forEach(frame => {
        const [player1, player2] = frame.split('-').map(part => parseInt(part));
        if (player1 > player2) {
            player1Wins++;
        } else {
            player2Wins++;
        }
    });
    
    return [player1Wins, player2Wins];
}
