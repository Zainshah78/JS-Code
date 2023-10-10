// var c = 300
/* let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = console.log("INNER: ", a);
}

for (let i = 0; i < array.length; index++) {
    const element = array[index];
    
} */

//console.log(a);
// console.log(b);
// console.log(c);

/* function one() {
    const username = "zain"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one() */


if (true) {
    const username = "zain"
    if (username === "zain") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website); // out of scop
}

//console.log(username);  // out of scop


// +++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++

console.log(addone(5));  // 6

function addone(num) {
    return num + 1
}


console.log(addTwo());  // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

 