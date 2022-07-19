const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todo-list')!;

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const newTodoText = input.value;
	const newLI = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';

	newLI.append(newTodoText);
	newLI.append(checkbox);

	list?.append(newLI);
	input.value = '';
	input.focus();
};

form.addEventListener('submit', handleSubmit);

// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = '';
// });
