// Construct a function

function User(name,tech){
  this.name = name;
  this.tech = tech;
  console.log(this);
}

let user = new User('Akhil','JS');
