// Fetch an object inside the nested object using for in loop
console.log(`Fetch an object inside the nested object using for in loop`);

console.log(`Source Code:
let user = {
  firstName: 'Akhil',
  lastName: 'Mahesh',
  age: 19,
  tech: 'JavaScript',
  hobbies: {
    game: 'BGMI',
    sports: 'Soccer',
  },
  gender: 'Male'
};

for(let key in user){
  console.log(key, user[key]);
}`);

console.log(`\nOutput:\n`);

let user = {
  firstName: 'Akhil',
  lastName: 'Mahesh',
  age: 19,
  tech: 'JavaScript',
  hobbies: {
    game: 'BGMI',
    sports: 'Soccer',
  },
  gender: 'Male'
};
for(let key in user){
  console.log(key, user[key]);
}
