// import the fn
const hello = require('../../lessons/control/lesson0');

// and test it
const test = require('../../lib/test');
test('it returns \'Hello World!\'', hello(), 'Hello World!');