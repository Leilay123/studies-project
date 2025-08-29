/**
 * VARIABLES:
 * 
 * 0: Something that contains a value that is use to hold something in memory. Variables can 
 * hold data types. Data types like String, Numbers, Array, Objects, Booleans, etc.
 * A variable's value can be change
 *  
 * 1. To create variables, they need to be declared (then ideally, initalizated)
 * 
 * 2. To use a variable they need to be declared and given as assignment
 */

// 1. DECLARATION

/* To declare a variables, it must be given either "var", "let", or "const"
* "var" and "let" work the similarly but "var" is older
* "const" are for variables that won't be changed later (if reassigned, it will cause an error)
*/
var fishFood; 
const tapiocaPearls; 
// both of these will print undefined because they weren't assigned (or given a value)
console.log(fishFood); // prints => undefined
console.log(tapiocaPearls);// prints => undefined

// 2. ASSIGNMENT or INITIALIZATION
// giving an variable a value to hold on to
fishFood = 'Pellets'
tapiocaPearls = 'Boba Pearls'
console.log(fishFood); // prints => 'Pellets'
console.log(tapiocaPearls); // prints => 'Boba Pearls'

// 3. RE-ASSIGNMENT
// Changing / updating the variable by giving it a new value
fishFood = 'BettaMin'
tapiocaPearls = 'cassava root'
console.log(fishFood); // prints => 'BettaMin'
console.log(tapiocaPearls); // prints => ReferenceError (Const are constant, they can't change)

/* HOISTING
 *
 * 1. When the program moves the variable to the top of the code to run it
 * TLDR: the variable can be used before it's declared
 * 
 */

//EXAMPLE

//VAR
x = 10; // assigning the variable 

var x; // declaring the variable

console.log(x) // print => 10
// This works because var is initailized

//LET  + CONST
dogName = "Zen";
let dogName; // => will return a reference error

catName = 'Biscuit';
const catName; // => will return a syntax error

// This happens because let and const are hoisted (or "moved" to the top) but the computer can't
//properly use them until it's declared

// for refence ALWAYS declare variables at the top, computer read things top to down
