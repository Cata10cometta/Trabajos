function calcular(psalario) {
    let salario = psalario;
    let salarioMinimo = 1300000;
    
    let salud = salario * 0.12;
    let pension = salario * 0.16;
    let arl = salario * 0.052;
    let deducibles = salud + pension + arl;
    let renta;
    let subsidioTransporte;

    if (salario > 2 * salarioMinimo) {
       subsidioTransporte=0;
    } else {
        subsidioTransporte = 114000; 
    }

    if (salario > 4 * salarioMinimo) {
        renta = salario * 0.04;
        
    } else {
       renta=0
    }

   pagoTotal = (salario - deducibles) + subsidioTransporte - renta;

    return "el salario es=" + salario + ", la salud es= " + salud + ", la pension es=" + pension + 
    ", el arl es= " + arl + ", los deducibles son=" + deducibles + ", el subsidio de trasnporte es="+subsidioTransporte+ 
    ", la renta es="+renta+ ", el pago total es=" + pagoTotal ;
}

const calcularExpresion =function
(psalario) {
    let salario = psalario;
    let salarioMinimo = 1300000;
    
    let salud = salario * 0.12;
    let pension = salario * 0.16;
    let arl = salario * 0.052;
    let deducibles = salud + pension + arl;
    let renta;
    let subsidioTransporte;

    if (salario > 2 * salarioMinimo) {
       subsidioTransporte=0;
    } else {
        subsidioTransporte = 114000; 
    }

    if (salario > 4 * salarioMinimo) {
        renta = salario * 0.04;
        
    } else {
       renta=0
    }

   pagoTotal = (salario - deducibles) + subsidioTransporte - renta;

    return "el salario es=" + salario + ", la salud es= " + salud + ", la pension es=" + pension + 
    ", el arl es= " + arl + ", los deducibles son=" + deducibles + ", el subsidio de trasnporte es="+subsidioTransporte+ 
    ", la renta es="+renta+ ", el pago total es=" + pagoTotal ;
}

