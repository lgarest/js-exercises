// import the fn
const celsiusToFahrenheit = require('../../lessons/control/lesson3');

// and test it
const test = require('../../lib/test');

test('5 is an odd number', celsiusToFahrenheit(60), 140);

test('3 is an odd number', celsiusToFahrenheit(0), 32);

test('2 is not an odd number', celsiusToFahrenheit(-38), -36.4);

test('0 is not an odd number', celsiusToFahrenheit(-37), -34.6);

test('\'a\' is not a number', celsiusToFahrenheit('a'), 'not a number');

test('[] is not a number', celsiusToFahrenheit([]), 'not a number');

test('{} is not a number', celsiusToFahrenheit({}), 'not a number');