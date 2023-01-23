window.addEventListener("load", function () {
 

    let formulario = document.querySelector("form.registro");

    formulario.addEventListener("submit", function(e) {

        let errores = [];


        let campoNombre = document.querySelector("input.nombre");

        if (campoNombre.value == "" ) {
            errores.push("El campo Nombre debe estar completo");
        } else if ( campoNombre.value.lenght < 3 ) {
            errores.push("El Nombre debe tener al menos 3 caracteres");
        }

        let campoApellido = document.querySelector("input.apellido");
        
        if (campoNombre.value == "" ) {
            errores.push("El campo Apellido debe estar completo");
        } 

        let campoUsuario = document.querySelector("input.usuario");
        
        if (campoNombre.value == "" ) {
            errores.push("El campo Usuario debe estar completo");
            
        } else if ( campoUsuario.value.lenght < 8 ) {
                errores.push("El Nombre debe tener al menos 8 caracteres");
        }

        let campoCorreo = document.querySelector("input.correo");
        
        if (campoNombre.value == "" ) {
            errores.push("El campo Correo Electronico debe estar completo");
        }


        let campoClave = document.querySelector("input.clave");
        
        if (campoNombre.value == "" ) {
            errores.push("El campo Contraseña debe estar completo");
        }



        if (errores.lenght > 0 ) {
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++ ){

                ulErrores.innerHTML += "<li>" + errores[i]  + "</li>"

            };
        }


    });
    
  
 
})
