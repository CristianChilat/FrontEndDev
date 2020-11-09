console.log("Hello, world!");

let x = 4;
console.log(x);
x = x + 2;
console.log(x);

/* 
Instructiuni de decizie
*/ 

let nota = 4;
if(nota === 10){
    console.log("Bravo, ura!");
} else if(nota < 10 && nota >= 5){
    console.log("Inveti destul de bine");
} else{
    console.log("Inveti rau...");
}

for(let cifra = 0; cifra < 10; cifra++){
    console.log(cifra);
}

console.clear();

let cifra = 0;
while(cifra < 10){
    console.log(cifra);
    cifra++
}

console.clear();

cifra = 0;
do{
    console.log(cifra);
    cifra++
}while(cifra < 10)

console.clear();

for(let numar = 100; numar >= 0; numar--){
    console.log(numar);
}

console.clear();

let numar = 100;
while(numar >= 0){
    console.log(numar)
    numar--;
}

console.clear();
console.log("numere pare de la 50 pina la 100")

let = 50;
for(let numar = 50; numar <= 100; numar++){
    if(numar % 2 === 0){
        console.log(numar);
    }
}

console.clear();

for(let numar = 50; numar <= 100; numar++){
    if(numar % 5 === 0 && numar % 10 === 0){
        console.log(numar);
    }
}