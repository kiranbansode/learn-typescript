interface Todo {
	text: string;
	completed: boolean;
}

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todo-list')!;

const todos: Todo[] = [];

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(newTodo);
	todos.push(newTodo);

	input.value = '';
	input.focus();
};

function createTodo(todo: Todo) {
	const newLI = document.createElement('li');
	const checkbox = document.createElement('input');
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
