/*****VARIABLES******/

/** ECMASCRIPT 6
 * var: variables - mutables - no se recomiendan utilizar
 * let: variables -mutables
 * const: constantes
*/

/** VAR: Pueden ser utilizadas en cualquier punto de programa o funcion */

console.log(uno);
var uno = "uno";
console.log(uno);

// console.log(dos);
let dos = "dos";
console.log(dos);

if(true) {
    var x = "x";
}
console.log(x);

if(true) {
    let y = "y";
}
//console.log(y);

var var1 = 1;
var var1 = 2;

let let1 = 1;
// let let1 = 2;

var var2 = 1;
if(true) {
    var var2 = 2;
    console.log(var2);
}
console.log(var2);

let let2 = 1;
if(true) {
    let let2 = 2;
    console.log(let2);
}
console.log(let2);

const tres = "igual";
// tres = "algo";

/**********VALORES VERDADEROS Y FALSOS***********/

// Valores falsos: undefined, null, 0, ""
// valores verdaderos: No son falsos

let mes;

if(mes) {
    document.getElementById("texto").innerText = "Verdadero";
} else {
    document.getElementById("texto").innerText = "Falso";
}

/**********OPERADORES DE IGUALDAD***********/

// == (doble igual) - Devuelve verdadero si ambos operandos son iguales
// === (triple igual) - "" y tienen el mismo tipo de dato

mes = 10;

mes === 10 ? console.log("verdadero") : console.log("falso");

/**********TEMPLATE STRING***********/
let nombre = "Jose";
let apellido = "Marquez";
const nac = 1990;

function calcularEdad(nac) {
    return 2021 - nac;
}

console.log(nombre + " " + apellido + ", su edad es: " + calcularEdad(nac));

console.log(`${nombre} ${apellido}, su edad es: ${calcularEdad(nac)}`);

/********FUNCIONES DE FLECHA***********/
// Funciones mas dinamicas y nos ahorran código

/**MAP**/
// Crea un nuevo un arreglo

const years = [2000, 2005, 2010, 2020];

var edad = years.map(function(el) {
    return 2021-el;
});
console.log(edad);

var edad2 = years.map((el) => { return 2021 -el });
console.log(edad2);

var edad3 = years.map(el => 2021-el);
console.log(edad3);

var edad4 = years.map((x, index ) => `Edad ${index+1}: ${2021-x}`);
console.log(edad4);

var edad5 = years.map((x, index ) => {
    const actual = new Date().getFullYear();
    const edad = actual - x;
    return `Edad ${index+1}: ${2021-x}`;
});
console.log(edad5);




