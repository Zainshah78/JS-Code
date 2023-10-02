// Primitive 7 types : String, Number, Boolearn, BigInt, null, undefined, Symbol

// Reference ( Non primitive )

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// Array, Ojects, Functions

 
const cars = ["honda", "Hyundai", "Toyota", "Mercedes-Benz"];

let myObj = {
    name: 'zain',
    age: 78,
}

const myFuntion = function() {
    console.log("Hello World")
}

console.log(typeof outsideTemp);