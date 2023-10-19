// let myName = "zain    ";
// let myChannel = "chai";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.zain = function () {
  console.log(`Zain is present in all objects`);
};

Array.prototype.heyZain = function () {
  console.log(`Zain say Hello`);
};

// heroPower.zain();
// myHeros.zain();
// myHeros.heyZain();
// heroPower.heyZain();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "chaiAurCode";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length} `);
};

anotherUserName.trueLength();
"zain".trueLength();
"iceTea".trueLength();
