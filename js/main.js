//CONSTANTES

const iva = 1.21;
const impues = 1.5;

// OBJETO DE COMPRA Y CLIENTE

class compra {
  constructor(modelo, marca, precio){
    this.modelo = modelo;
            this.marca = marca;
            this.precio = precio;
          }
    sumaPrecio(){
      this.precio = this.precio + (this.precio * iva)* impues;
    }
}
class cliente {
  constructor(nombre,apellido,email,cantCompras){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.cantCompras = cantCompras;
  }
}
class producto{
  constructor(marca,modelo,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

// VARIABLES GLOBALES

let productos = [];
let totalComprados = [];
let prodComprados= [];
let total = 0;
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');

// Agregar al carrito
const finCompra = document.getElementById('flotante');
const comprar = document.querySelectorAll('.compra'); 
const marca = document.querySelectorAll('.marca');
const modelo = document.querySelectorAll('.modelo');
const price = document.querySelectorAll('.precio');
let pagar = document.getElementById('cocheSelect');

comprar.forEach( el => el.addEventListener('click', (e) => {
  let cocheIndex = comprar.indexOf(el); 
  prodComprados.push(new producto(marca[cocheIndex].innerHTML,modelo[cocheIndex].innerHTML,parseInt(price[cocheIndex].innerHTML)));
  finCompra.style.display = 'block';
}));

// modificar pagina de pago

let pagarCoche = document.getElementById('cocheSelect');
console.log(pagarCoche.innerHTML);