const tiendaLink = document.querySelector("#tienda-link");
const loginLink = document.querySelector("#login-link");
const aboutLink = document.querySelector("#about-link");
const tiendaSection = document.querySelector("#tienda-section");
const loginSection = document.querySelector("#login-section");
const aboutSection = document.querySelector("#about-section");


aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  aboutSection.style.display = "block";
  loginSection.style.display = "none";
  tiendaSection.style.display = "none";
});


tiendaLink.addEventListener("click", (event) => {
  event.preventDefault();
  tiendaSection.style.display = "block";
  loginSection.style.display = "none";
  aboutSection.style.display = "none";
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  tiendaSection.style.display = "none";
  aboutSection.style.display = "none";
  loginSection.style.display = "flex";
  
});

function validarFormulario() {
  const usuario = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const regexEmail = /^\S+@\S+\.\S+$/; 

  
  if (!regexEmail.test(usuario)) {
    alert('Ingrese un correo electrónico válido.');
    return false;
  }

 
  if (password.length < 6 || password.length > 8) {
    alert('La contraseña debe tener entre 6 y 8 caracteres.');
    return false;
  }

 
  return true;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  validarFormulario();
});


let carrito = [];

let botonesSuscribirse = document.querySelectorAll('button');
botonesSuscribirse.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log("lalalala")
    
    let producto = boton.parentNode;
    let nombre = producto.querySelector("h2").innerText;
    let precio = producto.querySelector("p").innerText;
 
    let nuevoProducto = { nombre: nombre, precio: precio };
 
    carrito.push(nuevoProducto);
    actualizarCarrito();
  });
});


function actualizarCarrito() {
  let carritoElemento = document.getElementById("carrito");
  carritoElemento.innerHTML = "";
  carrito.forEach((producto) => {
  let productoElemento = document.createElement("div");
  productoElemento.innerText = producto.nombre + " - " + producto.precio;
  carritoElemento.appendChild(productoElemento);
  });
}

