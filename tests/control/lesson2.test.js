// import the fn
const evenOrOdd = require('../../lessons/control/lesson2');

// and test it
const test = require('../../lib/test');
test('5 is an odd number', evenOrOdd(5), 'odd');
test('3 is an odd number', evenOrOdd(3), 'odd');
test('2 is not an odd number', evenOrOdd(2), 'even');
test('0 is not an odd number', evenOrOdd(0), 'even');
test('\'a\' is not a number', evenOrOdd('a'), 'not a number');
test('[] is not a number', evenOrOdd([]), 'not a number');
test('{} is not a number', evenOrOdd({}), 'not a number');