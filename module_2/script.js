const button = document.querySelector("#submit-btn");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;

// CLICK, SCROLL, RESIZING BROWSER

// ATTACH A EVENT LISTENER
button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = "New Item";
  todoList.appendChild(newItem);
});

/* const nodeItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const todoNr = document.getElementsByClassName("todo-nr")[0];

console.log(nodeItems);

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 6";
todoList.appendChild(newItem);

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 7";
todoList.appendChild(anotherItem);

console.log(newItem);
console.log(nodeItems);

// Update the amount of items that we have

todoNr.innerText = nodeItems.length;
 */
