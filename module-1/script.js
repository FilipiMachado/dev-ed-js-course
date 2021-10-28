/*
const greet = (text) => {
  console.log(`Welcome to our website ${text}`);
};

const signUp = () => {
  let nameInput = prompt("What is your name?");
  greet(nameInput);
};

signUp();
*/

const maxNr = (n1, n2) => {
  if (n1 > n2) {
    return "n1 is bigger";
  } else {
    return "n2 is bigger";
  }
};

console.log(maxNr(6, 5));
