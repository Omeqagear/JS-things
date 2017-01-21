var numeros = [20 , 1,23,15,16]

var suma = numeros.reduce(function (valor_anterior,valor_actual,index,arreglo) {
	return valor_anterior + valor_actual;
});

console.log(suma);

var letras = ["H", "o", "l", "a"]

var palabra = letras.reduce(function (valor_anterior,valor_actual,index,arreglo) {
	return valor_anterior + valor_actual;
});

console.log(palabra);

var numero2 = [2,5,6,10,25]

function cuad(num) {
	return num * num
}

console.log(numero2.map(cuad));

(function (){

 document.getElementById("btn").addEventListener("click", function(){
  console.log("Ha hecho click en mi :D");
 });

 


})();