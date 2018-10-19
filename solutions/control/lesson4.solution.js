/**
 * Returns the age of the person at the 'The Matrix' film premiere
 * @param {str} input date of birth in 'DD/MM/YYYY' format
 * @return {number} age of the living being or
 * @return {str} 'Was not even born!' if the person wasn't born yet.
 */
function ageAtMatrixPremiere(input) {
  let output = null;
  const matrixPremiereDate = new Date('1999-03-31'); // In the US
  // put your code between here

  const inputList = input.split('/');
  const birthday = new Date(`${inputList[2]}-${inputList[1]}-${inputList[0]}`);
  const ageDate = new Date(matrixPremiereDate - birthday.getTime());
  // '1970' because Date objects in JS are based on a time value that is the
  // number of milliseconds since 1 January 1970 UTC.
  const difference = ageDate.getUTCFullYear() - 1970;

  if (difference < 0) {
    output = 'Was not even born!';
  }
  else if(difference === 0) {
    output = 'Was just born!';
  }
  else {
    output = Math.abs(difference);
  }

  /*
    // 'Nested ternary version'
    output = difference === 0
      ? 'Was just born!'
      : difference < 0
      ? 'Was not even born!'
      : Math.abs(difference);
   */

  // and here
  return output;
}

// exporting to be able to test it
module.exports = ageAtMatrixPremiere;
