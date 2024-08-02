/**
 * Bingo
 * Autor: Catalina CF
 * Fecha: 18 de julio de 2024
 */
document.addEventListener('DOMContentLoaded', function () {
    let bingo = [];
    let interno = [];
    let tabla = 2;
    let numero = 0;
    let iteracionUno;
    let iteracionDos;
    let resultadoMultiplicaion;
    let resultadoPrint = '';


    for (iteracionUno = 0; iteracionUno < 5; iteracionUno++) {
        interno = [];
        for (iteracionDos = 0; iteracionDos < 5; iteracionDos++) {
            numero = numero + 1;
            resultadoMultiplicaion = numero * tabla;
            interno.push(resultadoMultiplicaion);

        }
        bingo.push(interno)

    }

    for (iteracionUno = 0; iteracionUno < bingo.length; iteracionUno++) {
        resultadoPrint += '<tr color="primary">';
        for (iteracionDos = 0; iteracionDos < interno.length; iteracionDos++) {
            resultadoPrint += '<td>';
            resultadoPrint += bingo[iteracionUno][iteracionDos];
            resultadoPrint += '</td>';
        }
        resultadoPrint += '</tr>';
    }

    document.getElementById('resultado-bingoamc').innerHTML = resultadoPrint;
   
    //console.log(bingo);
})

function LetraB() {
    let tabla = document.querySelector('.table tbody');
    let filas = tabla.querySelectorAll('tr');
    let colorActual = filas[0].querySelectorAll('td')[0].style.backgroundColor;//COLOREA
    let nuevoColor = colorActual === 'orange' ? '' : 'orange';//DESCOLOREA (de atras hacia delante el color)
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < filas.length; iteracion++) {    
        let celdas = filas[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        celdas[0].style.backgroundColor = nuevoColor;
    }
}

function LetraI() {
    let tabla = document.querySelector('.table tbody');
    let filas = tabla.querySelectorAll('tr');
    let colorActual = filas[1].querySelectorAll('td')[1].style.backgroundColor;//COLOREA
    let nuevoColor = colorActual === 'chartreuse' ? '' : 'chartreuse';//DESCOLOREA (de atras hacia delante el color)
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < filas.length; iteracion++) {    
        let celdas = filas[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        celdas[1].style.backgroundColor = nuevoColor;
    }
}
function LetraN() {
    let tabla = document.querySelector('.table tbody');
    let filas = tabla.querySelectorAll('tr');
    let colorActual = filas[2].querySelectorAll('td')[2].style.backgroundColor;//COLOREA
    let nuevoColor = colorActual === 'deeppink' ? '' : 'deeppink';//DESCOLOREA (de atras hacia delante el color)
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < filas.length; iteracion++) {    
        let celdas = filas[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        celdas[2].style.backgroundColor = nuevoColor;
    }
}
function LetraG() {
    let tabla = document.querySelector('.table tbody');
    let filas = tabla.querySelectorAll('tr');
    let colorActual = filas[3].querySelectorAll('td')[3].style.backgroundColor;//COLOREA
    let nuevoColor = colorActual === 'cadetblue' ? '' : ' cadetblue';//DESCOLOREA (de atras hacia delante el color)
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < filas.length; iteracion++) {    
        let celdas = filas[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        celdas[3].style.backgroundColor = nuevoColor;
    }
}
function LetraO() {
    let tabla = document.querySelector('.table tbody');
    let filas = tabla.querySelectorAll('tr');
    let colorActual = filas[4].querySelectorAll('td')[4].style.backgroundColor;//COLOREA
    let nuevoColor = colorActual === 'yellow' ? '' : 'yellow';//DESCOLOREA (de atras hacia delante el color)
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < filas.length; iteracion++) {    
        let celdas = filas[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        celdas[4].style.backgroundColor = nuevoColor;
    }
}


function TRIPLEX() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
    let nuevoColorPrincipal = colorActualPrincipal === 'aqua' ? '' : 'aqua';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en las tres x columna (triple 'X')
        cells[cells.length - 3 - iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[iteracion + 2].style.backgroundColor = nuevoColorPrincipal;
        for (let iteracion = 2; iteracion < rows.length; iteracion++) {
            let cells = rows[iteracion].querySelectorAll('td');
            for (let iteracion3 = 2; iteracion3 < 5; iteracion3++) {
                for (let iteracion4 = 2; iteracion4 < 5; iteracion4++) {
                  if (iteracion3%2==0&&iteracion4%2==1){
                    cells[iteracion-1].style.backgroundColor = nuevoColorPrincipal;
                  }else if (iteracion3%2==1&&iteracion4%2==0){
                    cells[cells.length - 1 - iteracion+1].style.backgroundColor = nuevoColorPrincipal;
                  }else{
                    console.log("")
                  }
                }
              } 
        }
    }
}

function XGRANDE() {
    // Selecciona el cuerpo de la tabla
    let tabla = document.querySelector('.table tbody');
    // Selecciona todas las filas de la tabla
    let rows = tabla.querySelectorAll('tr');
    let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
    let nuevoColorPrincipal = colorActualPrincipal === 'pink' ? '' : 'pink';
    let colorActualSecundaria = rows[0].querySelectorAll('td')[rows[0].querySelectorAll('td').length - 1].style.backgroundColor;
    let nuevoColorSecundaria = colorActualSecundaria === 'pink' ? '' : 'pink';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        // Selecciona todas las celdas de la fila actual
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda de la diagonal principal
        // La celda en la posición (iteracion, iteracion)
        cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
        // Colorea la celda de la diagonal secundaria
        // La celda en la posición (iteracion, longitud de la fila - 1 - iteracion)
        cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorSecundaria;
    }
}
