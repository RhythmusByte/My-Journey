// Compare 2 objects using a function

function compare(lap1,lap2) {
  if(lap1.ram>lap2.ram){
    console.log(`${lap1.brand} have more RAM`);
  }
  else {
    console.log(`${lap2.brand} have more RAM`);
  }
}

let laptop1 = {
  cpu: 'i7',
  ram: 16,
  brand: 'HP'
};

let laptop2 = {
  cpu: 'i9',
  ram: 32,
  brand: 'Lenova'
};

console.log(laptop1, laptop2);
compare(laptop1,laptop2);
