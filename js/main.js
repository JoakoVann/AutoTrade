const iva = 0.21;
const impues = 0.5;
let cantAutos = 0; //Esta es una variable para saber cuantos autos eligio el cliente.
let precioAuto = 0;
let cuotas = 12;


const precioTotal = (cantAutos) => {  //funcion que calcula (precio auto + iva) + impuestos.
  for (cantAutos; cantAutos > 0; cantAutos--) {
    let precio = 0;
    precio = (precio * iva)*impues;
    return precio;
  }
}

function cuantasCuotas(){
  switch (cuotas) {
    case 4:
      console.log(`4 pagos mensuales de ${precioTotal(cantAutos)/4}`);
    break;
    case 12:
      console.log(`12 pagos mensuales de ${precioTotal(cantAutos)/12}`);
    break;
    case 24:
      console.log(`24 pagos mensuales de ${precioTotal(cantAutos)/24}`);
    break;
    default:
        console.log(`Se realiza un solo pago de ${precioTotal(cantAutos)}`);
  } 
}