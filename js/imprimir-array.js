'use stric'

let frutas ={
    banano: 'dulce',
    papaya: 'feo',
    piña: 'acido'
};
let array = ["Diego","navarro","morales","29"];

document.write("<h1>JavaScript - Udemy</h1><nr><hr>")
document.write("<h1>Array de frutas </h1>");
document.write('<ul>');
/*  imprime arrays
    for(let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }


array.forEach((value,index,data)=>{
    document.write(`<li>${value}</li>`);
});
document.write('</ul>');
*/

/* buscar */
var busca = array.find(array => array == "Diego");

console.log(busca);

