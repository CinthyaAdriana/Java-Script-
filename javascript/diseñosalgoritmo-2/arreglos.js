/* Coleccion de elementos 
Tienen metodos o funciones que nos permitenordenar o 
manipular los daros almacenados 
*/

// manera 1

const arreglo1 = []
console.log(arreglo1); 

//manera 2 

const arreglo2 = Array.of(1, "Hola", true, [1, 2, 6]); 
console.log(arreglo2); 

//manera3 
const arreglo3 = new Array(3, True, "adios"); 
console.log(arreglo3); 

//Ejemplo de arreglo 

const frutas = [ "manzana", "naranjas", "uvas", "sandias",[1, 2 , 3, 4, 5["A", "B", "C"]]]; 

// Notacion de corchetes 
console.log(frutas[1]); 
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas); 
//Ejemplo de insertar un elemento 
frutas[5][4].push("D"); 
console.log(frutas); 

//Elementos 

/* Legth = Longitud */
const letras = ["A", "B", "C", "D"]; 
console.log(letras.length); 

/* Push = añade un elemento al final de nuestro arreglo */

letras.push( "E"); 
console.log(letras); 

/* Pop = elimina el ultimo elemento */
letras.pop();
console.log(letras); 

/* Shift = elimina el primer elemento */ 
letras.shift(); 
console.log(letras); 








