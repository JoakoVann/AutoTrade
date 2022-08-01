//CONSTANTES

const iva = 1.21;
const impues = 1.5;

// OBJETO DE COMPRA Y CLIENTE

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
const comprar = document.querySelectorAll('.compra'); //all
const marca = document.querySelectorAll('.marca');
const modelo = document.querySelectorAll('.modelo');
const price = document.querySelectorAll('.precio');
let pagar = document.getElementById('cocheSelect');


comprar.forEach(el => el.addEventListener('click', (e) =>{
  e.preventDefault();
  prodComprados.push(new producto(marca, modelo, parseInt(price)));
  finCompra.style.display = 'block';
  
}));

// Cosas del HTML y estilos
const compra = document.createElement('section');
compra.innerHTML =
`
<div class="price">        
  <label class="ms-2 mt-1" for="floatingInput">Precio del vehiculo</label>
  <input type="text" class="form-control ingresar" id="floatingInput" placeholder="precio Vehiculo" readonly>
  <label class="ms-2 mt-1" for="floatingInput">21%</label>
  <input type="text" class="form-control ingresar" id="floatingInput" placeholder="Precio Vehiculo + Impuestos" readonly>
  <label class="ms-2 mt-1" for="precioTot">${(parseInt(price.innerHTML * iva)*impues)}</label>
</div>
<div class="cuotas">
  <label for="cuotas">Cantidad de Cuotas</label>
  <select name="" id="cuotas">
    <option value="4">${(parseInt(price.innerHTML * iva)*impues)/4}</option>
    <option value="12">${(parseInt(price.innerHTML * iva)*impues)/12}</option>
    <option value="24">${(parseInt(price.innerHTML * iva)*impues)/24}</option>
    <option value="32">${(parseInt(price.innerHTML * iva)*impues)/32}</option>
  </select>
  <button class="float" id="fin">finalizar compra</button>
</div>
`

// let final = document.querySelector('#cocheSelect');

// finCompra.addEventListener('click', (e) => {
//   e.preventDefault();
//   final.appendChild(compra);
// });