/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Edades(){
   let persona1= parseInt(document.getElementById('edadUno').value);
   let persona2= parseInt(document.getElementById('edadDos').value);
   let persona3= parseInt(document.getElementById('edadTres').value);
   let anoActual= 2024;

   let edad1= anoActual-persona1;
   let edad2= anoActual-persona2;
   let edad3= anoActual-persona3;

   let promedio= (edad1+edad2+edad3)/3;
   document.getElementById('edad3').innerHTML=`<strong> Edad1: ${edad1} <br> Edad2: ${edad2} <br> Edad3: ${edad3} <br> 
   Promedio: ${promedio} <br></strong>`;
   return false

}

