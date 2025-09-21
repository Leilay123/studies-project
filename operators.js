/**
 * OPERATORS:
 * 
 * 0: Operators are symbols/keywords to preferom operations on values or variables. 
 * 
 * 1: There's multiple types of operators, ASSIGNMENT, ARTIHMETIC, COMPARSION
 *  LOGICAL, UNARY, and TERNARY. Each one do different things
 * 
 */

// ASSIGMENT OPERATOR //
/**
 * Assigment Operators are used to assign values to variables
 */

x = 10 // => 10
y = 20 // => 20

// ADDITION ASSIGNMENT
/**
 * Adds value to the right operand and reassign the result to the variable
 */

let a = 2;
const b = 3;

console.log(a); // => 2

console.log(a += b ); // => 4

// SUBTRACTION ASSIGNMENT
/**
 * Subtract the value to the right operand and reassign the result to the variable
 */

let subber = 4;

console.log(subber -= 1); // => 3

// MULTIPLICATION ASSIGNMENT
/**
 * Multiplies value to the right operand and reassign the result to the variable
 */

let yooMul = 4;

console.log(yooMul *= 2); // => 3

// DIVISION ASSIGNMENT
/**
 * Divides value to the right operand and reassign the result to the variable
 */

let diviy = 10;
const moo = 2;
console.log(diviy /= moo); // => 5
console.log(diviy /= 0); // => Infinity

// REMIANDER ASSIGNMENT
/**
 * Also divides value to the right operand and reassign the result to the variable
 */

let ramdani = 50;
console.log(ramdani %= 10); // => 0

// ARTIHMETIC OPERATOR //
/**
 * Preform artithmetic (or math) on numbers, returns a number value
 * 
 * Operators are + (addition), - (Subtraction), * (Multiplication), 
 * ** (Exponentiation), / (Division), % (Remainder), ++ (Increment), --(Decrement)
 */

// + ADDITION //
/**
 * Add two values together, can add two numbers togeter and add strings together
 */

// Number + Number => Addition 
let x = 1 + 2;
console.log(x); // => 3

// Number + String => Concatenation
let y =  5 + "hello"; 
console.log(y); // => 5hello

// - SUBTRACTION //
/**
 * Gives the difference between two operands in the form of numerical value
 */

let x = 10 - 7;
console.log( x ); // =>3

// * MULTIPLICATION //
/**
 * Gives the product of operands
 */

let x = 3 * 3;
let y = -4 * 4; 
console.log(x); // => 9
console.log(y); // => -16


// ** EXPONENTIATION //
/**
 * Gives the result of raising the first operand 
 * to the power of the second operand.
 */

// Number ** Number => Exponential of the number

// let x = -4 ** 2 // This is an incorrect expression
let y = -(4 ** 2);
let z = 2 ** 5;

console.log(y); // => -16
console.log(z); // => 32


// / DIVISION //
/**
 * Gives the quotient of its operands
 */

let x = 5 / 2;
let y = 1.0 / 2.0;
console.log(x); // => 2.5
console.log(y); // => 0.5

// % REMAINDER //
/**
 * Returns the remainder left over when a dividend is divided by a divisor
 */

// Number % Number => Modulus of the number
let x = 9 % 5;
let y = -12 % 5;
let z = 1 % -2;
let a = 5.5 % 2;
let b = -4 % 2;
let c = NaN % 2;

console.log(x); // => 4
console.log(y); // => -2

// ++ INCREMENT //
/**
 * Adds one to its operand and returns a value.
 */

let a = 2;
b = a++; // b = 2, a = 3

console.log(a); // => 3
console.log(b); // => 2

// -- DECREMENT //
/**
 * Subtracts one from its operand and returns a value.
 */

let a = 2;
b = --a; 
 
console.log(a); // => -1
console.log(b); // => -1

// COMPARSION OPERATOR //
// LOGICAL OPERATOR //
// UNARY OPERATOR //
// TERNARY OPERATOR //
