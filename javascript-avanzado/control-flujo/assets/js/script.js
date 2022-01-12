/* flujo orden en que se ejecutan las declaraciones */ 

let miVariable = 10; 
console.log(miVariable); 

/* Estructuras de control de flujo*/  

/*Tienes que ser mayor de edad y tienes que mostrar tu INE*/
let edad = 18; 
let tienesINE = true; 

if(edad >= 18 && tienesINE == true) //Se cumplen las condiciones 
{
   console.log("Puedes entrar")
} 

/*Tienes que ser mayor de edad o tienes que mostrar tu INE*/  

if(edad >= 18 || tienesINE == true) // ||, es decir or unicamente se aplica cuando solo se necesita que se apruebe una sola condicion 
{
   console.log("Puedes entrar")
} else {
    console.log("No puedes entrar") // Else en caso de que no se cumpla la condicion 
}


