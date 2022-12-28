// Exemplo 1: criar e mostrar uma variável

let guitarra = "Ibanez";
document.getElementById('exemplo1').innerHTML = guitarra;


// Exemplo 2: criar um objeto e mostrar alguma informação dele

const guitar = {type: "Ibanez", model: "Prestige", color: "Black Night"};
document.getElementById('exemplo2').innerHTML = "O modelo da guitarra é " + guitar.model;


// Exemplo 3

const violao = {type: "Takamine", price: "R$ 3.400,00", color: "Natural"};
document.getElementById('exemplo3').innerHTML = "A marca do violão é " + violao.type + ", o seu valor é de " + violao.price + " e a sua cor é " + violao.color + ".";


// Exemplo 4: usando "this"

const guitarPedals = {type: "Boss", model: "DS1W", name: "Distortion", fullType: function() {return this.type + " " + this.model + " " + this.name}};
document.getElementById('exemplo4').innerHTML = guitarPedals.fullType();