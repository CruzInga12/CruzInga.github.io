// Función para agregar productos al carrito
function addToCart(product) {
    // Verificar si el producto ya está en el carrito
    if (localStorage.getItem(product) !== null) {
        // Actualizar cantidad del producto en el carrito
        var quantity = parseInt(localStorage.getItem(product)) + 1;
        localStorage.setItem(product, quantity);
    } else {
        // Agregar producto al carrito
        localStorage.setItem(product, 1);
    }
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    var cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var row = cartTable.insertRow(-1);
        row.innerHTML = "<td>" + key + "</td><td>S/. " + value + ".00</td><td>" + value + "</td>";
    }
}

// Event listener para el botón "Añadir al Carrito"
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var product = button.previousElementSibling.value;
            addToCart(product);
        });
    });
});