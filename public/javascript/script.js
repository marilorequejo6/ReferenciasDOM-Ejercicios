import {
    refParrafo1,
    refParrafo2,
    refParrafo3,
    refBoton1,
    refBoton2,
    refInput,
    refBoton3
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

// Ejercicio 3, 4 y 5:
refBoton1.innerHTML = "Añadir cuarto párrafo";
document.body.appendChild(refBoton1);

refBoton1.addEventListener("click", () => {
    const refParrafo4 = document.createElement("p");
    refParrafo4.className ="parrafo-añadido";
    refParrafo4.innerHTML = "Este es el cuarto párrafo";

    const refImg = document.createElement("img");
    refImg.src = "./assets/plus.png";
    refParrafo4.appendChild(refImg);

    // Añadimos el cuarto párrafo al body
    document.body.appendChild(refParrafo4);
});

// Ejercicio 6:
refBoton2.innerHTML = "Añadir lista";
document.body.appendChild(refBoton2);

refBoton2.addEventListener("click", () => {
    const refLista1 = document.createElement("ul");
    refLista1.className = "lista-añadida";
    
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.innerHTML = `Elemento ${i} <img src="./assets/plus.png" />`;
        refLista1.appendChild(li);
    }
    
    // Añadimos la lista al body
    document.body.appendChild(refLista1);
});

// Ejercicio 7:
refInput.type = "text";
refInput.placeholder = "Escribe algo aquí";
document.body.appendChild(refInput);

refBoton3.innerHTML = "Añadir texto";
document.body.appendChild(refBoton3);

refBoton3.addEventListener("click", () => {
    const refParrafo5 = document.createElement("p");
    refParrafo5.className = "parrafo-añadido";
    refParrafo5.textContent = refInput.value;
    
    // Añadimos el quinto párrafo al body
    document.body.appendChild(refParrafo5);
    
    // Limpiamos el input
    refInput.value = "";
});
