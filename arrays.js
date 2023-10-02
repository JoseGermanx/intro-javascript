

let listaFrutas = ["manzanas","platanos","naranjas","peras","uvas"];

console.log(typeof listaFrutas);

console.log("Antes del push: ", listaFrutas);

//agregar un elemento al final del array
listaFrutas.push("sandias");

console.log("Después del push: ", listaFrutas);

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
           //       0 1 2 3 4 5 6 7 8 9

console.log("Antes del pop: ", arrayNumeros);

//eliminar el último elemento del array
arrayNumeros.pop();

console.log("Después del pop: ", arrayNumeros);

//eliminar el primer elemento del array
arrayNumeros.shift();

console.log("Después del shift: ", arrayNumeros);



let objManzana = {
    "id": "1",
    "name": "manzana",
    "qty": 10,
    "price": 100,
    "utilidad": {
        "casa": ["comer","hacer jugo","decorar"],
        "medicina": "curar la diarrea",
        "postre": "torta de manzana"
    }
};

let objPlatano = {
    "id": "2",
    "name": "plantano",
    "qty": 1,
    "price": 20
};


//el carrito vacio
let carritoDeCompra = [];

//preciona un botén de agregar
carritoDeCompra.push(objManzana);

// carritoDeCompra = [{"id": "1", "name": "manzana", "qty": 10, "price": 100} ]


console.log("carritoDeCompra: ", carritoDeCompra); 

//seguimos navegando en el sitio

carritoDeCompra.push(objPlatano);

// carritoDeCompra = [{"id": "1", "name": "manzana", "qty": 10, "price": 100}, {"id": "2", "name": "plantano", "qty": 1, "price": 20} ]
//                                                 0                                                      1

console.log(carritoDeCompra[1]);


let arrayMixto = [1,2,3,"hola","mundo",true,false,{"name": "juan", "edad": 20},[1,2,3,4,5]];
//                0 1 2   3      4      5     6                 7                    8

console.log(arrayMixto[8][2])


let arrayNumeros2 = [1,2,3,4,5,6,7,8,9,10, 20, 88, 65, 74, 23];
//                   0 1 2 3 4 5 6 7 8 9   10  11  12  13  14

let cantidadDeNumeros = arrayNumeros2.length; //10

//alamacenar la suma de los numeros
let suma = 0;

for (let i = 0; i < arrayNumeros2.length; i++) { 
    suma += arrayNumeros2[i]
}

//suma será igual al resutado de la suma de todos los numeros del array

let promedio = suma / cantidadDeNumeros;

console.log("El promedio es: ", promedio);

console.log(arrayNumeros2.indexOf(20));


