/**
 *Tablas
 * autor:Catalina CF
 * Fecha: 12 de abril del 2024
 * version:36
 */
 function tabla(ptabla,pnumeroHasta){
    let tabla= ptabla;
    let numeroHasta=pnumeroHasta;
    let contador;
    let multiplicacion=0;

    for(contador=1;contador<=numeroHasta;contador++){
        multiplicacion=tabla*contador
        console.log(+tabla+"x"+contador+"="+multiplicacion);
    }

}

const tablaExpresion=function(ptabla,pnumeroHasta){
    let tabla= ptabla;
    let numeroHasta=pnumeroHasta;
    let contador;
    let multiplicacion=0;

    for(contador=1;contador<=numeroHasta;contador++){
        multiplicacion=tabla*contador
        console.log(+tabla+"x"+contador+"="+multiplicacion);
    }

}