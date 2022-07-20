// this is a one line comment

/*
multiple
line
comment
*/

//Declare
// CamelCase first word lower case second one upper case
// variable can have numbers, letters, $,_
// variable can not have spaces or start with a number

var myVar;

var a;
a = 47;

//console.log(a);
//console.log("this is a");

var b;
b = a;
console.log("b is equal to: " + b);

// assignment operator
var c = 0;

//string
var myFirstName = "Sayyeda";
var myLastName = "Uzma";
var num = "12";

var number = "code";

var x = 4; 
var y = 10;
var z = "I am a ";

x = x + 1;
y = y + 5;
z = z + "coder";

console.log(x);
console.log(y);
console.log(z);

// same varible defined twice means only latest one will show (uzma)
var camper = "Sayyeda";
var camper = "Uzma";
console.log(camper);

//let can not defined twice unlike var it will show error
let student = "Sayyeda";
// let student ="Uzma";
console.log(student);

//const can not be changed at all
//const usually named in all uppercase
const FAV_PET = "Cats";
//FAV_PET = "Dogs";

// math can be done with var, let, const
const SUM = 10 + 10;
const DIFFERENCE = 45 - 20;
const QUOTIENT = 66 / 33;
const PRODUCT = 8 * 10;
console.log(SUM);
console.log(DIFFERENCE);
console.log(QUOTIENT);
console.log(PRODUCT);

let newvar = 47;
//newvar = newvar + 1;
//equivalent 
newvar++;
console.log(newvar);

newvar = newvar - 1;
//same as
newvar--;

let v = 1
v += 5;
console.log("this is v:" + v);

let s = 10
s -= 5;
console.log("this is s:" + s)

let m = 5;
m *= 2;
console.log("this is m:" + m)

let d = 10;
d /= 2;
console.log("this is d:" + d)

//boolean notes on paper