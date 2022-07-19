"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('todo-input');
btn.addEventListener('click', function () {
    alert(input.value);
    input.value = '';
});
