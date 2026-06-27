const precio = 400000;
let cantidad = 0;

const precioInicial = document.querySelector(".precio-inicial");
const cantidadHTML = document.querySelector(".cantidad");
const totalHTML = document.querySelector(".valor-total");

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function sumar() {
    cantidad++;
    cantidadHTML.innerHTML = cantidad;
    totalHTML.innerHTML = precio * cantidad;
    totalHTML.style.color = "blue";
    totalHTML.style.fontSize = "20px";
}

function restar() {
    if (cantidad > 0) {
        cantidad--;
        cantidadHTML.innerHTML = cantidad;
        totalHTML.innerHTML = precio * cantidad;
    }
}