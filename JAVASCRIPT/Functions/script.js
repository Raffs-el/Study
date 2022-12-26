// Calculadora
function myCalc(n1, n2) {
    return n1 * n2;
}

document.getElementById('calc').innerHTML = myCalc(6, 3);


// Funções
function name(parameter1, parameter2, parameter3) {
    // código a ser executado
} 

// Conversor
function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById('conversor').innerHTML = toCelsius(86) + " ºC";

// Exemplo 3
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("example3").innerHTML = toCelsius;


// Exemplo 4
document.getElementById("example4").innerHTML =
"A temperatura é " + toCelsius(77)  + "º" + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

// Exemplo 5
myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("example5").innerHTML =
  typeof carName + " " + carName;
}

document.getElementById("example5.1").innerHTML =
typeof carName;