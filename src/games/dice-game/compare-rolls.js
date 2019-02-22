function compareRolls(playerRolls, opponentRolls) {
    if(playerRolls < opponentRolls) {
        return 'Player Loses';
    } else if(playerRolls > opponentRolls) {
        return 'Player Wins!';
    }
    return 'Tie';
}

export default compareRolls;