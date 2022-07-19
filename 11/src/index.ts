const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('form')!;

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	console.log('Submit');
};

form.addEventListener('submit', handleSubmit);

// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = '';
// });
