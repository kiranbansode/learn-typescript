"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('todo-input');
var form = document.querySelector('form');
var list = document.getElementById('todo-list');
var handleSubmit = function (event) {
    event.preventDefault();
    var newTodoText = input.value;
    var newLI = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = '';
    input.focus();
};
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = '';
// });
