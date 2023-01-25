var eliminarProd = document.getElementsByClassName('deletebutton')
console.log(eliminarProd)

for (var i = 0 ; i < eliminarProd.length; i++) {

    var boton = eliminarProd[i]

    boton.addEventListener('click', function(event){
        var botonclick = event.target
        botonclick.parentElement.parentElement.remove()
        totalCarrito()

    })
}


function totalCarrito (){
    var carritoitem = document.getElementsByClassName('carritodiv') [0]
    var cartRows = carritoitem.getElementsByClassName('cart-row')
    var total = 0 ;

    for (var i = 0 ; i < cartRows.length; i++) {

        var cartRow = cartRows[i]
        var precioItem = cartRow.getElementsByClassName('precio') [0]
        var cantItem = cartRow.getElementsByClassName('cantidad') [0]

        var precio = parseFloat(precioItem.innerText.replace('$', ' '))
        var cantidad = cantItem.value

        total = total + (precio * cantidad)
 
     }
     document.getElementsByClassName('total')[0].innerText = '$' + total
}