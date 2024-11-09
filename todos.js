const todos = ['walk the dog', 'water the plants', 'sand the chairs'];

const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

for (const todo in todos) {
	// todoList.appendChild(renderTodoInReadMode(todo));
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
	//todo: implement
}
function addTodo() {
	//todo: implement
}
