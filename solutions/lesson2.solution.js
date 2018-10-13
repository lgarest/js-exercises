/**
 * Returns if the given input is a even or odd number
 * @param  {any} input
 * @return {str} 'odd' if it's a odd number, 'even' if it's a even number,
 * 'not a number' otherwise
 */
function evenOrOdd(input) {
  let output = null;
  // put your code between here

  if (typeof(input) !== 'number') {
    output = 'not a number';
  }
  else if (input%2 === 0) {
    output = 'even';
  }
  else {
    output = 'odd';
  }

  /*
    // 'Switch case' version
    switch(true) {
      case typeof(input) !== 'number':
        output = 'not a number';
      break;
      case input%2 === 0:
        output = 'even';
      break;
        output = 'odd';
      default:
    }
   */
  /*
    // 'Nested ternary' version
    output = typeof(input) !== 'number'
      ? 'not a number'
      : input%2 === 0
      ? 'even'
      : 'odd'
  */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = evenOrOdd;
