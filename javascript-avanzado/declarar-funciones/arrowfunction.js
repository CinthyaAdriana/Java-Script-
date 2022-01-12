/* Arrow Function 
Funcion de  flecha  
Es un bloque de codigo reutilizable. 
Puede tener o no parametros de entrada 
Puede devolver o no un valor. 
*/ 

/*function sumar (numero1, numero2){
    //operaciones o codigo a ejecutar 
    return numero1 + numero2; // En caso de querer devolver un valor mismas salidas que la entrada y solo puede ser la ultima instruccione de ña funcion 

}  */
 
/*Funcion flecha*/
const sumar = (numero1, numero2) => { /*antes de utilizar las funciones de flwcha deben ser declaradas*/
 return numero1 + numero2;
}  

let numero1 = parseInt(prompt("numero 1")); 
let numero2 = parseInt(prompt("numero 2"));  
let suma = sumar(numero1, numero2); 

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);