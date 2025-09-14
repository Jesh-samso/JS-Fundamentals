// 2-arguments.js

const args = process.argv.slice(2); // get arguments after "node file.js"

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
