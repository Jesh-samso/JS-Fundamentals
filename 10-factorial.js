#!/usr/bin/node

// Recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from command line
const num = parseInt(process.argv[2]);

// Print the result
console.log(factorial(num));
