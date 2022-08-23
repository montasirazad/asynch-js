function doSomeThing() {
    console.log('doing something',1111111111);
}
console.log('first:');
console.log('second:');

setTimeout(function () {
    console.log('doing something again');
}, 3000);

setTimeout(function () {
    doSomeThing()
}, 1000);

console.log('third:');
