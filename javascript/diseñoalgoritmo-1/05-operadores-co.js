/* operadores logicos verdadero(v) falso(f)

%% and <expresion_1> <expresion_2>

v | v = v
v | f = f
f | v = f
f | f = f

|| or El ||operador logico OR () (disyuncion logica para un conjunto de operaciones) si 
y solo si uno o mas operandos es verdadero <expresion1> o <expresion2> 

v|v = v
v|f = v 
f|v = v
f|f = f 

! Not <expresion> no <expresion>

v = f
f = v
*/

/* operadores relacionales o de comparacion
mayor que: a > b      a es mayor que b 
menor que: a < b      a es menor que b 
mayor o igual que: a >= b   a es mayor o igual a b 
mayor o igual que: a <= b   a es mayor o igual a b 
igual: a == b  a es igual a b 
operador estricto: ===
operador diferente estricto: !==

*/ 

let numero1 = 22; 
let numero2 = 15; 

console.log("22 es mayor que 15", numero1 > numero2); 
console.log("22 es menor que 15", numero1 < numero2); 
console.log("22 es mayor o igual a 15", numero1 >= numero2); 
console.log("22 es menor o igual a 15", numero1 <= numero2); 
console.log("22 es igual a 15", numero1 == numero2); 
console.log("22 es diferente a 15", numero1 != numero2); 

