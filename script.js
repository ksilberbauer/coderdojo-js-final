
var ENTER = 13;

function handleAdd(event) {
  var todoInput = event.target;
  var newTodoText = event.target.value.trim();

  if (event.which == ENTER && newTodoText != "") {
    addTodo(newTodoText);
    todoInput.value = "";
  }
}

function addTodo(todoText) {
  var newTodoItem = document.createElement('li');
  var newTodo = document.createElement('span');
  newTodo.innerHTML = todoText;
  newTodoItem.appendChild(newTodo);
  
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.onclick = function () {
    this.parentElement.remove(); // "this" is the deleteButton
  };
  newTodoItem.appendChild(deleteButton);

  var todoList = document.getElementById('todoList');
  var todoInput = document.getElementById('todoInput');
  todoList.insertBefore(newTodoItem, todoInput);
}

function saveTodos() {
  alert('Saving...');
}

function loadTodos() {
  alert('Loading...');
}
