#!/usr/bin/node

// Function that adds two integers
function add(a, b) {
  return a + b;
}

// Get arguments from command line
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

// Print the result
console.log(add(first, second));
