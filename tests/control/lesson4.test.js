// import the fn
const getCurrentAge = require('../../lessons/control/lesson4');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: 'someone born on 1st January 1980 (\'01/01/1980\') was 19 years old on The Matrix premiere',
  actual: getCurrentAge('01/01/1980'),
  expected: 19
});
test({
  text: 'someone born on 28th February 1989 (\'28/02/1989\') was 10 years old on The Matrix premiere',
  actual: getCurrentAge('28/02/1989'),
  expected: 10
});
test({
  text: 'someone born on 1st January 2000 (\'01/01/2000\') wasn\'t even born on The Matrix premiere',
  actual: getCurrentAge('01/01/2000'),
  expected: 'Was not even born!'
});
test({
  text: 'someone born on 31st March 1999 (\'31/03/1999\') was just born on The Matrix premiere',
  actual: getCurrentAge('31/03/1999'),
  expected: 'Was just born!'
});