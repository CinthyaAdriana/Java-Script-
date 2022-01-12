const AñoDeNacimiento = parseInt(prompt("Año de Nacimiento")); 
let AñoActual = 2022; 

let resta = AñoActual - AñoDeNacimiento;  
console.log(resta); 

document.write("Tu edad es: " +  resta);