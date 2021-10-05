console.log("Hola de nuevo");

var mes = "Octubre";
console.log(mes);
console.log("mes", typeof(mes));
mes = 10;
console.log(mes);
console.log("mes", typeof(mes));

var esFestivo = null;
console.log(esFestivo);

var var1, var2, var3;

// Esto es un comentario en línea

/* 
hsdkdss
dsjdskjds
dshsdsjsdkd
*/

/*****DOM*****/
console.dir(document);
document.title = "Nuevo";
console.log(document.head);

console.log(document.getElementById('titulo'));
var titulo = document.getElementById('titulo');
titulo.textContent = "Nuevo título"; 
titulo.innerText = "Nuevo nuevo título";
titulo.innerHTML = "<span>javascript de nuevo</span>"

var items = document.getElementsByClassName('list');
console.log(items);
items[1].innerText = "DOS";

var itemsT = document.getElementsByTagName('li');
console.log(itemsT);
itemsT[2].innerText = "TRES TRES";

/***FUNCION***/
function suma(a, b){
    document.getElementById('resultado').innerText = a + b;
    alert("Hiciste clic en suma")
}

/***LOCAL STORAGE**/

var imprimir = function(dato) {
    document.getElementById('valor').innerText = dato;
} 

var aumentar = function() {
    localStorage.contador++;
    imprimir(localStorage.contador);
}

var reiniciar = function() {
    localStorage.contador = 0;
    imprimir(localStorage.contador);
}

var eliminar = function() {
    localStorage.removeItem("contador");
    imprimir(localStorage.contador);
}

if(typeof(Storage) != 'undefined'){
    if(localStorage.contador) { //Si existe
        imprimir(localStorage.contador);
    } else {
        localStorage.contador = 0;
    }
}