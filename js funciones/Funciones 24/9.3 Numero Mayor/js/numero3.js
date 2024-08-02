/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function numeroMayor3(){
   let numero1= parseInt(document.getElementById('NumeroUno').value);
   let numero2= parseInt(document.getElementById('NumeroDos').value);
   let numero3= parseInt(document.getElementById('NumeroTres').value);

   if(numero1>numero2&&numero1>3){
      Descripcion = "Numero 1 es mayor";
   }
   else if(numero2>numero1&&numero2>numero3){
      Descripcion = "Numero 2 es mayor";
   }
   else{
      Descripcion = "Numero 3 es mayor";
   }
   
   

   
   document.getElementById('numeroMayor').innerHTML=`<strong> Numero Uno: ${numero1} <br> Numero Dos: ${numero2} 
   <br> Numero Tres: ${numero3} <br> ${Descripcion} </strong>`;
   return false

}

