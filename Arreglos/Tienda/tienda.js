/**
 * crear una tienda con JS usando arreglos de Nombre:valos
 * Autor: CatalinaCF
 * 4 de mayo de 2024
 */

let tienda=[];
let iteracion;
let sumar=0;
let descuento;

tienda= [
    {id:1, nombreProducto:'Arroz', tipoProducto:'granos', tipoUnidad:'gramos', unidad:1000, precio:2400},
    {id:2, nombreProducto:'Lentejas', tipoProducto:'granos', tipoUnidad:'gramos', unidad:500, precio:1300},
    {id:3, nombreProducto:'Carne de res', tipoProducto:'carnes', tipoUnidad:'gramos', unidad:500, precio:13500},
    {id:4, nombreProducto:'Pollo entero', tipoProducto:'carnes', tipoUnidad:'gramos', unidad:1000, precio:12500},
    {id:5, nombreProducto:'Cebolla junca', tipoProducto:'verduras', tipoUnidad:'gramos', unidad:500, precio:1300},
    {id:6, nombreProducto:'Mora', tipoProducto:'frutas', tipoUnidad:'gramos', unidad:500, precio:1200}
];

console.log(tienda);

//Crear un registro

tienda.push( {id:7, nombreProducto:'Lulo', tipoProducto:'frutas', tipoUnidad:'gramos', unidad:500, precio:1600})
tienda.push( {id:8, nombreProducto:'Papa', tipoProducto:'verduras', tipoUnidad:'gramos', unidad:500, precio:1200})

//tienda[7].precio=2600;
longitudArreglo = tienda.length
for(iteracion=0;iteracion<8;iteracion++){
    if(tienda[iteracion].id==7){
        tienda[iteracion].precio=3600;
    }
    else {
           console.log("No existe el produto");
    }
    if (tienda[iteracion].tipoProducto=='carnes'){
        tienda[iteracion].precio=21600;
    }
    else {
        console.log("No existe el produto");

    }

    sumar= sumar + tienda[iteracion].precio

    if(tienda[iteracion].tipoProducto=='frutas'){
        descuento= descuentos(tienda[iteracion].precio);
    }
    else {
        descuento=0;
    }
    console.log(descuento);

}
console.log(tienda);
console.log('suma de todos los productos');
console.log(sumar);