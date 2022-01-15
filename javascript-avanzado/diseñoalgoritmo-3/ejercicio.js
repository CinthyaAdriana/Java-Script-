
const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
console.log (numeros);

let resultados = []; 
numeros.forEach(function(el){
    let multiplicacion = el * 2;
    return resultados.push(multiplicacion);  
})
console.log (resultados);

for(let i = 0; i < resultados.legth; i++) {
    console.log(resultados[i]); 
}
