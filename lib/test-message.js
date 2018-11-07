const chalk=require('chalk');

const green = chalk.green;
const red = chalk.red;

const error = (counter, a, b) => ({
  colorCounter: red(counter),
  result: `${red('Error')}: got ${red(a)} and was expecting ${green(b)}`,
});

const pass = counter => ({
  colorCounter: green(counter),
  result: `[${green('✔')}]`,
});

function message(condition, msg, a, b, counter) {
  const {colorCounter, result} = !condition
    ? error(counter, listA, listB)
    : pass(counter);
  const outputMsg = `  #${colorCounter}: ${msg} => ${result}`;
  console.log(outputMsg);
}

module.exports = message;
