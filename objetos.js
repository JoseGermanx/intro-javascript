


let estudiante = {
    nombre: "Jose",
    apellido: "Perez",
    rut: "12345678-9",
    edad: 20,
    direccion: {
        calle: "Av. Siempre viva",
        numero: 123
    },
}



let datosEstudiante = estudiante.direccion.numero;


let nuevoObjeto = new Object(); //objeto vacio


nuevoObjeto.nombre = "Juan"; //asigno
nuevoObjeto.apellido = "Perez";
nuevoObjeto.edad = 20;



estudiante.notas = [1,2,3,4,5,6,7,8,9,10]


let estudiante2 = {...estudiante}

console.log(estudiante);
console.log(nuevoObjeto);
console.log(estudiante2);


let objetoUno = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    direccion: {
        calle: "Av. Siempre viva",
        numero: 123
    },
}

let objetoDos = {...objetoUno}

let sonIguales = JSON.stringify(objetoUno) === JSON.stringify(objetoDos);


console.log(sonIguales);



// Definición del objeto "persona"
var persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
  };
  
  // Llamada al método "saludar"
  persona.saludar();
  

