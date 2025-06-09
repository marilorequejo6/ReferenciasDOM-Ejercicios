import {refBoton1} from "/javascript/functions/references.js";
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

// Ejercicio1: Generar un texto al pulsar el botón
refBoton1.addEventListener("click", () => {
    // Creamos un elemento para introducir el mensaje
    const refDiv1 = document.createElement("div");
    refDiv1.innerHTML = "Buenas a todas";
    refDiv1.className = "div-ejercicio-1"; 
    // Añadimos el elemento con el mensaje al body
    document.body.appendChild(refDiv1);
});

// Ejercicio2: 