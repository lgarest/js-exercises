/**
 * Greets the world with your first steps!
 * @return {str}
 */
function hello(input) {
  let output = null;
  // put your code between here

  output = '';
  if (Array.isArray(input) && input.length !== 0) {
    output = input[0];
  }

  /*
    // 'Ternary' version
    // Note: It can be written in just one line
    output = Array.isArray(input) && input.length !== 0
      ? input[0]
      : '';
  */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = hello;