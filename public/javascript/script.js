import {refParrafo1, refDiv1, refLista1, refBoton1, refTabla1, refColumna1, refPersona} from "/javascript/functions/references.js";

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