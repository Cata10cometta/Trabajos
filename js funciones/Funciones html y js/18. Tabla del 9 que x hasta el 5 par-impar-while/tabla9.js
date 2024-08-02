/**
 *Tabla
 * autor:JR
 * Fecha: 12 de abril del 2024
 * version:38
 */
 function tabla(ptabla,pnumeroHasta){
    let tabla= ptabla;
    let numeroHasta=pnumeroHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numeroHasta){
        contador++;
        multiplicacion=tabla*contador;
    
        if (multiplicacion%2==0){
            console.log (+tabla+ "x" +contador+ "=" +multiplicacion+"= es par");
        }
        else{
            console.log (+tabla+ "x" +contador+ "=" +multiplicacion+ "= es impar");
        }
    }

}

const tablaExpresion=function(ptabla,pnumeroHasta){
    let tabla= ptabla;
    let numeroHasta=pnumeroHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numeroHasta){
        contador++;
        multiplicacion=tabla*contador;

        if (multiplicacion%2==0){
            console.log (+tabla+ "x" +contador+ "=" +multiplicacion+"= es par");
        }
        else{
            console.log (+tabla+ "x" +contador+ "=" +multiplicacion+"= es impar");
        }
    }

}