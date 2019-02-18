const test = QUnit.test;
QUnit.module('Dice Roll Game');

function diceRoll() {
    const number = Math.floor(Math.random() * Math.floor(6)) + 1;
    return number;
}

test('will dice roll return number equal to or less than 6', function(assert) {
    const result = diceRoll() <= 6;
    const expected = true;
    assert.equal(result, expected);
    console.log(diceRoll());
});

test('will dice roll return number >= 1', function(assert) {
    const result = diceRoll() >= 1;
    const expected = true;
    assert.equal(result, expected);
    console.log(diceRoll());
});
