// 3-value_argument.js

const arg = process.argv[2]; // the first argument after "node file.js"

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
