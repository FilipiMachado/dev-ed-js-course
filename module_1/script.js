/*

// FUNCTIONS

const greet = (text) => {
  console.log(`Welcome to our website ${text}`);
};

const signUp = () => {
  let nameInput = prompt("What is your name?");
  greet(nameInput);
};

signUp();

const maxNr = (n1 = 6, n2 = 5) => {
  if (n1 > n2) {
    return "n1 is bigger";
  } else {
    return "n2 is bigger";
  }
};

console.log(maxNr());
*/

// Generate a random number -- DONE
// Give the user the ability to guess --
// If they guess and they are wrong, ask them again (hint) --
// If they win, say they won --

const guessNumber = () => {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Pick a number between 1 a 10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You guessed too low");
    } else if (randomNr < guess) {
      console.log("You guessed too high");
    } else if (randomNr == guess) {
      alert("Your guess is RIGHT!");
    }
  } while (guess != randomNr);
};

guessNumber();
