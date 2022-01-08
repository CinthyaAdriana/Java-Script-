/* Crea una funcion que calcule el descuento que se le va hacer a un cliente
segun el valor de su compra. 
Si es una compra de menos de 100, se le hará unb descuento del 10% (0-99) 

Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20% (100-99)
y si es una compra de mas de 200 se le hara un descuento del 30% (200=>)

Utiliza prompt, funciones, condicionales y operadores de comparacion. 

La funcion debe pedir el precio al cliente, e imprimir el resultado del precio 
menos el descuento ya sea en pantalla o consola.  

*/

const compra = parseFloat(prompt('Ingresa el precio de tu compra'));
var descuento = 0;
var total = 0;

function totalDeCompra(compra, descuento){
    total = compra - descuento;
    return total;
}

if(compra < 100) {
    descuento = compra * 0.10;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
} else if (compra > 100 && compra < 200) {
    descuento = compra * 0.20;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
} else {
    descuento = compra * 0.30;
    totalDeCompra(compra, descuento);
    document.write('El total de tu compra es $' + total);
}

