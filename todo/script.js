// initially jacked from mozilla; heavily reworked into a basic "todo" page
const list = document.querySelector('.list');
const todoSubmit = document.querySelector('.todoSubmit');
let todoCount = 0;

function addTodo() {
    const newTodo = todoField.value;
    list.innerHTML += `<li>${newTodo}</li>\n`;
    todoField.focus();
    if (todoCount === 1) { // do only when todoCount = 1; otherwise new buttons are continually added.
        clearButton = document.createElement('button');
        clearButton.textContent = 'Clear todos';
        document.body.append(clearButton);
        clearButton.addEventListener('click', clearTodos);    
    }
    todoCount++;
}

todoSubmit.addEventListener('click', addTodo);

function clearTodos() {
    todoCount = 0;

    const resetTodos = document.querySelectorAll('.todos p');
    for (const todo of resetTodos) {
        todo.textContent = '';
    }

    clearButton.parentNode.removeChild(clearButton);

    todoField.focus();
}