// Exemplo 1
let texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById('exemplo1').innerHTML = "A quantidade de letras no alfabeto é " + texto.length + ".";

// String Slice
let text = "Fender, Ibanez, Gibson";
let part = text.slice(7,14);
let part_1 = text.slice(7);
document.getElementById('exemplo3').innerHTML = part;
document.getElementById('exemplo3_1').innerHTML = part_1;