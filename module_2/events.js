const button = document.querySelector("#submit-btn");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

/* button.addEventListener("click", () => {
  mainTitle.classList.toggle("title-change");
}); */

const items = todoList.children;

// CLICK, SCROLL, RESIZING BROWSER

// ATTACH A EVENT LISTENER
button.addEventListener("click", (event) => {
  event.preventDefault();
  // Creating element
  const newItem = document.createElement("li");
  // Adding class
  newItem.classList.add("item");
  // Adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;

  // Create the element and attach the listener
  newItem.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.remove();
    todoNr.innerText = items.length;
  });
});

todoList.addEventListener("click", () => {
  console.log("The UL executes");
  todoList.classList.toggle("fade");
});
