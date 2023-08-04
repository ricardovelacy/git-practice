const arr = new Array(20);
arr.forEach(item => {
    arr.push(Math.floor(Math.random*10));
})

// Función para sumar todos los elementos del array
const sum = function (arr) {
    const result = arr.reduce((acumulador, item) => acumulador += item, 0);
    print("La suma es : ", result);
    return result;
}

const print = function(text, item) {
  console.log(text + item.toString());
}


// Función para calcular la media del array
const average = function (arr) {
    const result = sum(arr);
       let avg = result / arr.length;
   print('La media es : ', avg);
}


// Función para encontrar el número mayor del array
const max = function (arr) {
    const max = Math.max(...arr);
    print('El número mayor es : ', max);
}

const main = function() {
    const ul = document.querySelector('ul');
    const input = document.createElement('li')
    const input1 = document.createElement('li')
    const input2 = document.createElement('li')
    input.textContent = "Soy músico 🎸";
    input1.textContent = "Y desarrollador 💻";
    input2.textContent = "Y que rico un café ☕";
    ul.appendChild(input);
    ul.appendChild(input1);
    ul.appendChild(input2);
}

document.addEventListener('DOMContentLoaded', main);

