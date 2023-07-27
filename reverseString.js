// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const revString = (args) => {
  const str = args.toString();
  let newStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(revString("hello world"));
