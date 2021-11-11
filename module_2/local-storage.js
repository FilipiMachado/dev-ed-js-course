/* localStorage.setItem("todo", "Feed the Cockatiel!");
localStorage.setItem("todo", "Rango pro Fil");
localStorage.setItem("user", "Fil");
 */
/* // Session Storage

sessionStorage.setItem("todoList", "Session feeding cat");
 */

// Getting Stuff
/* const user = localStorage.getItem("user");

console.log(user);
 */

const myTodoList = ["feed the cockatiel", "wash", "listen to aot ost"];

localStorage.setItem("todos", JSON.stringify(myTodoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
