const car = {
    name: 'fiat',
    model: '55YLD',
    weight: '1000 kg',
    color: 'white',
    start: function () {
        console.log('car has started');
        this.drive()
    },
    drive: function () {
        console.log('car is driving');
    }
}

console.log(car.color);
console.log(car['model']);
car.start()


let x = new Number(5)
console.log(typeof (x));