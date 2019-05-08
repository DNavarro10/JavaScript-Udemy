'use strict'
//html base
document.write("<div class='contenedor'>");
document.write("<h1>JavaScript - Udemy</h1><hr><hr class='hr2'>")
document.write("</div>");

/*
1- pedir 6 muneros por pantalla - para array
2- mostrar el array, en cuerpo y consola) 
3- odernar y mostrar
4- cuantos elementos tiene el array
6- buscar valor introducido por el usuario. mostrar si esta y el indice.
*/

/* Array */

let numeros = new Array(6);

for (let i = 0; i < numeros.length; i++) {
    numeros[i]  = parseInt(prompt("Introduce un numero: ", 0));  
}
/* Mostrar en pantalla */

document.write("<h2>Contenido del Array</h2>");

numeros.forEach((numero, i) =>{
    document.write(`<strong> ${numero} </strong><hr>`);
});
/* Mostrar en consola*/ 
console.log(numeros);