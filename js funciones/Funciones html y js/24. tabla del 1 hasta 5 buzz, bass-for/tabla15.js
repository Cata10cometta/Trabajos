function tabla15(ptabla,pmulti){
    let contMulti;
    let contTabla;
    let multiplicador;
    let tabla;
    let contPares=0;
    let contImpar=0;
    let resultado;
    
    multiplicador = pmulti;
    tabla = ptabla;
   
    for(contTabla=1; contTabla<=tabla; contTabla++){
        contMulti= 1;
        for(contMulti=1; contMulti<=multiplicador; contMulti++){
            resultado= contTabla * contMulti;
            
        if (resultado % 2 == 0) {
                console.log(contTabla + "x" + contMulti + "=" + resultado + "= buzz");
        contPares=contPares+1;
    } else {
        console.log(contTabla+ 'x' + contMulti + '=' + resultado + '= bass');
        contImpar = contImpar+1;
    } 
   }
    }
   console.log("Total de números pares:" + contPares);
   console.log("Total de números impares:" + contImpar);
    
   }

  const tabla15Expresion= function tabla15(ptabla,pmulti){
    let contMulti;
    let contTabla;
    let multiplicador;
    let tabla;
    let contPares=0;
    let contImpar=0;
    let resultado;
    
    multiplicador = pmulti;
    tabla = ptabla;
   
    for(contTabla=1; contTabla<=tabla; contTabla++){
        contMulti= 1;
        for(contMulti=1; contMulti<=multiplicador; contMulti++){
            resultado= contTabla * contMulti;
            
        if (resultado % 2 == 0) {
                console.log(contTabla + "x" + contMulti + "=" + resultado + "= buzz");
        contPares=contPares+1;
    } else {
        console.log(contTabla+ 'x' + contMulti + '=' + resultado + '= bass');
        contImpar = contImpar+1;
    } 
   }
    }
   console.log("Total de números pares:" + contPares);
   console.log("Total de números impares:" + contImpar);
    
   }
   