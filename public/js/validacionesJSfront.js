
    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = [];
    



        let campoNombre = document.querySelector("#name");

        if (campoNombre.value == "" ) {
            errores.push("El campo Nombre debe estar completo");
        } else if ( campoNombre.value.lenght < 3 ) {
            errores.push("El Nombre debe tener al menos 3 caracteres");
        }

        let campoApellido = document.querySelector("#last_name");
        
        if (campoApellido.value == "" ) {
            errores.push("El campo Apellido debe estar completo");
        } 

        let campoUsuario = document.querySelector("#user_name");
        
        if (campoUsuario.value == "" ) {
            errores.push("El campo Usuario debe estar completo");
            
        } else if ( campoUsuario.value.lenght < 8 ) {
                errores.push("El Nombre debe tener al menos 8 caracteres");
        }

        let campoCorreo = document.querySelector("#email");
        
        if (campoCorreo.value == "" ) {
            errores.push("El campo Correo Electronico debe estar completo");
        }


        let campoClave = document.querySelector("#password");
        
        if (campoClave.value == "" ) {
            errores.push("El campo Contraseña debe estar completo");
        }



        if (errores.length > 0 ) {

          
            let ulErrores = document.querySelector("#ulerrores");
            for (let i = 0; i < errores.length; i++ ){

                let etiquetaerror = document.createElement("li")
                etiquetaerror.innerText = errores[i]
                ulErrores.appendChild(etiquetaerror)
            };
        }

          else { formulario.submit()




    }


 } );
    
  

