
let precio = parseInt(prompt("Introduce el precio"));
let cupon = prompt("Introduce el cupon");
let result = 0;
let total = 0;

switch (cupon) {
    case "Bronce":
        result = precio * .05;

        break;
    case "Plata":
        result = precio * .10;
        break;
    case "Oro":
        result = precio * .15;
        break;
    case "Platino":
        result = precio * .25;
        break;
    default: result = 0;
        alert("El cupón no es válido");
        break;
}

total = precio - result;

document.write("Precio original: " +  precio); 
document.write("Descuento: " +  result);
document.write("Total: " +  total);