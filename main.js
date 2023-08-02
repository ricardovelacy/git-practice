let size = 0;
let arr = [];
let counter = 0;
process.stdin.on('data', (chunk) => {
    const input = chunk.toString().trim(); // convertir datos a string sin espacios
        if (!size) {
            console.log("Ingrese la cantidad de elementos del array");
            size = chunk;
        } else if (counter < size){ // para acabar la ejecución
            console.log("Ingrese un numero para añadir al array");
            arr.push(Number(input));
            counter++
        }
        if (counter == size) {
            console.log("Oprima ctrl + d");
        }
})

process.stdin.on('end', () => {
    console.log('End of input. \n')
    sum(arr);
    average(arr);
    max(arr);
})

// Función para sumar todos los elementos del array
const sum = function (arr) {
    const result = arr.reduce((acum, item) => acum += item, 0);
    console.log('La suma es: ' + result);
    return result;
}


// Función para calcular la media del array
const average = function (arr) {
    let result = sum(arr);
       let avg = result / arr.length;
    console.log('La media es: ' + avg);
}


// Función para encontrar el número mayor del array
const max = function (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('El número mayor es: ' + max);
}

