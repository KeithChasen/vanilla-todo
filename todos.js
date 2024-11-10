const todos = [];

const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

function render() {
	for (const todo of todos) {
		todoList.appendChild(renderTodoInReadMode(todo));
	}
}

render();

addTodoInput.addEventListener('input', () => {
	addTodoButton.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener('keydown', ({ key }) => {
	if (key === 'Enter' && addTodoInput.value.length >= 3) {
		addTodo();
	}
});

addTodoButton.addEventListener('click', addTodo);

function renderTodoInReadMode(todo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = todo.description;
	span.style = todo.done ? 'text-decoration: line-through;' : 'none';
	span.addEventListener('dblclick', () => {
		const idx = todos.indexOf(todo);
		todoList.replaceChild(renderTodoInEditMode(todo), todoList.childNodes[idx]);
	});
	li.append(span);

	const button = document.createElement('button');
	button.textContent = 'Done';
	button.addEventListener('click', () => {
		const idx = todos.indexOf(todo);
		removeTodo(idx);
	});
	li.append(button);
	return li;
}

function renderTodoInEditMode(todo) {
	const li = document.createElement('li');

	const input = document.createElement('input');
	input.type = 'text';
	input.value = todo.description;
	li.append(input);

	const saveBtn = document.createElement('button');
	saveBtn.textContent = 'Save';
	saveBtn.addEventListener('click', () => {
		const idx = todos.indexOf(todo);
		updateTodo(idx, input.value);
	});
	li.append(saveBtn);

	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		const idx = todos.indexOf(todo);
		todoList.replaceChild(renderTodoInReadMode(todo), todoList.childNodes[idx]);
	});
	li.append(cancelBtn);

	return li;
}
function addTodo() {
	const description = addTodoInput.value;

	if (todos.find(todo => todo.description === description)) {
		alert('such todo is already added');
		return;
	}

	const newTodo = {
		description,
		done: false,
	};
	todos.push(newTodo);
	const todo = renderTodoInReadMode(newTodo);
	todoList.append(todo);

	addTodoInput.value = '';
	addTodoButton.disabled = true;

	readTodo(description);
}

function readTodo(description) {
	const message = new SpeechSynthesisUtterance();
	message.text = `Added: ${description}`;
	message.voice = speechSynthesis.getVoices()[0];
	speechSynthesis.speak(message);
}

function updateTodo(idx, description) {
	todos[idx].description = description;
	const todo = renderTodoInReadMode(todos[idx]);
	todoList.replaceChild(todo, todoList.childNodes[idx]);
}

function removeTodo(idx) {
	todos[idx].done = true;
	const todo = renderTodoInReadMode(todos[idx]);

	todoList.replaceChild(todo, todoList.childNodes[idx]);
}
