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
    // 'No else' version
    output = false
    if (typeof(input) === 'number') {
      output = input % 2 !== 0;
    }
   */
  /*
    // 'One line' version
    output = typeof(input) === 'number' && input % 2 !== 0;
   */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = isOdd;
