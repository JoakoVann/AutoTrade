const btn = document.getElementById('button');
document.getElementById('formu')
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

let compra = document.querySelector('#cocheSelect');
let tarjeta = document.createElement('div');
tarjeta.classList.add('algo', 'd-flex', 'justify-content-center', 'align-items-center');
let comprados = JSON.parse(sessionStorage.getItem('productos'));
let total;
console.log(comprados);

total = comprados.reduce((a,b) => a + b.precio, 0);

comprados.forEach(e => {
  let index = comprados.indexOf(e);
    tarjeta.innerHTML += `
      <div class="fin">
        <img src="${comprados[index].img}" alt="" height="285px">
        <h4 class="aa modelo negro">Modelo ${comprados[index].modelo}</h4>
        <p class="aa precio negro">Precio ${comprados[index].precio}</p>
      </div>
    </div>
  `;
  compra.append(tarjeta);
});  

const cuot = document.querySelector('.cuotas')
let cantCuot = document.createElement('div')
cantCuot.innerHTML += `
<div class="d-flex justify-content-center align-items-center form-group">
<select class="w-50 form-select" aria-label="Default select example">
  <option selected>Elija cuantas cuotas</option>
  <option> 1 cuota: ${total} </option>
  <option> 4 cuotas: ${total/4} </option>
  <option> 12 cuotas: ${total/12} </option>
  <option> 24 cuotas: ${total/24} </option>
  <option> 32 cuotas: ${total/32} </option>
</select>
</div>
`;
cuot.append(cantCuot);