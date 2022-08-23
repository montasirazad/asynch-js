console.log(11111111);
console.log(2222222);
console.log(33333333);
console.log(44444444);
console.log(55555555);
console.log(66666666);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))