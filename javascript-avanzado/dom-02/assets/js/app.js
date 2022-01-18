
/*let $titulo = document.getElementById("titulo"); // variables que se conecten al DOM van con un simbolo de pesos por delante 
console.log(titulo.textContent);
titulo.textContent = "Titulo escrito desde JS"; */

/* .clase
# id 
etiqueta*/
let $titulo = document.querySelector("#titulo"); // Cuando se llama el id se le pone el #
$titulo.textContent = "Titulo escrito desde JS";  

let $parrafo = document.querySelector("p"); 
console.log($parrafo.textContent); 

let $parrafos = document.querySelectorAll("p"); // me arrojara un arreglo con todos los elementos 
console.log($parrafos[1].textContent);  

let subtitulo = document.createElement("h3"); 
subtitulo.textContent = "Este es un subtitulo desde JS";  

//document.body.append agrega un elemento dentro del body al final. 
//document.body.append(subtitulo);
//document.body.insertAdjacentElement("beforebegin", subtitulo);
$titulo.insertAdjacentElement("afterEnd", subtitulo);  
//$titulo.remove(); para remover 

//Insertar en el DOM 
let $contenido = document.querySelector("#contenido"); 
console.log($contenido.textContent);// En text content solo escribe texto, y no acepta etiquteas HTMl 
console.log($contenido.innerHTML); // nos devuelve que adentro tiene un parrafo, y nos permite escribir etoquetas HTML 
console.log($contenido.outherHTML = "Hola"); // verifica desde el nodo que estoy seleccionando hasta adentro 

// Insertar Elementos 
//, . appenChild

let contenidoParrafo = document. createElement("p"); 
contenidoParrafo.textContent = "Contenido de mi Nuevo Parrafo";
$contenido.appendChild(contenidoParrafo); //lo que yo agrege dentro del parentesis irá dentro del elemento  

/*Metodos insertAdjacent*() 
Podemos darles posiciones a los elementos*/ 



