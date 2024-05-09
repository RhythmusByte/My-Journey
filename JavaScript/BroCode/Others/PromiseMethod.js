function goneHome() {
  return new Promise((resolve, reject) => {
    let gone = true;

    if(gone) {
      resolve('Afna Gone Home');
    }
    else {
      reject("Afna Didn't Gone Home");
    }
  });
}

function clean() {
  return new Promise((resolve, reject) => {
    let cleaned = true;

    if(cleaned) {
      resolve('Afna Cleaned Home');
    }
    else {
      reject("Afna Didn't Cleaned Home");
    }
  });
}

function laundry() {
  return new Promise((resolve, reject) => {
    let washed = true;

    if(washed) {
      resolve('Afna Done Laundry');
    }
    else {
      reject("Afna Didn't Washed The Clothes");
    }
  });
}

function makeup() {
  return new Promise((resolve, reject) => {
    let makeuped = true;

    if(makeuped) {
      resolve('Afna Put The Make Up');
    }
    else {
      reject("Afna Didn't Put The Make Up");
    }
  });
}

goneHome().then(value => {console.log(value); return clean()})
          .then(value => {console.log(value); return makeup()})
          .then(value => {console.log(value); return laundry()})
          .then(value => {console.log(value); console.log("Afna The Great")})
          .catch(error => console.error(error));
