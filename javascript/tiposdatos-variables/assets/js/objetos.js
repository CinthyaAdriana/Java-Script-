/*let miObjeto={ 
    // pares de clave valor
    nombre: "Adriana" //nombre es la clave y Adriana el valor 

}*/ 

let nombre= "Cinthya Adriana"
let edad = 27;
let direccion = "Ciudad de Mexico"
let numero = 5517439528 

/*console.log(nombre);

 let persona ={ //para agrupar la infromacion es esta estructura llamada objeto
     nombre: {
     apellidoPaterno: "Mendez",
     apellidoMaterno: "Barrera",
     nombres: "Cinthya Adriana",
     },
     direccion: {
         ciudad: "Ciudad de Mexico",
         estado: "Ciudad de Mexico",
     }, 
     numero: [ //los corchetes son un arreglo 
        5512856523, 
        5512289665,
     ] 
 };  

 //arreglos vs objetos 
 // almacenar informacion 

console.log(persona);*/
//console.log(persona.nombre); esto para imprimir en consola unicamente el nombre  

let corbatas={
    tamaños: {
        tamaño1: "chicas",
        tamaño2: "medianas",
        tamaño3: "grandes", 
    },  

    colores:["rojas", "azules", "verde","amarillas"],

    diseños:{
        diseño1: "rayadas", 
        diseño2: "puntos",
    }
}; 
console.log(corbatas); 
console.log(corbatas.colores[2]); //para encontrar el color 