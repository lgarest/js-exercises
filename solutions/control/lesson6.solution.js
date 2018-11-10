/**
 * Create a function that simulates the rolling
 * of a dice of a given number of sides.
 * @param {int} input number of sides the dice has
 * @return {int} result of the thown dice
 * Example: rollDice(6) can return any number
 * from 1 to 6, as a regular dice would.
 */
function rollDice(input) {
  let output = null;
  // put your code between there

  // Create a random number between 0
  // and `input` (not included).
  // e.g.: from 0 to 5.99 in a six sided dice.
  const decimalDiceResult = Math.random() * input;
  // We round down the previous with Math.floor
  // and add 1 to make it go from 1 to `input`.
  // e.g.: from 1 to 6 in a six sided dice.
  output = Math.floor(decimalDiceResult) + 1;

  // and here
  return output;
}

// exporting to be able to test it
module.exports = rollDice;
