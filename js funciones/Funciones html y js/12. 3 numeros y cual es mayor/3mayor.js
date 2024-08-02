/**
 *area Numero Mayor entre tres
 * autor:Catalina CF
 * Fecha: 07 de abril del 2024
 * version:26
 */

 function numeroMayor(pnumeroUno, pnumeroDos, pnumeroTres){
    let numeroUno=pnumeroUno;
    let numeroDos= pnumeroDos;
    let numeroTres= pnumeroTres;

    if (numeroUno > numeroDos && numeroUno > numeroTres){
         return "El primer numero es mayor=" +numeroUno;
    }
    else{
        if (numeroDos > numeroUno && numeroDos > numeroTres){
            return "El segundo numero es mayor=" +numeroDos;
        }
        else{
    return "El tercer numero es mayor=" +numeroTres;
    }
    
    }
}

const numeroMayorExpresion=function(pnumeroUno, pnumeroDos,pnumeroTres){
    let numeroUno=pnumeroUno;
    let numeroDos= pnumeroDos;
    let numeroTres= pnumeroTres;
    
    if (numeroUno > numeroDos && numeroUno > numeroTres){
         return "El primer numero es mayor=" +numeroUno;
    }
    else{
        if (numeroDos > numeroUno && numeroDos > numeroTres){
            return "El segundo numero es mayor=" +numeroDos;
        }
        else{
    return "El tercer numero es mayor=" +numeroTres;
    }
    
    }
}