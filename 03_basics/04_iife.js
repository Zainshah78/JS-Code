// Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
}

//chai()

(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // non name iife
    console.log(`DB CONNECTED TWO ${name}`);
})("zayn")