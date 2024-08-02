/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */
function edadesMayor(){

   let persona1= parseInt(document.getElementById('edadUno').value);
   let persona2= parseInt(document.getElementById('edadDos').value);
   let persona3= parseInt(document.getElementById('edadTres').value);
   let anoActual=2024;

   let edad1= anoActual-persona1;
   let edad2= anoActual-persona2;
   let edad3= anoActual-persona3;

   if (edad1>=18){
      descripcion1 = "Edad 1 es mayor de edad.";
   }
   else 
      descripcion1 = "Edad 1 es menor de edad.";
   
   if (edad2>=18){
      descripcion2 = "Edad 2 es mayor de edad.";
   }
   else  descripcion2 = "Edad 2 es menor de edad.";

    if (edad3>=18){
      descripcion3 = "Edad 3 es mayor de edad.";
   }
   else descripcion3 = "Edad 3 es menor de edad.";

   let promedio= (edad1+edad2+edad3)/3;
   
   if(promedio>=18){
      descripcion4 = "Son mayores de edad."
   }
   else{
      descripcion4 = "Son menores de edad."
   }
   
 
   document.getElementById('edades').innerHTML=`<strong> Edad1:</strong>${edad1} <br>   ${descripcion1} <br> <strong> 
   Edad2:</strong> ${edad2}  <br> ${descripcion2} <br> <strong> Edad3:</strong> ${edad3} <br>  
   ${descripcion3} <br>  <strong> Promedio:</strong> ${promedio} <br>  ${descripcion4} `;
   return false;
   
}

  