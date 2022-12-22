function start(){

    var number1 = prompt("Informe o primeiro número:");
    var number2 = prompt("Informe o segundo número:");
    var number3 = prompt("Informe o terceiro número:");

    if ((number1 > number2) && (number1 > number3)){
        alert("O primeiro número informado é o maior!");
    } else if ((number2 > number1) && (number2 > number3)) {
        alert("O segundo número informado é o maior!");
    } else if ((number3 > number1) && (number3 > number2)) {
        alert("O terceiro número informado é o maior!");
    } else {
        alert("Os números são iguais ou nada foi informado.");
    }
}