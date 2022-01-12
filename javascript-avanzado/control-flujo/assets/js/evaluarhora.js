/*Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5*/ 

let hora = parseInt(prompt("Ingresa la Hora")); 

/*terminar*/ 

if((hora >= 6) && (hora < 11)){
    document.write("Buenos Dias") 
} else if((hora >= 12) && (hora < 18)){
    document.write("Buenas Tardes")
} else if((hora >= 19) && (hora <= 23 )){
    document.write("Buenas Noches")
}else if((hora >= 0) && (hora <= 5)){
    document.write("Dejame Dormir")
}


