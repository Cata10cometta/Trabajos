/**
 *Tabla con condiciones
 * autor:Catalina CF
 * Fecha: 13 de abril del 2024
 * version:40
 */

function tabla15(ptabla,pmulti){
 let contMulti;
 let contTabla;
 let multiplicador;
 let tabla;
 let contPares=0;
 let contImpar=0;
 let resultado;
 
 contTabla =1;
 multiplicador = pmulti;
 tabla = ptabla;

 while( contTabla<=tabla){
     contMulti= 1;
     while( contMulti<=multiplicador){
         resultado= contTabla * contMulti;
   
     if (resultado % 2 == 0) {
             console.log(contTabla + "x" + contMulti + "=" + resultado + "= buzz");
     contPares=contPares+1;
 } else {
     console.log(contTabla+ 'x' + contMulti + '=' + resultado + '= bass');
     contImpar = contImpar+1;
 }
 contMulti=contMulti+1

}
contTabla=contTabla+1
 }
console.log("Total de números pares:" + contPares);
console.log("Total de números impares:" + contImpar);
 
}

const tabla15Expresion=function (ptabla,pmulti){
    let contMulti;
    let contTabla;
    let multiplicador;
    let tabla;
    let contPares=0;
    let contImpar=0;
    let resultado;
    
    contTabla =1;
    multiplicador = pmulti;
    tabla = ptabla;
   
    while( contTabla<=tabla){
        contMulti= 1;
        while( contMulti<=multiplicador){
            resultado= contTabla * contMulti;
      
        if (resultado % 2 == 0) {
                console.log(contTabla + "x" + contMulti + "=" + resultado + "= buzz");
        contPares=contPares+1;
    } else {
        console.log(contTabla+ 'x' + contMulti + '=' + resultado + '= bass');
        contImpar = contImpar+1;
    }
    contMulti=contMulti+1
   
   }
   contTabla=contTabla+1
    }
   console.log("Total de números pares:" + contPares);
   console.log("Total de números impares:" + contImpar);
    
   }
   