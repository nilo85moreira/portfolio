var textoElemento = document.querySelector(".titulo-destaque");
var textoAmarelo = textoElemento.querySelector(".parte-amarela").getAttribute("data-value");
var textoLaranja = textoElemento.querySelector(".parte-laranja").getAttribute("data-value");
var atraso = 70;
var contadorLetrasAmarelo = 0;
var contadorLetrasLaranja = 0;

function escreverTextoAmarelo() {
    if (contadorLetrasAmarelo < textoAmarelo.length) {
        textoElemento.querySelector(".parte-amarela").textContent += textoAmarelo.charAt(contadorLetrasAmarelo);
        contadorLetrasAmarelo++;
        setTimeout(escreverTextoAmarelo, atraso); 
    }
}

function escreverTextoLaranja() {
    if (contadorLetrasLaranja < textoLaranja.length) {
        textoElemento.querySelector(".parte-laranja").textContent += textoLaranja.charAt(contadorLetrasLaranja);
        contadorLetrasLaranja++;
        setTimeout(escreverTextoLaranja, atraso); 
    }
}

escreverTextoAmarelo();
escreverTextoLaranja();


