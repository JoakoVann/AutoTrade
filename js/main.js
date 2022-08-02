//CONSTANTES

const iva = 1.21;
const impues = 1.5;

// OBJETO DE COMPRA Y CLIENTE

<<<<<<< HEAD
class compra {
  constructor(modelo, marca, precio){
    this.modelo = modelo;
            this.marca = marca;
            this.precio = precio;
          }
          sumaPrecio(){
    this.precio = this.precio + (this.precio * iva)* impues;
=======
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
>>>>>>> 8e93c1a30827a04abf80375aaf5b3b840485ac8f
  }
}

// VARIABLES GLOBALES

<<<<<<< HEAD
function cliente (){ 
  let confirma = prompt("¿Desea agregar una compra? (si/no)").toLowerCase();
  if (confirma === "si") {
    while (confirma != "no"){
      compras.push(new compra(prompt("Ingrese el modelo").toLowerCase, prompt("Ingrese la marca").toLowerCase, parseInt(prompt("Ingrese el precio"))));
      confirma = prompt("¿Desea agregar otra compra? (si/no)").toLowerCase();
    }
  }
  return compras; //esta funcion lo que haria seria por cada vez que se haga click en el boton de "comprar ahora", vaya creando un array con cada compra realizada por el cliente
}
const total = compras.reduce((total, compras) => total + compras.sumaPrecio, 0);

function cuantasCuotas(){
  let cuotas = parseInt(prompt("¿Cuantas cuotas desea pagar? minimo 4, maximo 24. (tenga en cuenta que si ingresa un numero mayor a 24, se realizara un solo pago)"));
  switch (cuotas) {
    case 4:
      console.log(`4 pagos mensuales de ${total/4}`);
      break;
    case 12:
      console.log(`12 pagos mensuales de ${total/12}`);
      break;
    case 24:
      console.log(`24 pagos mensuales de ${total/24}`);
      break;
    default:
      console.log(`Se realiza un solo pago de ${total}`);
      break;
  } 
}

cliente();
cuantasCuotas();
=======
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
>>>>>>> 8e93c1a30827a04abf80375aaf5b3b840485ac8f
