/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Notas(){
   let notaUno= parseInt(document.getElementById('NotaUno').value);
   let notaDos= parseInt(document.getElementById('NotaDos').value);
   let notaTres= parseInt(document.getElementById('NotaTres').value);
   let promedio;

   promedio= (notaUno+notaDos+notaTres)/3;

   document.getElementById('promedio').innerHTML=`<strong> promedio: </strong> ${promedio}`;
   return false
}
    
   