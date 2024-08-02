/**
 *area rectangulo mayor
 * autor: Catalina CF
 * Fecha: 07 de abril del 2024
 * version:24
 */
 function calcular(paltura1,pbase1,paltura2,pbase2){
   let altura1=paltura1;
   let base1=pbase1;
   let altura2=paltura2;
   let base2=pbase2;
   let rectangulo1;
   let rectangulo2;

   rectangulo1=altura1*base1;
   rectangulo2=altura2*base2;
   if(rectangulo1==rectangulo2){
    console.log("Son iguales=" +rectangulo1+ "=" +rectangulo2)
   }
   else if(rectangulo1>rectangulo2){
    console.log("El rectangulo 1 es mayor=" +rectangulo1);
   }
   else{
    console.log("El rectangulo 2 es mayor=" +rectangulo2);
   }

}

const calcularExpresion=function(paltura1,pbase1,paltura2,pbase2){
    let altura1=paltura1;
    let base1=pbase1;
    let altura2=paltura2;
    let base2=pbase2;
    let rectangulo1;
    let rectangulo2;
 
    rectangulo1=altura1*base1;
    rectangulo2=altura2*base2;
    if(rectangulo1==rectangulo2){
        console.log("Son iguales=" +rectangulo1+ "=" +rectangulo2)
       }
    else if(rectangulo1>rectangulo2){
     console.log("El rectangulo 1 es mayor=" +rectangulo1);
    }
    else{
     console.log("El rectangulo 2 es mayor=" +rectangulo2);
    }
 
 }
 