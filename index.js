const {
  generateRandomNumber,
  celciousToFahrenheit,
} = require("./exports/commonjs_utils");

console.log(`Random Number ${generateRandomNumber()}`);
console.log(`Celcius to Fa ${celciousToFahrenheit(37.5)}`);
