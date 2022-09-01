//CONSTANTES

const iva = 1.21;
const impues = 1.5;

// OBJETO DE COMPRA Y CLIENTE

class Producto {
  constructor(modelo, precio, img){
    this.modelo = modelo;
    this.precio = precio;
    this.img = img;
    }
}
class Cliente {
  constructor(nombre,apellido,email,cantCompras){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.cantCompras = cantCompras;
  }
}

// VARIABLES GLOBALES

let prodComprados = [];
const finCompra = document.getElementById('flotante');
const tarjeta = document.createElement('div');
const comprar = document.querySelectorAll('.compra');
let pagar = document.getElementById('cocheSelect');
let autoSeleccionadoId;
let autoSeleccionadoPrecio;

// Agregar al carrito

document.addEventListener("click", (e) => {
  if(e.target.className === "precio"){
    autoSeleccionadoId = e.target.id;
    autoSeleccionadoPrecio = e.target.innerHTML;
    crearOrden(autoSeleccionadoId);
    finCompra.style.display = "block";
  }
})

function crearOrden(id){
  const dataCompra = document.querySelector(`.${id}`);
  const modelo = document.querySelector(`.${id}`).querySelector(".modelo");
  const img = document.querySelector(`.${id}`).querySelector(".coche");
  const precio = autoSeleccionadoPrecio.split(" ")[1];
  prodComprados.push(new Producto(modelo.innerHTML,parseInt(precio),img.src));
  sessionStorage.setItem('productos', JSON.stringify(prodComprados));
  Toastify({
    text: `Agregado correctamente`,
    duration: 2500,
    position: 'right',
    backgroundColor: '#227008',
  }).showToast();
  console.log(img);
}
// Buscamos cual es el div que corresponde al click y agarramos la data.