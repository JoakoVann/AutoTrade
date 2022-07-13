const iva = 1.21;
const impues = 1.5;
let cantAuto = parseInt(prompt("¿Cuantos autos va a comprar?"));
let precio = 0;

let priceTot = () => {
  for (cantAuto; cantAuto > 0; cantAuto--) {
    let precioAuto = parseFloat(prompt(`¿Cuanto cuesta el auto ${cantAuto} ?`));
    precio = precio + (precioAuto * iva)* impues;
  }
  return precio;
}

function cuantasCuotas(){
  let cuotas = parseInt(prompt("¿Cuantas cuotas desea pagar? minimo 4, maximo 24. (tenga en cuenta que si ingresa un numero mayor a 24, se realizara un solo pago)"));
  switch (cuotas) {
    case 4:
      console.log(`4 pagos mensuales de ${priceTot()/4}`);
    break;
    case 12:
      console.log(`12 pagos mensuales de ${priceTot()/12}`);
    break;
    case 24:
      console.log(`24 pagos mensuales de ${priceTot()/24}`);
    break;
    default:
        console.log(`Se realiza un solo pago de ${priceTot()}`);
  } 
}
priceTot();
cuantasCuotas();