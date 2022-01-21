//Clase, molde que nos permite crear objetos 

class Animal{ 
    //constructor es una funcion 
    constructor(nombre, especie){
        // this. es una variable que se crea internamente y hace referencia al contexto en que se esta utilizando 
        this.nombre = nombre;  // caracteristicas del objeto 
        this.especie = especie; 
    } 

    //getters y setters
    //solo tienen este proposito de leer o modificar un atributo 
    get getNombre(){
        return this.nombre; 
    }

    set getNombre(nombre){
        this.nombre = nombre; 
    }

    get getEspecie(){
        return this.especie;
    } 

    set setEspecie(especie){
        this.especie = especie;
    }

    //metodos == funcion 
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
       this.nombre = nuevoNombre; 
       let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}<br>`
       return document.write(mensaje);
    }

    //Metodos estáticos, se puede ejecutar sin necesidad de crear un objeto 
    static saludar(){ //Esta función solo aplica a la clase Animal, no a los objetos 
        return console.log("Hola,soy un método estático"); 
    }
} 

//Animal.presentarse();
//console.log(Animal.getNombre); 
Animal.saludar();


// Crear el objeto o instanciar
//Heredan los atributos de la clase y los metodos de la calse que estan utilizando 
const Animal1 = new Animal("Scooby", "Perro"); //creamos un objeto
console.log(Animal1); 

// Otro objeto, este re-utiliza las caracteristicas de la clase anterior 
const Animal2 = new Animal("Pecas", "Gato"); 
console.log(Animal2); 

const Animal3 = new Animal(); 
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse(); 
Animal3.presentarse();

console.log (Animal1.nombre); 
Animal1.nombre = "Scrappy";
console.log(Animal1.nombre); 
console.log(Animal1);

Animal1.cambiarNombre("Oddie"); //metodo para cambiar el valor 
 
//Getters y Setters 
//get = obtener el valor de un atributo
//set = fijar o cambiar el valor de un atributo   
//Se utilizan como si fueran atributos 

console.log(Animal1.getNombre); 
Animal1.setNombre = "Manchas"; 
console.log(Animal1.getNombre);
console.log(Animal1);

