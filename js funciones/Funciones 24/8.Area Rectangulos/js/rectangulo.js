/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function Numeros(){
   let baseUno= parseInt(document.getElementById('baseUno').value);
   let baseDos= parseInt(document.getElementById('baseDos').value);
   let alturaUno= parseInt(document.getElementById('alturaUno').value);
   let alturaDos= parseInt(document.getElementById('alturaDos').value);
   
   let areaUno= baseUno*alturaUno;
   let areaDos= baseDos*alturaDos;

   if (areaUno>areaDos){
      descripcion = "La area del rectangulo 1 es mayor";
   }
   else if (areaDos>areaUno){
      descripcion = "La area del rectangulo 2 es mayor";
   }

  

   document.getElementById('areaRectangulos').innerHTML=`<strong> Area: </strong> Rectangulo1: ${areaUno} 
   Rectangulo2: ${areaDos} ${descripcion}`;
   return false
}
    
   