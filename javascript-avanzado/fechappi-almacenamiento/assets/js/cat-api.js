/* Como Realizar Peticiones */

let $btnPerro = document.querySelector("#btnPerro"); 

$btnPerro.addEventListener("click", () => {
/*fetch ("https://api.thecatapi.com/images/search?breed_id={{selected_breed.id}")
.then (resp => resp.json()).then(data => {
    console.log(data); 

    let imagenPerro = document.createElement("img"); 
    imagenPerro.src = data [0].url; // este es para el caso de yn arreglo 
    document.body.appendChild(imagenPerro);
});*/
 
fetch ("https://dog.ceo/api/breeds/image/random") // este es para el caso de un objeto 
.then (resp => resp.json()).then(data => {
    console.log(data); 

    let imagenPerro = document.createElement("img"); 
    imagenPerro.src = data.message; 
    document.body.appendChild(imagenPerro);
});

});