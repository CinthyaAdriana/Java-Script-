let nombre = "Cinthya Adriana";
let edad = "27" 
let eresEstudiante = true; // los Boolean solo pueden ser verdaderos o falsos 
let variableNull = null; 
let variableUndefined; 

console.log(typeof(nombre)); //string o cadena 
console.log(typeof(edad)); // En js number no importa si los numeros son decimales o negativos 
console.log(typeof(tienesTrabajo)); // Boolean
console.log(typeof(variableNull));
console.log(typeof(variableUndefined));

console.log(variableNull === variableUndefined); 
console.log("1"=== 1); //Tercer igual funciona como operador estricto y determina que no son iguales  
console.log(0===false); 

console.log(typeof(10 + 10)); // number 
console.log(typeof("10" + 10)); // string 
console.log(parseInt("12")); //combierte un string en numero 

let numero = 10;
console.log(numero.toString()); //Convertir numero a string 

