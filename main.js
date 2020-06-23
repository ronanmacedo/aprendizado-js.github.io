/**
 * JavaScript do aprendizado-js
 */

var container = document.querySelector('#container');
var listContainer = document.createElement('ul');
container.appendChild(listContainer);
/**
 * Primeiro link
 */
var linkElementUno = document.createElement('a');
linkElementUno.setAttribute('href', 'moduloUno/modUno.html');
linkElementUno.innerHTML = "Acessar primeiro módulo";
linkElementUno.style.textDecoration = 'none';

var listItemUno = document.createElement('li');
listItemUno.appendChild(linkElementUno);
listContainer.appendChild(listItemUno);

/**
 * Segundo link
 */
var linkElementDois = document.createElement('a');
linkElementDois.setAttribute('href', 'moduloDois/modDois.html');
linkElementDois.innerHTML = "Acessar segundo módulo";
linkElementDois.style.textDecoration = 'none';

var listItemDois = document.createElement('li');
listItemDois.appendChild(linkElementDois);
listContainer.appendChild(listItemDois);
