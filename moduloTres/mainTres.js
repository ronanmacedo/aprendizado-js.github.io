/**
 * Script para JavaScript teste tres
 */

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var itemList = document.createElement('li');
        itemList.append(document.createTextNode(todo));

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.append(document.createTextNode(" (Excluir) "));
        
        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${position})`)

        itemList.appendChild(linkElement);
        listElement.appendChild(itemList);
    }
}

renderTodos();

function addTodo() {
    var inputText = inputElement.value;

    todos.push(inputText);
    inputElement.value = '';
    renderTodos();
    saveLocal();
}

btnElement.onclick = addTodo;

function deleteTodo(position) {
    todos.splice(position, 1);
    renderTodos();
    saveLocal();
}

function saveLocal() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

/**
 * Criando link para retornar ao menu principal
 */
var container = document.querySelector('#voltar');
var linkElement = document.createElement('a');
linkElement.setAttribute('href', '../index.html');
linkElement.append(document.createTextNode("Voltar"));
linkElement.style.textDecoration = 'none';

container.appendChild(linkElement);