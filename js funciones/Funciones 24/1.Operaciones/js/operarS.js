/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function sumar (){
   let numeroUno = document.getElementById('txtNumero1').value;
   let numeroDos = document.getElementById('txtNumero2').value;
   let suma = parseInt(numeroUno) + parseInt(numeroDos);

   document.getElementById('sumars').innerHTML=`<strong>El valor de la suma es: ${suma}</strong>`;
   return false;
}


function restar(){
   let numeroUno = document.getElementById('txtNumero1').value;
   let numeroDos = document.getElementById('txtNumero2').value;

   let resta = numeroUno - numeroDos;
   document.getElementById('restars').innerHTML=`<strong>El valor de la resta es: ${resta}</strong>`;
   return false;
}

function multiplicar (){
   let numeroUno = document.getElementById('txtNumero1').value;
   let numeroDos = document.getElementById('txtNumero2').value;

   let multi = numeroUno * numeroDos;
   document.getElementById('multiplicacion').innerHTML=`<strong>El valor de la multiplicación es: ${multi}</strong>`;
   return false;
}

function division (){
   let numeroUno = document.getElementById('txtNumero1').value;
   let numeroDos = document.getElementById('txtNumero2').value;

   let dividir = numeroUno/numeroDos;

   document.getElementById('division').innerHTML=`<strong>El valor de la division es: ${dividir}</strong>`;
   return false;
}

function promedios() { //con parametros
   let numeroUno = parseInt(document.getElementById('txtNumero1').value);
   let numeroDos = parseInt(document.getElementById('txtNumero2').value);
   let promedio;
   promedio = (numeroDos + numeroUno)/2;

   document.getElementById('promedio').innerHTML=`<strong>El valor del promedio es: ${promedio}</strong>`;
   return false;
}