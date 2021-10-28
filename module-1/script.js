const greet = () => {
  let nameInput = prompt("What is your name?");
  console.log(`Welcome to our website ${nameInput}`);
};

const signUp = ()=> {
  greet();
}

signUp();
