const todos = ['walk the dog', 'water the plants', 'sand the chairs'];

const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

for (const todo of todos) {
	todoList.appendChild(renderTodoInReadMode(todo));
}

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
	span.textContent = todo;
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
	//todo: inplement
}
function addTodo() {
	//todo: implement
}

function removeTodo(idx) {
	//todo: implement
}
