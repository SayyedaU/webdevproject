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

/*if statement
var n = 23
if (n == 22) {
    console.log("this number is 22");
}
console.log("this number is not 22");
*/

/* if else statement
var n = 23
if(n==22) {
    console.log("this number is 22");
} else {
    console.log("this number is not 22");
}
*/

/*if else is statement 
var n = 23
if (n==22){
    console.log("this number is 22");
} else if (n==23) {
    console.log("this number is 23");
} else {
    console.log("this number is neither 22 or 23");
}
*/

// &&(both) and ||(or) operator 
var n = 23
if (n == 22 ||  n == 23) {
    console.log("n is 22 or 23");
} else {
    console.log("n is neither 22 or 23");
}

var number = "27";

if (number == 47) {
    console.log("checked: this number is 47");
} else {
    console.log("checked: this number isn't 47");
}

// ++ -- 
number++;
number--;
console.log(number);

// concatenation of strings
console.log("number = " + number);
console.log("number is " + number + ". This number is prime.");

// >= <=
var numCheck = 20;
if (number <= 10) {
    console.log("num is less than or equal to 10");
} else if ( number >= 11) {
    console.log("num is greater than or equal to 11");
} else {
    console.log("this is not a number");
}

const PET = "dog";

if (PET === "lizard") {
    console.log("I own a lizard");
} else if (PET === "dog") {
    console.log("I own a dog");
} else if (PET === "cat") {
    console.log("I own a cat");
} else {
    console.log("I don't own a pet");
}

//switch statements
switch(PET) {
    case "lizard":
        console.log("I own a cat");
        break;
    case "dog":
        console.log("I own a dog");
        break;
    case "cat":
        console.log("I own a cat");
        break;
    default:
        console.log("I don't own a pet");  
        break;          
}

// Grouping cases
const COUNTRY = "Ireland";
switch(COUNTRY) {
    case "France":
    case "Spain":
    case "Poland":
    case "Ireland":
        console.log("This country is in Europe.");
        break;   
    case "United States":
        console.log("This is country is in North America.");
        break;
    default:
        console.log("This country is not in North America or Europe.");
        break;             


}

// global scope
const ERRAND = "Going Shopping";
//block scope (the message can only be used in the scope)
switch (ERRAND) {

    case "Going to the Dentist": {
        let message = " I hate going to the dentist";
        console.log(message);
        break;
    }
    case "Going Shopping": {
        let message = "I love to shop!";
        console.log(message);
        break;
    }    
    case "Chores": {
        let message = "I hate doing chores";
        console.log(message);
        break;
    }
    default: {
        let message = "No errands";
        console.log(message);
        break;
    }        
}

// structure of a function
// alert, confirm, prompt
function myFunction() {
    //whatever
    //alert("I am an alert box!");


    /*var txt;
    if (confirm("Press a button")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
document.getElementById("demo").innerHTML = txt;
}
*/

let text;
let person = prompt("Please enter your name:","Baymax");
if (person == null || person == "") {
    text = "User cancelled the prompt";
} else {
    text = "Hello " + person + "! How are you today?";
}
document.getElementById("demo"). innerHTML = text;
}

/*while loop
var i = 0;
console.log("Starting Loop");
while (i < 10) {
    console.log("The number is " + i);
    i++;
}
console.log("End of Loop");
*/

/*Do While Loop
var i = 10;
console.log("Starting loop");
do {
    console.log("The number is "+ i);
    i--;
} while ( i > 0);
console.log("Ending Loop");
*/

//for loop
var count;
console.log("Start Loop");
for(count = 0; count < 10; count++){
    console.log("Current Count:" + count);
}
console.log("Loop End");

//array
var fruits = ["apple","banana", "mango", "pear"];
// how to call- 1st fruit fruits[0]; 2nd fruit fruits[1]; ... 
// console.log(fruits[0] + " is the first fruit");
// console.log(fruits[1] + " is the second fruit");

var i;
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//list in js
let text = "<ul>";
fruits.forEach(fruitFunction);
text += "</ul>";
document.getElementById("fruitText").innerHTML = text;

function fruitFunction(value) {
    text += "<li>" + value + "</li>";
}

//counter buttons in js
let counterHTML = document.getElementById("counterId");
console.log(counterHTML);
let totalCount = 0;
function increaseCount() {
    totalCount += 1;
    counterHTML.textContent = totalCount;
}

function decreaseCount() {
    totalCount -= 1;
    counterHTML.textContent = totalCount;
}

function resetCount() {
    totalCount = 0;
    counterHTML.textContent = totalCount;
}

//button to change background color 
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    if (color == 'black') {
        document.body.style.color = "yellow";
    }
}


//Loop Numbers
let result = document.getElementById("result");
console.log(result);
let counter = "";
let e = 0;
function sequenceNumbers() {
    let number = document.getElementById("numberId").value;

    let increase = document.getElementById("increaseId").value;

    let max = parseInt(increase) + parseInt(number) + 1;

    for(e = ++number; e < max; e++) {
        counter += e;
        counter += " ";
    }
    result.textContent = counter;
}


