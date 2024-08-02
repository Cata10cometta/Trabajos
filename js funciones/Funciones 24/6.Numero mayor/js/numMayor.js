/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Numeros(){
   let numeroUno= parseInt(document.getElementById('numeroUno').value);
   let numeroDos= parseInt(document.getElementById('numeroDos').value);

   if(numeroUno>numeroDos){
      descripcion = "Numero 1 es mayor";
   }
   else{
      descripcion = "Numero 2 es mayor";
   }
  

   document.getElementById('numero').innerHTML=`<strong> Numero Uno= ${numeroUno} <br> Numero Dos= ${numeroDos}<br> ${descripcion}</strong>`;
   return false
}
    
   