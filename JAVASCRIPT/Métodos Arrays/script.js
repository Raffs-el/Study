// Removendo elementos de uma array

const cars = ["BMW", " Hyundai", " Nissan", " Ford"];
document.getElementById('inicial').innerHTML = cars;
cars.pop()
document.getElementById('pop').innerHTML = cars;

// Adicionando elementos de uma array

const guitars = ["Fender", " Gibson", " Ibanez"];
document.getElementById('antes').innerHTML = guitars;
guitars.push(" PRS")
document.getElementById('depois').innerHTML = guitars;

// Splice

const fruits = ["Maçã"," Banana"," Uva"];
document.getElementById('anterior').innerHTML = fruits;
fruits.splice(2, 0, " Limão", " Laranja");
document.getElementById('proximo').innerHTML = fruits;
