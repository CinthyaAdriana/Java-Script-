let $titulo = document.querySelector("#titulo"); 
let $texto = document.querySelector(".texto");
$texto.id = "texto"; 
//$texto.style = "color: red; font-size: 24px"; // le estoy cambiando el color al textp
$texto.className = "bg-purple h3 "; // para agregar mas de una lcase hacerlo de una manera más seguida 
//$texto.className = "h3"; // para agregar a una sola clase aparte remueve clases anteriores 
$texto.classList.add("text-center"); // Agrega o remueve elementos, y no remueve clases anteriores 
$texto.classList.remove("bg-purple");// En caso de que quiera remover una clase en especifico en este caso el bg-purple 
 
