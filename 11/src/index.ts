interface Todo {
	text: string;
	completed: boolean;
}

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todo-list')!;

const todos: Todo[] = readTodos();

todos.forEach(createTodo);

function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos');
	if (todosJSON === null) return [];

	return JSON.parse(todosJSON);
}

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(newTodo);
	todos.push(newTodo);

	localStorage.setItem('todos', JSON.stringify(todos));

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
