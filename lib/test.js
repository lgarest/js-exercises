const chalk=require('chalk');

let counter = 1;

function assertEqual(msg, a, b) {
  const result = a === b && chalk.green('OK')
    || `${chalk.red('Fail')}: got ${chalk.red(a)} and was expecting ${chalk.green(b)}`;
  const colorCounter = `  #${a === b
    && chalk.green(counter++)
    || chalk.red(counter++)
  }`
  console.log(`${colorCounter}: Testing that ${msg} => ${result}`);
}

module.exports = assertEqual;