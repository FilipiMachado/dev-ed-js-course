const button = document.querySelector("#submit-btn");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");

/* button.addEventListener("click", () => {
  mainTitle.classList.toggle("title-change");
}); */

const items = todoList.children;

// CLICK, SCROLL, RESIZING BROWSER

// ATTACH A EVENT LISTENER
button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
});

for (item of items) {
  item.addEventListener("click", () => {
    console.log("delete");
  });
}
