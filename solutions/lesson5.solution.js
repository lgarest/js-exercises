/**
 * Simple calculator!
 * @param  {str}    operator, mathematical operator ['+', '-', '*', '/', '%']
 * @param  {num} firstNumber  first operand
 * @param  {num} secondNumber second operand
 * @return {num}              result of the calculation
 */
function calculator(firstNumber, operator, secondNumber) {
  let output = null;
  /*
    Requirement1:
      when dividing, if the result has digits, round it to 2 only.
   */
  // put your code between here

  // Note: As you can see it adds a lot of visual noise, and if the operator is
  // an invalid operator, the program will perform all the checks in lines
  // 20, 23, 26, 29, 32 before executing line 36, which results in worse
  // performance than the other solutions, same for the switch case version
  if (operator === '+') {
    output = firstNumber + secondNumber;
  }
  else if (operator === '-') {
    output = firstNumber - secondNumber;
  }
  else if (operator === '*') {
    output = firstNumber * secondNumber;
  }
  else if (operator === '/') {
    output = (firstNumber / secondNumber).toFixed(2);
  }
  else if (operator === '%') {
    output = firstNumber % secondNumber;
  }
  else {
    output = 'not a valid input';
  }

  /*
    // 'Switch case' version
    // Note: As you can see it adds a lot of verbosity and as explained before
    // is not the most performant approach

    switch (operator) {
      case '+':
        output = firstNumber + secondNumber;
      break;
      case '-':
        output = firstNumber - secondNumber;
      break;
      case '*':
        output = firstNumber * secondNumber;
      break;
      case '/':
        output = (firstNumber / secondNumber).toFixed(2);
      break;
      case '%':
        output = firstNumber % secondNumber;
      break;
      default:
        output = 'not a valid input'
    }
  */
  /*
    // 'Declarative version inspired by 'Command' pattern'
    // More info about the 'Command' pattern in: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript

    // Note: This is my personal favorite, as is elegant, performant, shorter,
    // and easier to understand.

    // Note: It is performant because the access to the operator inside
    // the operators object has cost O(1)

    // Object declaration using object literal grammar
    // https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => (a/b).toFixed(2),
      '%': (a, b) => a % b,
    };

    output = operators[operator]
      && operators[operator](firstNumber, secondNumber)
      || 'not a valid input';
  */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = calculator;
