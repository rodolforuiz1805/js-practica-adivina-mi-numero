
const resultado = document.getElementById("insertar-numero");

let min = 1;
let max = 100;
let numeroElegido;

function iniciarJuego() {
  numeroElegido = Math.floor((min + max) / 2);
  mostrarIntento();
}

function mostrarIntento() {
    resultado.textContent = numeroElegido;
}

function esMayor() {
    min = numeroElegido + 1;
    nuevoIntento();
}

function correcto() {
    resultado.textContent = `¡Tu número es el ${numeroElegido}!`;
}

function esMenor() {
    max = numeroElegido - 1;
    nuevoIntento();
}

function nuevoIntento() {
    numeroElegido = Math.floor((min + max) / 2);
    mostrarIntento();
}

iniciarJuego();

