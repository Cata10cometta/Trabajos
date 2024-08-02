/**
 *edades y promedio
 * autor: Catalina CF
 * Fecha: 12 de abril del 2024
 * version:32
 */

function edades(pyearBeginUno,pyearBeginDos,pyearBeginTres){  
        let edadUno;
        let edadDos;
        let edadTres;
        let suma;
        let promedio;
        let yearNow=2024;
        let yearBeginUno=pyearBeginUno;
        let yearBeginDos=pyearBeginDos;
        let yearBeginTres=pyearBeginTres;

        edadUno = yearNow - yearBeginUno;
        edadDos = yearNow - yearBeginDos;
        edadTres = yearNow - yearBeginTres;
        suma = edadUno + edadDos + edadTres;
        promedio = suma/3;

        console.log("la edad de la persona uno es="+edadUno+"\n");
        console.log("la edad de la persona dos es="+edadDos+"\n");
        console.log("la edad de la persona tres es="+edadTres+"\n");
        console.log("el promedio de las tres edades son es="+promedio+"\n");

        if(promedio>=18){
                console.log("Son mayores de edad=" +promedio);
        } else{
                console.log("Son menor de edad=" +promedio);
        }
}

const edadExpresion= function (pyearBeginUno,pyearBeginDos,pyearBeginTres){  
        let edadUno;
        let edadDos;
        let edadTres;
        let suma;
        let promedio;
        let yearNow=2024;
        let yearBeginUno=pyearBeginUno;
        let yearBeginDos=pyearBeginDos;
        let yearBeginTres=pyearBeginTres;

        edadUno = yearNow - yearBeginUno;
        edadDos = yearNow - yearBeginDos;
        edadTres = yearNow - yearBeginTres;
        suma = edadUno + edadDos + edadTres;
        promedio = suma/3;

        console.log("la edad de la persona uno es="+edadUno+"\n");
        console.log("la edad de la persona dos es="+edadDos+"\n");
        console.log("la edad de la persona tres es="+edadTres+"\n");
        console.log("el promedio de las tres edades son es="+promedio+"\n");

        if(promedio>=18){
                console.log("Son mayores de edad=" +promedio);
        } else{
                console.log("Son menor de edad=" +promedio);
        }
}