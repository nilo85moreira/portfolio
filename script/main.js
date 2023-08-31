var texto = document.querySelector(".titulo").getAttribute("data-value");

var textoElemento = document.querySelector(".titulo");
var atraso = 70;

var contadorLetras = 0;

function escrevertexto() {
    if (contadorLetras < texto.length) {
        textoElemento.textContent += texto.charAt(contadorLetras);
        contadorLetras++;
        setTimeout(escrevertexto, atraso); 
    }
}
escrevertexto();

