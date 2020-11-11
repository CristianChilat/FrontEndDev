alert('This is my page');

let numere = [2, 5];
numere.push(8);
numere.unshift(3);
console.log(numere);

for (let index = 0; index < numere.length; index++) {
    console.log(numere[index]);
}

console.clear();


let suma = 0;
numere.forEach(numar => {
    suma = suma + numar;
});
console.log(suma);

console.clear();

const luni  = [
    "Ianuarie", 
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie"
];

console.log(luni);

for (const key in luni) {
    if (luni.hasOwnProperty(key)) {
        console.log(luni[key]);
    }
}

console.log("*******************");
const numarulLunii = 5;
console.log(luni[numarulLunii - 1])

console.clear();

let numbers = [];
for (let index = 1; index <= 10; index++) {
    numbers.push(index);
}
console.log(numbers);

console.clear();

console.log(numbers);
console.log(numbers.filter(element => element % 2 == 0));
console.log(numbers.map(element => element ** 2));
console.log(numbers.find(element => element === 18))
