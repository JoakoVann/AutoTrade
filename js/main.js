const iva = 1.21;
const impues = 1.5;
let precio = 0;


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

const compras = [];

function cliente (compra){ 
  let confirma = prompt("¿Desea agregar una compra? (si/no)").toLowerCase();
  if (confirma === "si") {
    while (!confirma){
      compras.push (new compra(prompt("Ingrese el modelo"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el precio"))));
      confirma = prompt("¿Desea agregar otra compra? (si/no)").toLowerCase();
      if (confirma === "no") {
        break;
      }
      for (const compra of compras){
        compra.sumaPrecio();
      }
    }
  }
  return compra;
} //esta funcion lo que haria seria por cada vez que se haga click en el boton de "comprar ahora", vaya creando un array con cada compra realizada por el cliente

cliente(compra);