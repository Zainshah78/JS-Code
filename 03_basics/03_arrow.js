const user = {
    username: "zain",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function box() {
    let username = "zain naqvi"
    console.log(this.username);
}

//box()

/* const chai = function () {
    let username = "zain"
    console.log(this.username);
}

chai() */

const chai = () => {
    let username = "zian"
     console.log(this.username);
}

//chai()

/*  const addTwo = (num1, num2) => {
    return num1 + num2
 }

 console.log(addTwo(3, 5));
 */

 //const addTwo = (num1, num2) => num1 + num2

//  const addTwo = (num1, num2) => (num1 + num2)

 const addTwo = (num1, num2) => ({username: "zain"})

 //console.log(addTwo());
