let title = document.getElementById("title"); //aacedo a un id del index 

console.log(title); 
title.textContent = "Este texto esta escrito desde Javascript"; 

let parrafos = document.getElementsByTagName("p"); //accede a todos los parrafos con getElementaryTagName 
console.log(parrafos);

//parrafos[0].textContent = "Parrafos escritos desde Javascript"; //Accedo al primer elemento de parrafos con 0 

/*for(let i = 0; i <parrafos.length; i++){
    parrafos[i].textContent = "parrafo" + i + " escritos desde java script";
} // metodo para modificar todos los parrafos*/ 

let email = document.getElementById("emial");
let password = document.getElementById("password");

function getInformation(){
    console.log(email.value);
    console.log(password.value);
} 



