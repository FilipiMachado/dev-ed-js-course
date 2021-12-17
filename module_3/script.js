// Selectors
const taskInput = document.querySelector(".todo-form__input");
const taskButton = document.querySelector(".todo-form__button");
const taskList = document.querySelector(".task-list");

// Event Listeners
taskButton.addEventListener("click", addTodo);
taskList.addEventListener("click", removeTask);

// Functions

function addTodo(event) {
  event.preventDefault();
  /* taskInput.value = ""  */

  // Task Div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todo");

  // New Task
  const newTask = document.createElement("p");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");
  taskDiv.appendChild(newTask);

  // Check Button
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "V";
  checkBtn.classList.add("check-btn");
  taskDiv.appendChild(checkBtn);

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete-btn");
  taskDiv.appendChild(deleteBtn);

  // Append to List
  taskList.appendChild(taskDiv);
}

function removeTask(e) {
  let item = e.target;
  // Remove Check
  if (item.classList[0] == "delete-btn") {
    console.log(item.parentElement)
    const todo = item.parentElement
    todo.remove();
  }
}

/* function removeCheck(e) {
  let item = e.target;
  // Remove Check
  if (item.classList[0] == "delete-btn") {
    console.log(item.parentElement)
    const todo = item.parentElement
    todo.remove();
  }
}
 */