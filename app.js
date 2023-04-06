// Crea un objeto carrito vacío
let carrito = [];

// Obtiene todos los botones "Suscribirse"
let botonesSuscribirse = document.querySelectorAll("button");

// Agrega un evento click a cada botón "Suscribirse"
botonesSuscribirse.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Obtiene el nombre y el precio del producto correspondiente
    let producto = boton.parentNode;
    let nombre = producto.querySelector("h2").innerText;
    let precio = producto.querySelector("p").innerText;

    // Crea un objeto producto con el nombre y el precio
    let nuevoProducto = { nombre: nombre, precio: precio };

    // Agrega el nuevo producto al carrito
    carrito.push(nuevoProducto);

    // Actualiza la visualización del carrito
    actualizarCarrito();
  });
});

// Actualiza la visualización del carrito
function actualizarCarrito() {
  // Obtiene el elemento del carrito
  let carritoElemento = document.getElementById("carrito");

  // Borra cualquier contenido previo del carrito
  carritoElemento.innerHTML = "";

  // Agrega cada producto al carrito
  carrito.forEach((producto) => {
    let productoElemento = document.createElement("div");
    productoElemento.innerText = producto.nombre + " - " + producto.precio;
    carritoElemento.appendChild(productoElemento);
  });
}

