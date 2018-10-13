# js-exercises

Some simple JS exercises for beginners to start with.

The exercises are located in the `js-exercises/exercises` folder and they look like this:

```javascript
/**
 * Greets the world with your first steps!
 * @return {str}
 */
function hello() {
  let output = null;
  // put your code between here


  // and here
  console.log(output);
  return output;
}

// exporting to be able to test it
module.exports = hello;
```

Rules:
-
- Put your solution **in the stated place between the comments**
- **Don't** modify the rest of the code ❌
- Enjoy the process 😊

Testing:
-
Once you have written your solution and you want to check if everything is correct, in the terminal use:

```
make
```
to run all exercises tests or
```
make lesson0
```
to run only the dedicated tests. In this case the ones only for the `lesson0.js` file.

You should be seeing something like
```
$ make lesson0
Testing ./exercises/lesson0.js file:
null
  #1: Testing that it returns Hello World! => Fail: got null and was expecting Hello World!
```