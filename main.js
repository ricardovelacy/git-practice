const arr = [1,2,3,5,4,1,2,3,6,4,5,2];

// Función para sumar todos los elementos del array
const sum = function (arr) {
    const result = arr.reduce((acum, item) => acum += item, 0);
    print("La suma es: ", result);
    return result;
}

const print = function(text, item) {
  console.log(text + item.toString());
}


// Función para calcular la media del array
const average = function (arr) {
    const result = sum(arr);
       let avg = result / arr.length;
   print('La media es: ', avg);
}


// Función para encontrar el número mayor del array
const max = function (arr) {
    const max = Math.max(...arr);
    print('El número mayor es: ', max);
}

const main = function() {
    const ul = document.querySelector('ul');
    const inputs = new Array(2);
    inputs.map(item => document.createElement('li'));
    inputs[0].textContent = "Soy músico 🎸";
    inputs[1].textContent = "Y desarrollador 💻";
    ul.append(...inputs);
}

document.addEventListener('DOMContentLoaded', main);

