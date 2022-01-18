/* Codigo Sincrono */ 

let variableSincrona; 
variableSincrona = 10 * 3; 
console.log(variableSincrona); 

/* Codigo Asincrono */

let variableAsincrona; 

setTimeout(() => {  // setTimeout realiza un activdad despues de determinado tiempo, pasandpo dos segundos ejecuta la tarea  
    variableAsincrona = 10 * 3; 
    console.log (variableAsincrona); // para que no parezca undefined en la consola 
}, 2000);
