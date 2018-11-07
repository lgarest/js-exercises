/**
 * Gets the average of the numbers in the list
 * @param {num}  input list of numbers
 * @return {num} average of the numbers if the list
 * has items as is not empty
 * @return {str} 'invalid input' otherwise
 */
function average(input) {
  let output = null;
  // put your code between here

  output = 'invalid input';
  if (Array.isArray(input) && input.length > 0) {
    let counter = 0;

    for(let i=0; i < input.length; i++) {
        counter += input[i];
    }
    output = counter / input.length;
  }

  /*
    // 'Of iterator' version
    // Note: It's better than the previous one because we don't need to
    // access manually the content of the array incrementing an iterator,
    // the 'of' statement takes care of this for us.
    output = 'invalid input';
    if (Array.isArray(input) && input.length > 0) {
      let counter = 0;
      for (let num of input) {
        counter += num;
      }
      output = counter / input.length;
    }
  */

  /*
    // 'Simple reduce' version
    // Note: It's better than the 'Of iterator' version because we don't
    // tell the program manually how to iterate over the array and calculate
    // the total value, we just describe how te program should work.
    // More info about te 'reduce' method in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    output = 'invalid input';
    if (Array.isArray(input) && input.length > 0) {
      function accumulate(acc, num) {
        return acc + num;
      }
      output = input.reduce(accumulate, 0) / input.length;
    }
  */

  /*
    // 'Ternary w/ reduce' version
    // Note: As you can see, this version is shorter than everything else.
    // The good thing is that is declarative, so you don't need to think if the
    // code is entering one 'if' block or not.
    // The downside is that to unexperienced developers, it's harder to follow.
    // At the end it's just a matter of getting used to it and consistency.
    output = Array.isArray(input) &&  input.length > 0
      ? input.reduce((acc, num) => acc + num, 0) / input.length
      : 'invalid input';
  */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = average;
