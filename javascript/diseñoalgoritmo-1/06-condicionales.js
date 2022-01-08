/*
condicionales se utilizan para tomar decisiones en nuestro programa 
*/ 

/*
if(condicion){
    codigo
    codigo
    codigo
}


*/

const edad = parseInt(prompt("¿cual es tu edad?"));

if(edad >= 18 && edad < 30){
    document.write("eres un joven"); 
} else if (edad >= 30 && edad < 60) {
    document.write("eres un adulto");
}  else if( edad >= 60) {
        document.write("eres un adulto mayor"); 
}else{ 
    document.write("eres un niño"); 
}
