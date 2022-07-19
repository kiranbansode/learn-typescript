"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('todo-input');
var form = document.querySelector('form');
var handleSubmit = function (event) {
    event.preventDefault();
    console.log('Submit');
};
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = '';
// });
