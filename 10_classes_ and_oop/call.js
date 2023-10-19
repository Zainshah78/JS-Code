function setUserName(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("zain", "zain@gmail.com", 1178);

console.log(chai);
