/**
 * Greets the world with your first steps!
 * @return {str}
 */
function hello(input) {
  let output = null;
  // put your code between here

  output = '';
  if (Array.isArray(input)) {
    output = input.join(' ');
  }

  // output = Array.isArray(input) ? input.join(' ') : '';

  // and here
  return output;
}

// exporting to be able to test it
module.exports = hello;