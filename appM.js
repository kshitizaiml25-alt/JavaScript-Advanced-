// Module Import File

//default import
import multiply, { add, subtract } from "./mathOperationsM.js";
console.log(multiply(2, 2));

//named import
import { add, subtract } from "./mathOperationsM.js";
console.log(add(2, 3));
console.log(subtract(3, 2));
