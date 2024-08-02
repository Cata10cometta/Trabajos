/**
 * Tablas de Multiplicar usando arreglos con Bootstrap
 * Autor: Catalina CM
 * Fecha: 12 de julio de 2024
 */
document.addEventListener('DOMContentLoaded', function(){
    let tabla=[];
    let multiplicar=[];
    let iteracionTabla;
    let iteracionMultiplicar;
    let numeroTabla;
    let numeroMultiplicar;
    let resultadoMultiplicacion;
    let printTabla='';

    for(iteracionTabla=0;iteracionTabla<5;iteracionTabla++){
        numeroTabla= iteracionTabla+1;
        multiplicar=[];
        for(iteracionMultiplicar=0;iteracionMultiplicar<10;iteracionMultiplicar++){
            numeroMultiplicar=iteracionMultiplicar+1;
            resultadoMultiplicacion= numeroTabla*numeroMultiplicar;
            multiplicar.push(resultadoMultiplicacion);
        }
        tabla.push(multiplicar);
    }
    for(iteracionTabla=0;iteracionTabla<tabla.length;iteracionTabla++){
        numeroTabla= iteracionTabla + 1;

        printTabla += '<div class="col-3">';
        printTabla += '<table class="table table table-striped">';
        printTabla += '<thead>';
        printTabla += '<tr>';
        printTabla +='<th scope="col">'
        printTabla +='Tabla Numero' +numeroTabla;
        printTabla +='</th>';
        printTabla +='</tr>';
        printTabla +='</thead>';
        printTabla +='<tbody>';

        for(iteracionMultiplicar=0;iteracionMultiplicar<multiplicar.length;iteracionMultiplicar++){
            numeroMultiplicar=iteracionMultiplicar+1;
            printTabla +='<tr>';
            printTabla +='<td>';
            printTabla += numeroTabla+ 'x' +numeroMultiplicar+ '=' +tabla[iteracionTabla][iteracionMultiplicar];
            printTabla +='</td>';
            printTabla +='</tr>' ;
        }
        printTabla +='</tbody>';
        printTabla +='</table>';
        printTabla +='</div>'
    }
    document.getElementById('resultado-tablas').innerHTML=printTabla;
})