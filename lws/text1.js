let country = 'bangladesh';

let sentence = `I love ${country} ${1 + 2}`;

console.log(sentence);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

 console.log(isNaN(VAT));