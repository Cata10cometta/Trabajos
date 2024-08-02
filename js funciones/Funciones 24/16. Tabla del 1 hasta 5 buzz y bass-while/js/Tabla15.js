/**
 * función saludo
 * auto: Catalina CF
 * fecha: 20 de junio de 2024
 */

function tabla15(){
    let contMulti;
    let contTabla=1;
    let multiplicador=parseInt(document.getElementById('numero2').value);
    let tabla=parseInt(document.getElementById('numero1').value);
    let contPares=0;
    let contImpar=0;
    let resultado;
   
    while( contTabla<=tabla){
        contMulti= 1;
        while( contMulti<=multiplicador){
            resultado= contTabla * contMulti;
            
            
        if (resultado % 2 == 0) {
                document.getElementById('tabla').innerHTML+=`<strong>  ${contTabla}   X  ${contMulti} = ${resultado}= BUZZ <br> </strong>`;
        contPares=contPares+1;
    } else {
        document.getElementById('tabla').innerHTML+=`<strong>  ${contTabla}   X  ${contMulti} = ${resultado}= BASS <br> </strong>`;
        contImpar = contImpar+1;
    }
    contMulti=contMulti+1
   }
   contTabla=contTabla+1
    }
    document.getElementById('tabla').innerHTML += `<strong> Total de pares = ${contPares} </strong><br>`;
    document.getElementById('tabla').innerHTML += `<strong> Total de Impares = ${contImpar} </strong><br>`;
    return false;
   }
   