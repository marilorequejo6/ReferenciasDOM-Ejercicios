import {refBoton1, refParrafo1, refBoton2, refLista1, refBoton3, refElemento1, refElemento3, refLista2, refLista3, refImgsLista3} from "/javascript/functions/references.js";
/*
// Ejercicio1: 
console.log("Ejercicio1: ", refDiv1.previousElementSibling.textContent);

// Ejercicio2:
console.log("Ejercicio2, elemento 1: ", refLista1.children[0].textContent);
console.log("Ejercicio2, elemento 2: ", refLista1.children[1].textContent);
console.log("Ejercicio2, elemento 3: ", refLista1.children[2].textContent);

// Ejercicio3:
console.log("Ejercicio3: ", refLista1.previousElementSibling.previousElementSibling.textContent);   

// Ejercicio4a:
console.log("Ejercicio4a: ", refLista1.nextElementSibling.nextElementSibling.textContent);
// Ejercicio4b:
console.log("Ejercicio4b: ", refLista1.nextElementSibling.nextElementSibling.querySelector("#persona").textContent);

// Ejercicio5:
console.log("Ejercicio5: ", refTabla1.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

// Ejercicio6:
console.log("Ejercicio6: ", refTabla1.querySelector("#persona").textContent);

// Ejercicio7:
console.log("Ejercicio7: ", refDiv1.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
*/

// Ejercicio 1: Generar un texto al pulsar el botón
refBoton1.addEventListener("click", () => {
    // Creamos un elemento para introducir el mensaje
    const refDiv1 = document.createElement("div");
    refDiv1.innerHTML = "Buenas a todas";
    refDiv1.className = "div-ejercicio-1"; 
    // Añadimos el elemento con el mensaje al body
    document.body.prepend(refDiv1);
});

// Ejercicio 2: 
refBoton2.addEventListener("click", () => {
    console.log("Etiqueta: ", refParrafo1);
    console.log("Texto: ", refParrafo1.textContent);
});

// Ejercicio 3:
refBoton3.addEventListener("click", () => {
    console.log("Etiqueta: ", refLista1);
    console.log("Texto: ", refLista1.textContent);
});

// Ejercicio 4:
refElemento1.addEventListener("click", () => {
    console.log("Lista: ", refLista1.textContent);
    console.log("Texto elemento 1: ", refElemento1.textContent);
});

// Ejercicio 5:
refElemento3.addEventListener("click", () => {
    console.log("Lista: ", refLista1.textContent);
    console.log("Texto elemento 3: ", refElemento3.textContent);
});

// Ejercicio 6:
refLista2.addEventListener("click", (e) => {
    const li = e.target;

    // Si el elemento clicado es un <li> y no tiene hijos, añadimos un <span>
    if (li.childElementCount === 0) {
        li.appendChild(añadirSpan());
   }
});

function añadirSpan() {
    const span = document.createElement("span");
    span.textContent = "Este es el span añadido";
    return span;
};

// Ejercicio 7 y 8:
refLista3.addEventListener("click", (e) => {
    // Si el click es sobre una etiqueta img, mostramos un mensaje
    // e.target.tagName nos da el nombre de la etiqueta del elemento clicado en mayúsculas
    // por eso hay que utilizar toLowerCase() para convertirlo en minúsculas y compararlo con "img"
    if (e.target.tagName.toLowerCase() === "img") {
        console.log("Imagen clicada por el ejercicio 7");
    }
});

// Recorremos todas las imágenes de la lista 3 y añadimos un evento click a cada una que muestre un mensaje
refImgsLista3.forEach((img) => {
    img.addEventListener("click", (e) => {
        console.log("Imagen clicada por el ejercicio 8");
    });
});