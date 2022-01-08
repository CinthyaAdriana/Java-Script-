/*
Variable varse utilizaba anteriormente, son variables globales
Variable let, es una variable de context, solo vive en un bloque de codigo. 
*/


var numero = 40; 
console.log(numero); // 40

if(reue) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

var texto = "Boot Camp";// variable global 
console.log(texto); 

if(true){
    let texto = "cohorte 8"// variable local 
    console.log (texto);
}// Delimitado por las llaves para imprimir console dentro de las llaves 

console.log(texto); // recoge el resultado de la variable var que es global 


