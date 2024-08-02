let bingo=[];
let iteracion1;
let iteracion2;
let contador=0;
let tabla;

for (iteracion1=0;iteracion1<5;iteracion1++){
    let interno=[];
    for (iteracion2=0;iteracion2<5;iteracion2++){
        contador=contador+1;
        tabla=contador*2;
        interno.push(tabla);
      
    }
    bingo.push(interno);
}

console.log(bingo);

console.log("B");
console.log("\n");
for(iteracion2=0;iteracion2<5;iteracion2++){
    console.log(bingo[iteracion2][0])
}
console.log("\n");
console.log("I");
console.log("\n");
for(iteracion2=0;iteracion2<5;iteracion2++){
    console.log(bingo[iteracion2][1])
}

console.log("\n");
console.log("N");
console.log("\n");
for(iteracion2=0;iteracion2<5;iteracion2++){
    console.log(bingo[iteracion2][2])
}

console.log("\n");
console.log("G");
console.log("\n");
for(iteracion2=0;iteracion2<5;iteracion2++){
    console.log(bingo[iteracion2][3])
}

console.log("\n");
console.log("O");
console.log("\n");
for(iteracion2=0;iteracion2<5;iteracion2++){
    console.log(bingo[iteracion2][4])
}

console.log("primera x");

for (iteracion1=0;iteracion1<3;iteracion1++) {
    for (iteracion2=0;iteracion2<3;iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1%2==1 && iteracion2%2==1) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}

console.log("segunda x");

for (iteracion1=0;iteracion1<3;iteracion1++) {
    for (iteracion2=2;iteracion2<5;iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1%2==1 && iteracion2%2==1) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}

console.log("tercera x");

for (iteracion1=2;iteracion1<5;iteracion1++) {
    for (iteracion2=1;iteracion2<4;iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1%2==1 && iteracion2%2==0) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}



