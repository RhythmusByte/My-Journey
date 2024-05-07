class Address {
  constructor (island, ocean, universe) {
    this.island = island;
    this.ocean = ocean;
    this.universe = universe;
  }
}

class Person {
  constructor (name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const Person1 = new Person("Roronoa Zoro", 22, "Unknown Island", "East Blue Sea", "One Piece");

console.log(Person1);
