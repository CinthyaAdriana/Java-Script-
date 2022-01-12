/* Funcion
Es un bloque de codigo reutilizable. 
Puede tener o no parametros de entrada 
Puede devolver o no un valor,
*/ 

function sumar (numero1, numero2){
    //operaciones o codigo a ejecutar 
    return numero1 + numero2; // En caso de querer devolver un valor mismas salidas que la entrada y solo puede ser la ultima instruccione de ña funcion 

}  

function restar(numero1, numero2){
    document.write(`la resta de ${numero1} y ${numero2} es ${numero1-numero2} <br>`); //En caso de resta lo escribe directo y no necesita return 
}

let numero1 = parseInt(prompt("numero 1")); 
let numero2 = parseInt(prompt("numero 2"));  
let suma = sumar(numero1, numero2);  


//template string, habilita el uno de texto con java script 
// ` backstick o comilla invertida y se utiliza para hacer template string 
document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`); //<br> es para agregar un enter, con esta forma se puede implementar codigo html  
restar(numero1,numero2);
document.write("la suma de " + numero1 + " y " + numero2 + "es" + suma); // concatenacion, obtendremos el mismo resultado que backstip 



