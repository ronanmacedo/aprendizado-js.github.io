/**
 * Script para JavaScript teste quatro
 */

/**
 * Criando link para retornar ao menu principal
 */
var container = document.querySelector('#voltar');
var linkElement = document.createElement('a');
linkElement.setAttribute('href', '../index.html');
linkElement.append(document.createTextNode("Voltar"));
linkElement.style.textDecoration = 'none';

container.appendChild(linkElement);