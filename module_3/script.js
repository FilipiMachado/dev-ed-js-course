const taskInput = document.querySelector(".todo-form__input");
const taskButton = document.querySelector(".todo-form__button");
const tasks = document.querySelector(".todo-form__task");

taskButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newTask = tasks.value;
  console.log(newTask);
});

console.log(taskInput.value);
