const message = require('./test-message');

function assertEqual(msg, a, b, counter) {
  const areEqual = a === b;
  message(areEqual, msg, a, b, counter);
  return areEqual;
}

function assertLists(msg, listA, listB, counter=1) {
  const areEqual = listA.toString() === listB.toString();
  message(areEqual, msg, listA, listB, counter);
  return areEqual;
}

const Test = () => {
  let counter = 1;

  const testCase = ({
    text='it fails because is not defined',
    actual=2,
    expected=3,
  }) => {
    (Array.isArray(expected)
      ? assertLists
      : assertEqual
    )(text, actual, expected, counter);
    counter++;
  };

  return ({
    testCase
  });
}
module.exports = Test;