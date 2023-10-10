// if

const isUserLoggedIn = true
const temperature = 41

if ( 3 < 2) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log('executed');

// <, >, <=, >=, !=, ==, ===, !==

// const score = 200

// if (score > 100) {
//     const power = 'fly'
//     console.log(`User power: ${power}`);
// }

//console.log(`User power: ${power}`);

const balance = 1000

//if (balance > 500) console.log("test"), console.log("test-2"); // Not requiremented

// if (balance < 500){
//     console.log("less then 500");

// } else if (balance < 750){
//     console.log("750");

// } else if (balance < 900){ 
//         console.log("less then 900");

//     } else {
//         console.log("less than 1200");
//     }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 < 3){
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged In");
}