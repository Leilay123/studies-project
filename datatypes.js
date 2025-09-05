/**
 * DATATYPES:
 * 
 * 0: Datatypes are values that variables can hold on to. Each data type have specific properties that will
 * affect how it behaves and how it's manipulated
 * 
 * 1: There's multiple datatypes, and they vary between simple and complex. Simple datatypes are STRING, NUMBER,
 *  BOOLEAN, NULL, and UNDEFINED
 * 
 * 1.5: Complex datatypes are ARRAY, OBJECT, and FUNCTIONS
 * 
 * 2: Primitive (or simple) are by copy and complex values are by references.
 * 
 */

// TYPES OF SIMPLE DATATYPES //

// 1. STRINGS //
/**
 * Strings (text strings) are words (layman's terms). However to make something a string it must be in quotes
 * either 'single quotes' or "double quotes". Strings are mainly use to store text
 * 
 */
var string = 'this is a string'; // 'this is a string' is a string due to it being in single quotes
var stringNum = '456'; // '456' is a string because it's in single quotes

// 2. NUMBERS //
/**
* Numbers are intergers.
*/

var num = 35; // 35 is a number
var decNum = 0.43; // 0.43 is a number

// 2.5 SPEICAL NUMBERS //
/**
* Special values like infinity, -infinity and NUN are special numbers
*/

// NaN //
/**
* NaN stands for "Not a Number"
*/
var notA = NaN // print NaN

// INFINITY + -INFINITY
/**
* Infinity is a numeric value that means infinity 
* 
* -Infinity represent negative infinity
*/

var posInfin = Infinity // print => Infinity

var negInfin = -Infinity // print => -Infinity

// BOOLEAN //
/**
* Booleans are mainly use for comparisons and conditions. Booleans only have 2 values TRUE and FALSE
* 
* For a value to be a BOOLEAN, it must be written in lowercase AND written without quotes
*/

var x = 10;

console.log(x === 20) //  print => false
console.log(x != 245) //  print => true

// NULL//
/**
* Null is the absence of any value
*/

var boo = null
console.log(boo) // print => null

// UNDEFINED //
/**
*  Undefined is when a variable doesn't have any value
* 
*  Undefineds aren't created, it's automatically assigned to a variable with no value
*/

var emptyVar;
console.log(emptyVar) // print => undefined

/**
* COPY BY VALUE
* 
* 0: Simple / Primative data types are COPY BY VALUE
* 
* 1: if you assigned a variable with another varaibe that have a simple data type, it'll copy that value
* 
* 2: Any change to first variable will affect the second variable, however if the second variable is assigned to different value
*  the second variable will have that value
* 
*/

var a = 1; // print => 1
var b = a; // print => 1

b = 100
console.log(b) // print => 100

// TYPES OF COMPLEX DATATYPES //

// ARRAY //

/**
* Arrays are complex data types that are good for holding a list of similar things, like names or numbers
* 
* Arrays are created by [Square Brackets]
*/

var ArrayTest = ["purse", "fishfood", "net"] // An array thats a list of collection of random things 
var emptyArray = [] // An empty array

// OBJECT //

/**
*  Object are complex data types that are ideal for holding different values. Unlike Arrays, they use a collection
*  of key/value pairs.
* 
*  Objects are created with {curly brackets} 
*/

var objectTest = {figureSource: 'Demon Slayer', isInBox: true} // an object of an anime figure
var emptyObject = {} // An empty object 

// FUNCTION // 

/**
*  Functions are blocks of code that can preform a spefic task. Functions take data as input,
*  the function preform something with the data and then a result is return
* 
*  Functions are created with the 'function' keyword
*/

function changeIntoCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}
console.log(changeIntoCelsius(66)) // print => 18.88
/**
* COPY BY REFERENCE
* 
*  0: Only complex values are COPY BY REFERENCE
* 
*  1: The variable doesn't make a copy of the value that they're assigned to, instead they make a refence to it.
* 
*  2: Any manipulation of the first variable will affect the second variable as well
* 
*  3: The difference is that the data itself isn't copied into the new variable but referenced 
*/

var user = { name: "Doodle" };

var admin = user; // print => { "name": "Doodle"  }

admin.name = "Stars"

console.log(admin); // print => { "name": "Stars"  }