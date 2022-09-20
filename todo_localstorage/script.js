// initially jacked from mozilla; heavily reworked into a basic "todo" page
const list = document.querySelector('.list');
const todoSubmit = document.querySelector('.todoSubmit');
let todoCount = 1;

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearTodos);    

todoSubmit.addEventListener('click', addTodo);

if (localStorage.length > 0) {
    // console.log('localstorage length: ' + localStorage.length);
    todoCount = localStorage.length;

    for (let i = 1; i <= localStorage.length; i++) {
        // console.log('localStorage contents at ' + i + ': ' + localStorage.getItem(i));
        printTodo(localStorage.getItem(i));
    }
}

function addTodo() {
    storeTodo();
    todoField.value = '';
    todoField.focus();
    todoCount++;
}

function storeTodo() {
    let newTodo = todoField.value;
    localStorage.setItem(todoCount, newTodo);
    printTodo(newTodo);
}

function printTodo (print) {
    list.innerHTML += `<li>${print}</li>\n`;
}

function clearTodos() {
    todoCount = 0;
    // console.log('LocalStorage length prior to clear: ' + localStorage.length);
    localStorage.clear();

    const resetTodos = document.querySelectorAll('.todos p');
    for (const todo of resetTodos) {
        todo.textContent = '';
    }

    todoField.value = '';
    todoField.focus();
}