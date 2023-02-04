window.addEventListener("load", () => {

    let botonCarrito = document.querySelectorAll('.carrito');
    const cart = [];

    botonCarrito.forEach(function(button) {
        button.addEventListener("click", function() {
            const product = JSON.parse(this.getAttribute("data-product"));
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });  

    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    const productosEnCarrito = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    if (productosEnCarrito.length) {
        let items = "<div class='aaa'> <table class='div1'><thead class=''><tr><th class='fuente1 tituloA'>Producto</th><th class='fuente2 tituloB'>Precio</th></tr></thead><tbody>";
        for (let i = 0; i < productosEnCarrito.length; i++) {
            items += `<tr ><td class='fuente1'>${productosEnCarrito[i].name}</td><td class='fuente2'>${productosEnCarrito[i].price}</td></tr>`;
            total += productosEnCarrito[i].price;
        }
        items += "</tbody></table></div>";
        contenedorCarrito.innerHTML = items + `<p class='total'>Total: $${total}</p>`;
    } else {
        contenedorCarrito.innerHTML = "<p class='total'>No hay productos en el carrito</p>";
    }
});




document.querySelector(".vaciarcarrito").addEventListener("click", function() {
    localStorage.removeItem("cart");
    location.reload();
});


const botonFinalizar = document.querySelector(".bot2");

botonFinalizar.addEventListener("click", function () {
  alert("Compra exitosa");
  window.location.href = "/";
});


document.getElementsByClassName('seguirCompra')[0].addEventListener('click', purchasedClicked)

function purchasedClicked () {
    window.location.href = "/";
}


 if (document.readyState == 'loading') {
     document.addEventListener('DOMContentLoaded', ready)
 } else {

     ready()
 }

 function ready (){
     var eliminarProd = document.getElementsByClassName('deletebutton')
     console.log(eliminarProd)
     for (var i = 0 ; i < eliminarProd.length; i++) {

         var boton = eliminarProd[i]
    
         boton.addEventListener('click', borrarCarrito)
     }

     var cantidadinput = document.getElementsByClassName('cnt')
     for (var i = 0 ; i < cantidadinput.length; i++) {
         var input = cantidadinput[i]
         input.addEventListener('change', cantidadNueva)
     }

     var addToCartButtons = document.getElementsByClassName('agregarboton')
     for (var i = 0 ; i < addToCartButtons.length; i++) {
         var button = addToCartButtons[i]
         button.addEventListener('click', addToCartClicked)

     }

     document.getElementsByClassName('bot2')[0].addEventListener('click', purchasedClicked)
 }

 function purchasedClicked () {
     alert('Compra exitosa!')
 }


 function borrarCarrito (event){
     var botonclick = event.target
     botonclick.parentElement.parentElement.remove()
     totalCarrito()
 }

 function cantidadNueva (event){
     var input = event.target 
     if (isNaN(input.value) || input.value <= 0 ) {
         input.value = 1
     }
     totalCarrito()
 }

 function addToCartClicked (event){
     var button = event.target
     var shopitem = button.parentElement.parentElement
     var title = shopitem.getElementsByClassName('product-detail-title')[0].innerText
     var price = shopitem.getElementsByClassName('product-detail-price')[0].innerText
     console.log(title,price)
  addItemToCart (title,price)
  totalCarrito ()
    

 } 

 function addItemToCart (title,price){
     var cartRow = document.createElement('div')
     cartRow.classList.add('cart-row')
     var cartItems = document.getElementsByClassName('car-items')[0]
     var cartItemsNames = cartItems.getElementsByClassName('product-detail-title')
     for (var i = 0; i < cartItemsNames.length;i++ ) {
         if (cartItemsNames[i].innerText == title ) {
             alert('Este item ya esta en el carrito')
             return
         }
     }
     var cartRowContent = `

     <div class="divA carritodiv car-items"  > 
     <div class="div1 cart-row">
       <h4 class="titulofoto fuente1"> ${title} </h4>

       <span class="precio fuente2" >  ${price} </span>
       <label for="unidades" class="cant">Cantidad:</label>
        <input class="cantidad cnt" type="number" value="1">


     <button type="submit" class= "deletebutton" id="deletebutton">Eliminar</button>
     <br>

  </div>
    
   `
     cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('deletebutton')[0].addEventListener('click', borrarCarrito)
    cartRow.getElementsByClassName('cnt')[0].addEventListener('change', cantidadNueva)
   
 
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

