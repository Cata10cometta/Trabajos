/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Contador5(){
   let numero= parseInt(document.getElementById('numero1').value);
   let contador=0;
   
   if(numero<=14){
      document.getElementById('contador').innerHTML="";

   while(contador<numero){
      contador=contador+1;
      document.getElementById('contador').innerHTML+=`<strong>  ${contador}  <br> </strong>`;
   }
}

   
   return false;
    
}