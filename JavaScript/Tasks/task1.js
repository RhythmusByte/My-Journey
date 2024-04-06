// Create an object inside an object
// Delete anything from the object

console.log(`Create an object inside an object\nDelete anything from the object\n`);
let user = {
  name: 'Akhil',
  age: 19,
  tech: 'JavaScript',
  hobbies: {
    game: 'BGMI',
    sports: 'Soccer',
  }
};

delete user.tech;
console.log(user);
