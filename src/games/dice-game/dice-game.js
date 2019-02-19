import diceRoll from './dice-roll.js';
import compareRolls from './compare-rolls.js';

function diceGame() {
    const playerRoll1 = diceRoll();
    const playerRoll2 = diceRoll();
    const opponentRoll1 = diceRoll();
    const opponentRoll2 = diceRoll();

    const result = compareRolls((playerRoll1 + playerRoll2), (opponentRoll1 + opponentRoll2));

    const diceGameObject = {
        playerRoll1: playerRoll1,
        playerRoll2: playerRoll2,
        opponentRoll1: opponentRoll1,
        opponentRoll2: opponentRoll2,
        result: result
    };
    return diceGameObject;
}

export default diceGame;