let crew = [
  {name: "Monkey D Luffy", position: "Captain", dfUser: true},
  {name: "Roronoa Zoro", position: "Swordsman", dfUser: false},
  {name: "Nami", position: "Navigator", dfUser: false},
  {name: "Usop", position: "Sniper", dfUser: false},
  {name: "Vinsmoke Sanji", position: "Cook", dfUser: false},
  {name: "Tony Tony Chopper", position: "Doctor", dfUser: true},
  {name: "Nico Robin", position: "Archaelogist", dfUser: true},
  {name: "Franky", position: "Shipwright", dfUser: false},
  {name: "Brook", position: "Musician", dfUser: true},
  {name: "Jimbei", position: "Helmsman", dfUser: false}
];

// crew.forEach(crew => console.log(crew.name, crew.position, crew.dfUser));
crew.map(crew => console.log(crew.name));
