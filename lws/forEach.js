const numbers = [45, 4, 9, 16, 25];


function myFunction1(value, index, array) {
    console.log(value, '--', index, '--', array);
}

numbers.forEach(myFunction1)


// Array map 
function myFunction2(value, index, array) {
    return value * 2;
}
console.log(numbers.map(myFunction2));