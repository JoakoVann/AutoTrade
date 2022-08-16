//CONSTANTES

const iva = 1.21;
const impues = 1.5;

// OBJETO DE COMPRA Y CLIENTE

class producto {
  constructor(modelo, precio){
    this.modelo = modelo;
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

// VARIABLES GLOBALES

let prodComprados = [producto];
let total = 0;
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');

// Agregar al carrito
const finCompra = document.getElementById('flotante');
const comprar = document.querySelectorAll('.compra'); 
const modelo = document.querySelectorAll('.modelo');
const price = document.querySelectorAll('.precio');
let pagar = document.getElementById('cocheSelect');
let pagarCoche = document.getElementById('cocheSelect');
const tarjeta = document.createElement('div');
const imagen = document.querySelectorAll('.coche');
let pagos = document.getElementById('cocheSelect');


comprar.forEach( el => el.addEventListener('click', (e) => {
  let cocheIndex = comprar.indexOf(el); 
  prodComprados.push(new producto(modelo[cocheIndex].innerHTML,parseInt(price[cocheIndex].innerHTML).sumaPrecio));
  total = prodComprados.reduce((total, producto) => total + producto.precio, 0);
  finCompra.style.display = 'block';
  Toastify({
    text: `Agregado correctamente`,
    duration: 2500,
    position: 'right',
    backgroundColor: '#227008',
  }).showToast();
  const crearTarjeta = () => {
    tarjeta.innerHTML = `
    <div>
      ${imagen[cocheIndex]};
      <h4>${modelo[cocheIndex].innerHTML}</h4>
      <p>${price[cocheIndex].innerHTML}</p>
    </div>
    <div class="form-floating">
    <input type="text" class="ingreso form-control" id="floatingInput nombre" placeholder="Inpuestos" readonly>
    <label for="floatingInput">75%</label>
    </div>
    <div class="form-floating">
      <input type="text" class="ingreso form-control" id="floatinginputapellido" placeholder="Pago Total" readonly>
      <label for="floatingInput">${total}</label>
    </div>
    `;
    localStorage.setItem('productos', JSON.stringify(prodComprados));
    pagos.appendChild(tarjeta);
    return tarjeta;
  }
}));

// modificar pagina de pago

let cuotas = document.createElement('div');
cuotas.innerHTML = `
<div class="form-group">
<label for="exampleSelect">Eliga sus cuotas</label>
<select class="form-control" id="exampleSelect">
  <option> 1 cuota: ${total} </option>
  <option> 4 cuotas: ${total/4} </option>
  <option> 12 cuotas: ${total/12} </option>
  <option> 24 cuotas: ${total/24} </option>
  <option> 32 cuotas: ${total/32} </option>
</select>
</div>
`;
pagos.appendChild(cuotas);

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Enviando...';
  const serviceID = 'default_service';
  const templateID = 'template_mf2mwks';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Datos';
      alert('Datos enviados correctamente');
    }, (err) => {
      btn.value = 'Hubo un problema';
    });
});