'use strict'
//html base
document.write("<div class='contenedor'>");
document.write("<h1>JavaScript - Udemy</h1><hr><hr class='hr2'>")


/*
1- pedir 6 muneros por pantalla - para array
2- mostrar el array, en cuerpo y consola) 
3- odernar y mostrar
4- cuantos elementos tiene el array
6- buscar valor introducido por el usuario. mostrar si esta y el indice.
*/

/* Mostrar en pantalla */
// Texto, parametro para agregar textos
function mostrarArray(elementos, texto = ""){
    document.write(`<h2>Contenido del Array ${texto}</h2>`);

    document.write("<ul>");
    numeros.forEach((elemento, i) =>{
        document.write(`<li>${elemento}</li>`);
    });
    document.write("</ul>");
}
/* Array */

    document.write("<div class='array'>");
    
    let numeros = [];

    for (let i = 0; i <= 5; i++) {
            numeros.push(parseInt(prompt(`Introduce un numero: `,0))); 
    }
        

    document.write("</div>");

/* Mostrar en consola*/ 
console.log(numeros);
/* llamar funcion */
mostrarArray(numeros);
console.log(numeros);

/* numeros ordenados */

//numeros.sort(function(a,b){return a - b;});

numeros.sort((a,b) => a-b); /* ES6 */
mostrarArray(numeros, 'Ordenado');

/* array invertido usando reverse */
numeros.reverse();
mostrarArray(numeros, 'Revertidos');

/* contar elementos */

document.write(`<h2>Tamaño del array ${numeros.length}</h2>`);
document.write("</div>");