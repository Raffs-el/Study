const d = new Date();

document.getElementById('ano').innerHTML = d.getFullYear();

document.getElementById('mes').innerHTML = d.getMonth() ;

document.getElementById('dia').innerHTML = d.getDate();

document.getElementById('semana').innerHTML = d.getDay();

document.getElementById('hora').innerHTML = d.getHours();

document.getElementById('minuto').innerHTML = d.getMinutes();

document.getElementById('segundo').innerHTML = d.getSeconds();

document.getElementById('milisegundo').innerHTML = d.getMilliseconds();

document.getElementById('tempo').innerHTML = d.getTime();