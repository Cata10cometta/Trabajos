/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */
function calcularEdad(){

   let  fechaNacimiento = document.getElementById('txtFecNac').value;
  
   var hoy = new Date();

   var fechaNac = new Date(fechaNacimiento);
   
   var edad = hoy.getFullYear() - fechaNac.getFullYear();
  
   var mes = hoy.getMonth() - fechaNac.getMonth();

   document.getElementById('edad').innerHTML=`<strong> Edad:</strong>${edad}`;
   return false;
   
}

  