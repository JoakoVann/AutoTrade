const iva = 1.21;
const impues = 1.5;
let precio = 0;


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