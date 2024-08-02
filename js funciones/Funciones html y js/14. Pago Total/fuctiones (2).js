function salario (pvalorDia, pdiasTrabajados){
    let valorDia= pvalorDia;
    let diasTrabajados= pdiasTrabajados;
    let resultado= valorDia*diasTrabajados;
    return resultado
}

function salud (pvalorDia, pdiasTrabajados){
    let saludPersona;
    let salarioPersona = salario (pvalorDia,pdiasTrabajados);
    saludPersona= salarioPersona * 0.12;
    return saludPersona;
}

function subTrans (pvalorDia, pdiasTrabajados) {
    let subTrans;
    let salarioPersona= salario(pvalorDia,pdiasTrabajados);
    let salarioMinimo= 1300000;
    if (salarioPersona<=2*salarioMinimo){
        subTrans= 114000 + " si recibe subtrans"
    }
        else { subTrans= 0 + " no recibe subtrans"
    }
    return subTrans;
}


function pension(pvalorDia,pdiasTrabajados){
    let pension 
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    pension=salarioPersona*0.16;
    return pension;
}

function arl( pvalorDia,pdiasTrabajados){
    let arl
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    arl=salarioPersona*0.052;
    return arl;
}

function renta (pvalorDia,pdiasTrabajados){ 
    let renta
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    let salarioMinimo= 1300000;
    if (salarioPersona>4*salarioMinimo){
        renta= 0.02 * salarioPersona;
    }
        else if(salarioPersona>6*salarioMinimo){
            renta = 0.04 * salarioPersona;
        } 
        else {renta = 0}

        return renta;
    }
    
    const edad= function(pvalorDia,pdiasTrabajados){
        let edad=nomina[iteracion].edad;
        let pagoV;
        let salarioPersona= salario(pvalorDia,pdiasTrabajados);
        if (edad >= 40) {
            pagoV = salarioPersona*0.06;}
            else if (edad > 60){
            pagoV= salarioPersona * 0.08;}
            else {
                pagoV=0;
            }
            return pagoV
        }


    function deducible(pvalorDia,pdiasTrabajados){
        let saluhvy= salud(pvalorDia,pdiasTrabajados);
        let pensionxf=pension(pvalorDia,pdiasTrabajados);
        let arlsd=arl(pvalorDia,pdiasTrabajados);
        let rentahj=renta(pvalorDia,pdiasTrabajados);
        let descuento = saluhvy + pensionxf + arlsd + rentahj;
        return descuento;
    }

    function totalPagar(pvalorDia,pdiasTrabajados){
        let salarioPersona=salario(pvalorDia,pdiasTrabajados);
        let subTranss=subTrans(pvalorDia,pdiasTrabajados);
        let deducibles=deducible(pvalorDia,pdiasTrabajados);
        let pagoVi = edad(pvalorDia,pdiasTrabajados);
        let pago;
        pago=(salarioPersona-deducibles)+subTranss+pagoVi;
        return pago;
    }