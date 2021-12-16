// Selectors
const taskInput = document.querySelector(".todo-form__input");
const taskButton = document.querySelector(".todo-form__button");
const tasks = document.querySelector(".todo-form__task");

// Event Listeners

taskButton.addEventListener("click", addTodo);

// Functions

function addTodo(event) {
  event.preventDefault();
  // Task Div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todo");
  // New Task 
  const newTask = document.createElement("p")
  newTask.innerText = "hey"
  newTask.classList.add("task-item")
  taskDiv.appendChild(newTask);
  // Check Button
  const checkBtn = document.createElement("button")
  checkBtn.innerText = "V"
  // Delete Button
  const deleteBtn = document.createElement("button")
  checkBtn.innerText = "X"
}
