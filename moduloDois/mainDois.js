/**
 * Script para JavaScript teste dois
 */

/**
 * Exercicio uno
 */
var containerUno = document.querySelector('#exercicioUno');
var btnUno = document.createElement('button');
btnUno.setAttribute('type', 'button');
btnUno.innerHTML = "Criar";
containerUno.appendChild(btnUno);

var appUno = document.createElement('div');
appUno.setAttribute('id', 'appUno');
var classUno = document.createElement('div');
classUno.setAttribute('class', 'boxUno');

appUno.appendChild(classUno);
containerUno.appendChild(appUno);

btnUno.onclick = function () {
    var sqr = document.createElement('div');
    var box = document.querySelector('.boxUno');
    sqr.style.height = '100px';
    sqr.style.width = '100px';
    sqr.style.margin = '.5em .25em .5em .25em';
    sqr.style.backgroundColor = '#ff0000';
    box.appendChild(sqr);
}

/**
 * Exercicio dois
 */
var containerDois = document.querySelector('#exercicioDois');
var btnDois = document.createElement('button');
btnDois.setAttribute('type', 'button');
btnDois.innerHTML = "Criar";
containerDois.appendChild(btnDois);

var appDois = document.createElement('div');
appDois.setAttribute('id', 'appDois');
var classDois = document.createElement('div');
classDois.setAttribute('class', 'boxDois');

appDois.appendChild(classDois);
containerDois.appendChild(appDois);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btnDois.onclick = function () {
    var sqr = document.createElement('div');
    var box = document.querySelector('.boxDois');
    sqr.style.height = '100px';
    sqr.style.width = '100px';
    sqr.style.margin = '.5em .25em .5em .25em';
    sqr.style.backgroundColor = '#ff0000';
    sqr.onmouseout = function () {
        sqr.style.backgroundColor = getRandomColor();
    }
    box.appendChild(sqr);
}

/**
 * Exercicio tres
 */
var containerTres = document.querySelector('#exercicioTres');
var listContainerTres = document.createElement('ul');
containerTres.appendChild(listContainerTres);

var nomes = ["Diego", "Gabriel", "Lucas"];

for (nome of nomes) {
    var listItem = document.createElement('li');
    listItem.innerHTML = nome;
    listContainerTres.appendChild(listItem);
}

/**
 * Exercicio quatro
 */
var containerQuatro = document.querySelector('#exercicioQuatro');
var listContainerQuatro = document.createElement('ul');
containerQuatro.appendChild(listContainerQuatro);
var inputElement = document.querySelector('.inputName');

var nomesOutro = ["Diego", "Gabriel", "Lucas"];

function addName(name) {
    var listItem = document.createElement('li');
    listItem.setAttribute('id', name);
    listItem.innerHTML = name;

    listContainerQuatro.appendChild(listItem)
}

function adicionar() {
    addName(inputElement.value);
    inputElement.value = "";
}

function remover() {
    var listItem = document.querySelector(`#${inputElement.value}`);
    if (listItem) {
        listContainerQuatro.removeChild(listItem);
        inputElement.value = "";
    } else {
        window.alert("Nome não encontrado");
        inputElement.value = "";
    }
}

for (nome of nomesOutro) {
    addName(nome);
}
/**
 * Criando link para retornar ao menu principal
 */
var container = document.querySelector('#voltar');
var linkElement = document.createElement('a');
linkElement.setAttribute('href', '../index.html');
linkElement.innerHTML = "Voltar";
linkElement.style.textDecoration = 'none';

container.appendChild(linkElement);