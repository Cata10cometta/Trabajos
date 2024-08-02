/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function tabla9(){
   let tabla=9;
   let numeroHasta= parseInt(document.getElementById('numero1').value);
   let contador=0;
   let multiplicacion=0;   

   while(contador<numeroHasta){
       contador++;
       multiplicacion=tabla*contador
       

       if(multiplicacion%2==0){
        document.getElementById('tabla').innerHTML+=`<strong>  ${tabla}   X  ${contador} = ${multiplicacion}= Par <br> </strong>`;

        }
        else{
            document.getElementById('tabla').innerHTML+=`<strong> ${tabla}   X  ${contador} = ${multiplicacion}=Impar <br> </strong>`;
        }
   }
   return false
}

       
   





  