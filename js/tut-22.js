//Object Literal, Constructors and Object Oriented JavaScript


let car = {
    name: 'BMX X5',
    topspeed: '200 kmph',
    run: function () {
        console.log('BMW is running on track')
    }
}
// console.log(car);

// We have already seen constructors like these:
//new Date()

// Creating a constructor for cars
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`)
    }
    this.analyze = function () {
        console.log(`This car is slower by ${250 - this.topspeed} Kmph than Mercedes.`)
    }
}
let car1 = new generalCar('BMW', 200);
let car2 = new generalCar('Audi', 210);
console.log(car1.run());
console.log(car2.analyze());