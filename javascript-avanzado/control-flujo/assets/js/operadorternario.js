/*Operador ternario*/
/* (condicion a evaluar) ? se ejecuta si es verdadero: se ejecuta si es falso*/ 

let edad1 = 19; 
/* Maneria 1 de Utilizarlo
(edad1 >= 18) //operador ternario, es recomendable que solo se utilice con una condicion pequeña 
? console.log("Mayor de edad") 
: console.log("Menor de edad");  */

/* Manera 2 de utilizarlo
let pregunta = (edad1 >= 18)
? "mayor de edad"
: "Mwenor de edad"; 

console.log(pregunta); 
*/

/*Tercera forma de implementar el operador ternario*/
let preguntaEdad = `Tengo ${edad1} 
años y soy ${(edad1 >= 18) ? "Mayor": "Menor" } de edad`; 

console.log(preguntaEdad);  

/* 
Domingo - 0 
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 6 
Sabado - 7
*/ 

/*et dia = 5; */

/*if(dia === 0){
    console.log("Domingo")
}else if(dia === 1){
    console.log("Lunes")
}else if(dia === 2){
    console.log("Martes")*/ 

/* Switch */

let dia = 4; 

switch(dia){
    case 0: 
        console.log("Domingo"); 
    break;
    case 1: 
      console.log("Lunes"); 
      break; 
    case 2: 
      console.log("Martes"); 
      break; 
    case 3: 
       console.log("Miercoles"); 
    break; 
    case 4: 
      console.log("Jueves");
    break; 
    case 5: 
    console.log("Viernes");
    break; 
    case 6: 
    console.log("Sabado"); 
    break; 

    default: console.log ("No es un dia valido"); 
    break;   
 } 

 let cuponDescuento = "Oro"; 
 let descuento; 

 switch (cuponDescuento){
     case "Bronce": 
     descuento = 5; 
     break; 
    case "Plata": 
    descuento = 10; 
    break; 
    case "Oro": 
    descuento = 15; 
    break; 
    default: // default nos permite añadir un mensaje de error 
    console.log("cupon erroneo"); //Lo que de regla debe tomar en cuenta 
    break; 
 } 

console.log(descuento); //console.log va hasta el final  
