/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Contador5(){
   let numero= parseInt(document.getElementById('numero1').value);
   let contador;

   for(contador=1;contador<=numero;contador++){
      document.getElementById('contador').innerHTML+=`<strong>  ${contador}  <br> </strong>`;
      
   }

   
   return false;
    
}