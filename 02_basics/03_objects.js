// singleton
// Object.create


// Object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Zain",
    "full name": "Zain Naqvi",
    [mySym]: "key1",
    age: 18,
    location: "Islamabad",
    email: "zain@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "zain@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zain@microsoft.com "

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());