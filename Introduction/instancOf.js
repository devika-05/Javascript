class Vehicle{}

class Car extends Vehicle{}

class Bike extends Vehicle{}

const c = new Car ();
console.log( c instanceof Car);
console.log(c instanceof Vehicle);
console.log(c instanceof Object);
console.log(c instanceof Bike);



