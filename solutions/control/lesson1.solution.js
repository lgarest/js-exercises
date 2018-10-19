/**
 * Returns if the given input is an odd number
 * @param  {any}  input to the program
 * @return {Boolean}       true if odd number, false otherwise
 */
function isOdd(input) {
  let output = null;
  // put your code between here

  if (typeof(input) !== 'number') {
    output = false;
  }
  else {
    output = input % 2 !== 0;
  }

  /*
    // 'Variable defaulting' version
    // By defaulting the output to false, only in the case of the input being
    // a number, we are saving executing line 23
    output = false
    if (typeof(input) === 'number') {
      output = input % 2 !== 0;
    }
   */
  /*
    // 'Shortcircuit oneliner' version using built-in javascript shortcircuits
    // More info about 'Short-circuit' evaluation in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
    output = typeof(input) === 'number' && input % 2 !== 0;
   */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = isOdd;
