// Creamos las referencias de todos los elementos
const refParrafo1 = document.querySelector("#parrafo1");

// Ejercicio 1:
const refParrafo2 = document.createElement("p");

// Ejercicio 2:
const refParrafo3 = document.createElement("p");

// Ejercicio 4:
const refBoton1 = document.createElement("button");

// Ejercicio 6:
const refBoton2 = document.createElement("button");

// Ejercicio 7:
const refInput = document.createElement("input");
refInput.type = "text";
const refBoton3 = document.createElement("button");

export { 
    refParrafo1,
    refParrafo2,
    refParrafo3,
    refBoton1,
    refBoton2,
    refInput,
    refBoton3
};
// Exportamos las referencias para poder usarlas en otros archivos