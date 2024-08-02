/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function areaCircunferencia(){
   let pi=3.1416;
   let radio= parseInt(document.getElementById('Circunferencia').value);
   let area;

   area= pi*radio*radio;

   document.getElementById('area').innerHTML= `<strong>Area Circunferencia:</strong> ${area}`;
   return false;
}
    
   