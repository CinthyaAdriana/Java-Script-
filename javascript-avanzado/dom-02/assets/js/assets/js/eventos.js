//IDs Arrastrados desde HTML 
let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje"); 
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span"); 

// Agregar Evento con addEventListener y por el metodo de la flecha con una funcion anonima  o declarando un funcion 
$btnMensaje.addEventListener("click", () => {
console.log("No me presiones");
}); 

$mensaje.addEventListener("keydown", (e) => { 
    console.log(e.target.value); // con esto puedo obtener el mensaje o lo que el usuario ha estado escribiendo  
    if(e.target.value.length < 3){
        $spanError.classList.remove("hide");
        $spanError.classList.add("error"); 
        } else {
            $spanError.classList.add("hide");
            $spanError.classList.remove("error"); 
            
        }
    //console.log(e); // e, hace referencia al evento y da mucha informacion sobre el evento en la consola 
   /*console.log("escribiste algo");*/
}); 

/* Con una funcion no aninima se puede realziar lo siguiente 
$mensaje.addEventListener("keydown, mostrarConsole");

function mostrarConsole(){
    console.log("escribiste algo");
} */ 

