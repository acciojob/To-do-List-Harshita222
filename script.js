//your code here

const inputbtn=document.getElementById("newTodoInput");
const todobtn=document.getElementById("addTodoBtn");
const display= document.getElementById("todoList")
todobtn.addEventListener("click",function(){
	let inputValue = inputbtn.value;
	if (inputValue.trim() !== "") {
    let newTodo = document.createElement("li");
    newTodo.textContent = inputValue;
    display.appendChild(newTodo);
    inputbtn.value = "";
  } else {
    // If input field is empty, show an alert or do nothing
    alert("Cannot add an empty task");
  }
})