import compareRolls from '../../../src/games/dice-game/compare-rolls.js';

const test = QUnit.test;

QUnit.module('Compare rolls');

test('if player roll is lower, return \'player loses\'', function(assert) {
    const diceroll1 = 3;
    const diceroll2 = 5;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'player loses';
    assert.equal(result, expected);
});

test('if player roll is higher, return \'player wins\'', function(assert) {
    const diceroll1 = 6;
    const diceroll2 = 5;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'player wins';
    assert.equal(result, expected);
});

test('if dice rolls are equal, return \'tie\'', function(assert) {
    const diceroll1 = 6;
    const diceroll2 = 6;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'tie';
    assert.equal(result, expected);
});