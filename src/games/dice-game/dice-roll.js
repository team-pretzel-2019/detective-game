function diceRoll() {
    const number = Math.floor(Math.random() * Math.floor(6)) + 1;
    return number;
}

export default diceRoll;