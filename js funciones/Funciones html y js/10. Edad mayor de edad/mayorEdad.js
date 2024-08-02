/**
 * Mayor de edad 
 * autor:Catalina CF
 * Fecha: 07 de abril del 2024
 * version:22
 */

function mayorEdad(pyearBegin){
    let yearBegin= pyearBegin;
    let yearNow= 2024;
    let edad;
    edad= yearNow-yearBegin;

    if (edad>=18){
        return "Es mayor de edad=" +edad;
    }
    else{ (edad<17)
        return "Es menor de edad=" +edad;
    }

}

const mayorEdadExpresion= function(pyearBegin){
    let yearBegin= pyearBegin;
    let yearNow= 2024;
    let edad;
    edad= yearNow-yearBegin;

    if (edad>=18){
        return "Es mayor de edad=" +edad;
    }
    else{ (edad<17)
        return "Es menor de edad=" +edad;
    }

}