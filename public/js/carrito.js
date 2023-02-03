
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

