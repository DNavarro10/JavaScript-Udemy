'use strict'

window.addEventListener('load',  function(){
    console.log("DOM cargado!!");

    let form = document.querySelector("#formulario");


    form.addEventListener('submit', function(){
        console.log("Evento Submit capturado");

        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let edad =  parseInt(document.querySelector("#edad").value);

        // validar
        if (nombre.trim() == null || nombre.trim().length == 0){
            alert('nombre no valido')
            return false;
        }
        
        if (apellido.trim() == null || apellido.trim().length == 0){
            alert('apellido no valido')
            return false;
        }

        if (edad == null || edad.length >= 0 || !isNaN(edad) ){
            alert('Edad no valida')
            return false;
        }
        console.log(nombre,apellido,edad);
    });
});