/**
 * Returns the given celsius degrees to Fahrenheit (rounded to two decimals)
 * or a string error
 * @param  {any} input
 * @return {number} degrees in Fahrenheit
 * @return {str} 'not a number' if the input is not a number type
 */
function celsiusToFahrenheit(input) {
  let output = null;
  // put your code between here

  output = 'not a number';
  if (typeof(input) === 'number') {
    const fahrenheitString = ((input * 9) / 5 + 32).toFixed(2);
    output = parseFloat(fahrenheitString);
  }

  /*
    // 'Ternary' version
    // Note: As you can see, this version is shorter than the previous one.
    // The good thing is that is declarative, so you don't need to think about
    // if the code is entering in the 'if' block or not.
    // The downside is that to unexperienced developers, it's harder to follow.
    output = typeof(input) === 'number'
      ? parseFloat(((input * 9) / 5 + 32).toFixed(2))
      : 'not a number';
  */

  /*
    // 'Ternary with hacky cast to integer' version
    // Note: As you can see, this version is shorter than the previous one
    // and looks 'cooler' but, is harder to reason about, so, use with caution
    output = typeof(input) === 'number'
      ? +((input * 9) / 5 + 32).toFixed(2)
      : 'not a number';
  */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = celsiusToFahrenheit;
