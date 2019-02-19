function compareRolls(playerRolls, opponentRolls) {
    if(playerRolls < opponentRolls) {
        return 'player loses';
    } else if(playerRolls > opponentRolls) {
        return 'player wins';
    }
    return 'tie';
}

export default compareRolls;