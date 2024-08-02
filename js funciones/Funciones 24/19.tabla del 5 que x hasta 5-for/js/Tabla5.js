/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function tabla5(){
   let tabla=5;
   let numeroHasta=parseInt(document.getElementById('numero1').value);
   let contador;
   let multiplicacion=0;

    for(contador=1;contador<=numeroHasta;contador++){
        console.log(multiplicacion);
        multiplicacion=tabla*contador;
        document.getElementById('tabla').innerHTML+=`<strong> ${tabla}   X  ${contador} = ${multiplicacion} <br> </strong>`;
    }

   
   return false
       
   }


   