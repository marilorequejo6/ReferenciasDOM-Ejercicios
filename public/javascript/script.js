import {
    refParrafo1,
    refParrafo2,
    refParrafo3
} from "/javascript/functions/references.js";

// Ejercicio 1: 
refParrafo2.className ="parrafo-añadido";
refParrafo2.textContent = "Este es el segundo párrafo";
// Añadimos el segundo párrafo al body
document.body.appendChild(refParrafo2);
// Situamos el segundo párrafo antes del primer párrafo
refParrafo1.before(refParrafo2);

// Ejercicio 2:
refParrafo3.className ="parrafo-añadido";
refParrafo3.textContent = "Este es el tercer párrafo";
// Añadimos el tercer párrafo al body
document.body.appendChild(refParrafo3);
// Situamos el tercer párrafo después del primer párrafo
refParrafo1.after(refParrafo3);