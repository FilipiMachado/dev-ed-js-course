const taskInput = document.querySelector(".todo-form__input");
const taskButton = document.querySelector(".todo-form__button");
const tasks = document.querySelector(".todo-form__task");

taskButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Creating element
  const newTask = document.createElement("p");

  // Adding class
  newTask.classList.add("new-task");

  // Adding the text
  newTask.innerText = taskInput.value;

  console.log(newTask);
});

console.log(taskInput.value);
