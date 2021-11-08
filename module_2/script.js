const nodeItems = document.querySelectorAll(".item");
const todoList = document.querySelector(".todo-list");
const todoNr = document.querySelectorAll(".todo-nr")[0];

console.log(nodeItems);

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 6";
todoList.appendChild(newItem);

console.log(newItem);
console.log(nodeItems);

// Update the amount of items that we have

todoNr.innerText = nodeItems.length;
