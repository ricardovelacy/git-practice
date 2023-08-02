const arr = [1, 2, 3, 4, 5];

// Función para sumar todos los elementos del array
const sum = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log('La suma es: ' + result);
}

sum(arr);

// Función para calcular la media del array
const average = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    let avg = result / arr.length;
    console.log('La media es: ' + avg);
}

average(arr);

// Función para encontrar el número mayor del array
const max = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('El número mayor es: ' + max);
}

max(arr);
