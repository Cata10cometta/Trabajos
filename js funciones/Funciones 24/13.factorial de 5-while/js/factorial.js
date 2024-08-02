/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Factorial5(){
   let numero= parseInt(document.getElementById('numero1').value);
   let contador=0;
   let factorial=1;

   while(contador<numero){
      contador=contador+1;
      factorial=factorial*contador;
      document.getElementById('factorial').innerHTML+=`<strong>  ${factorial}  <br> </strong>`;
   }

   return false;
    
}