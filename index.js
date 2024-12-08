// const {
//   generateRandomNumber,
//   celciousToFahrenheit,
// } = require("./exports/commonjs_utils");

import getpostsListByIndex, { getpostsList } from "./exports/esmodule_utils.js";

// console.log(`Random Number ${generateRandomNumber()}`);
// console.log(`Celcius to Fa ${celciousToFahrenheit(37.5)}`);
console.log(getpostsList());
console.log(getpostsListByIndex(0));
