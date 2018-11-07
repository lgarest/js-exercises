/**
 * Returns the given input list reversed
 * @param  {list} input list of numbers
 * @return {list} the list reversed
 * Example: [1,2,3] => [3,2,1]
 */
function reverse(input) {
  let output = null;
  // put your code between here

  output = Array.isArray(input)
    ? input.reverse()
    : 'invalid input';

  // and here
  return output;
}

// exporting to be able to test it
module.exports = reverse;
