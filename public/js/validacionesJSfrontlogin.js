
    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = [];
    


        let campoCorreo = document.querySelector("#exampleInputEmail1");
        
        if (campoCorreo.value == "" ) {
            errores.push("El campo Correo Electronico debe estar completo");
        }


        let campoClave = document.querySelector("#exampleInputPassword1");
        
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
    
  

