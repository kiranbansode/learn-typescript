"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('todo-input');
var form = document.querySelector('form');
var list = document.getElementById('todo-list');
var todos = [];
var handleSubmit = function (event) {
    event.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = '';
    input.focus();
};
function createTodo(todo) {
    var newLI = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = '';
// });
