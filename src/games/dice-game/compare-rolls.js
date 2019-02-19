function compareRolls(diceroll1, diceroll2) {
    if(diceroll1 < diceroll2) {
        return 'dice one is lower';
    } else if(diceroll1 > diceroll2) {
        return 'dice one is higher';
    }
    return 'tie';
}

export default compareRolls;