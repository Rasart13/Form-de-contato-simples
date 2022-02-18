/*definindo variaveis*/
var nome
var dark
var light

/*Entrada de dados */
var nome = window.prompt("Qual seu nome?");

/*Definição do botão para mudar a aparecia do site*/

var dark = document.getElementById('btnDark');
var light = document.getElementById('btnLight');
var body = document.querySelector('body');
dark.onclick = function() {
    body.className = "dark";
}
light.onclick = function() {
    body.className = "light";
}
