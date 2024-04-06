// Create a method inside an Object

let user = {
  name: function name(name) {
    console.log(`Hello ${name}`);
  },
  age: 19,
};

let firstName = user.name('Akhil');
console.log(user);
