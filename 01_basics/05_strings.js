const name = "zain"
const repoCount = 50 

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo conut is ${repoCount}`);

const gameName = new String(`zain`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`i`));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-4, 3)
console.log(anotherString);

const newStringOne = "     zain     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zain.com/zain%20shah"

console.log(url.replace('%20', '-'));

console.log(url.includes('zain'));

console.log(gameName.split('-'));