// Upper Case

function upperCase() {
    let texto = document.getElementById('upperCase').innerHTML;
    document.getElementById('upperCase').innerHTML = texto.toUpperCase();
}

// Lower Case

function lowerCase() {
    let texto = document.getElementById('lowerCase').innerHTML;
    document.getElementById('lowerCase').innerHTML = texto.toLowerCase();
}

// Slice

let texto = "Fender, Ibanez, Gibson";
let parte= texto.slice(7,14);
document.getElementById('slice').innerHTML = parte;

// Substituindo 

function substituindo(){
    let text = document.getElementById('substituindo').innerHTML;
    document.getElementById('substituindo').innerHTML = text.replace("Violão", "Guitarra");
}

