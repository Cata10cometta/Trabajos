/**
 * numeros del 1 hasta el 10 usando arreglos en una lista desplegable
 * Autor: Catalina CF
 * Fecha: 12 de julio de 2024
 */

document.addEventListener('DOMContentLoaded', function(){
    let arreglo=[];
    let iteracion;
    let printResultado='';
    let numero;
    arreglo=[1,2,3,4,5,6,7,8,9,10];

    for(iteracion=0;iteracion<10;iteracion++){
        //console.log(arreglo[iteracion]);
        printResultado+='<option value="'+arreglo[iteracion]+'">'+arreglo[iteracion]+'</option>';
    }
    document.getElementById('lista-numeros').innerHTML=printResultado;

});

//crear arreglo con una iteracion
arreglo=[];
for(iteracion=0;iteracion<20;iteracion++){
    numero= iteracion + 1;
    arreglo.push(numero);
}

printResultado='';
for(iteracion=0;iteracion<arreglo.length;iteracion++){
    printResultado+='<option value="'+arreglo[iteracion]+'">'+arreglo[iteracion]+'</option>';
}
document.getElementById('lista-dos-numeros').innerHTML=printResultado;

//console.log(arreglo);

