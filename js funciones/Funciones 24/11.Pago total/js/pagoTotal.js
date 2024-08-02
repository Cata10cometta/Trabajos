/**
 * funcion saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function salario(){
   let valorDia= parseInt(document.getElementById('valorD').value);
   let diasTrabajados= parseInt(document.getElementById('diasT').value);
   let resultado;

   resultado= valorDia*diasTrabajados;

   document.getElementById('pagoT').innerHTML=`<strong>Salario: </strong> ${resultado}`;
   return resultado;
}


function salud(){
   let saludPersona;
   let salarioPersona = salario();
   saludPersona= salarioPersona * 0.12;
   
   document.getElementById('pagoT').innerHTML=`<strong>Salud Persona: </strong> ${saludPersona}`;
   return saludPersona;
}

function subTrans() {
   let subTransP;
   let salarioPersona= salario();
   let salarioMinimo= 1300000;
   if (salarioPersona<=2*salarioMinimo){
       subTransP= 114000 
       document.getElementById('pagoT').innerHTML=`<strong>Subtrans: </strong> si recibe subtrans ${subTransP}`;

   }
       else { subTransP= 0  
        document.getElementById('pagoT').innerHTML=`<strong>Subtrans: </strong>no recibe subtrans ${subTransP}`;

   }
   return subTransP;
}


function pension(){
   let pension 
   let salarioPersona=salario();
   pension=salarioPersona*0.16;

   document.getElementById('pagoT').innerHTML=`<strong>Pensión: </strong> ${pension}`;
   return pension;
}

function arl(){
   let arl
   let salarioPersona=salario();
   arl=salarioPersona*0.052;

   document.getElementById('pagoT').innerHTML=`<strong>Arl: </strong> ${arl}`;
   return arl;
}

function renta(){ 
   let renta
   let salarioPersona=salario();
   let salarioMinimo= 1300000;
   if (salarioPersona>4*salarioMinimo){
       renta= 0.02 * salarioPersona;
   }
       else if(salarioPersona>6*salarioMinimo){
           renta = 0.04 * salarioPersona;
       } 
       else {renta = 0}

       document.getElementById('pagoT').innerHTML=`<strong>Renta: </strong> ${renta}`;
       return renta;
   }


   function deducible(){
       let saludPer= salud();
       let pensionPer=pension();
       let arlPer=arl();
       let rentaPer=renta();
       let descuento = saludPer + pensionPer + arlPer + rentaPer;

       return descuento;
   }

   function totalPagar(){
       let salarioPersona=salario();
       let subTranss=subTrans();
       let deducibles=deducible();
       let pago;
       pago=(salarioPersona+subTranss)-deducibles;
       document.getElementById('pagoT').innerHTML=`<strong>el pago total es de: </strong> ${pago}`;

      
   }
