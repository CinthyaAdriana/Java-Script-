/* 
Ciclos - Bucles - Loops 

while 
do while 
for 
*/ 

//while Estructura del Ciclo solo ejecuta cuando se cumple la condicion 
/*
let condicion = 1; - valor inicial 
while (condicion){
    *tu codigo 
    *modificacion a nuestro valor inicial 
    *}
    */ 

    // imprimir todos los numero del 1 al 10  

    let condicion = 1; 

    while(condicion <= 10 ){
        console.log(condicion);
        condicion = condicion + 1; 
        //condicion++; // esta formula hace lo mismo que la anterior 
        // numero -- este resta 
    }

    /* Ciclo do while aunque la condicion no se cumpla se ejecuta la menos unas vez */
let numero = 1; 

do{
    crossOriginIsolated.log(numero); 
    condicion = condicion + 1; 
} while(numero <= 10); 

/*
for
utiliza un contador */ 

for (let control = 1; control == 10; control++) {
    console.log (control);
}
const comidas = ["Pozole", "Tacos", "Tortas"]; 
for(let i = 0; i < comidas.legth; i++) { // se puede indicar desde que psosicion iniciar 
    console.log(comidas[i]); 

}


