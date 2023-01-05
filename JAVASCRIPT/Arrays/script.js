// Acessando elemento de uma array 

const carros = ["Mercedez", "BMW", "Volvo"];
document.getElementById('array').innerHTML = carros[1];

// Alterando um elemento de uma array

const cars = ["Mercedez", "Ferrari", "Nissan"];
cars[0] = "Honda";
document.getElementById('alterar').innerHTML = cars[0];

// Tamanho de array

const frutas = ["Uva", "Morango", "Limão"];
document.getElementById('length').innerHTML = frutas.length;

