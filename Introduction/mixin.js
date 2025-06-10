// const canEat = {
//     eat(){
//         console.log(`${this.name} is eating`);        
//     }
// };

// const canWalk = {
//     walk(){
//         console.log(`${this.name} is walking`);        
//     }
// };

// // A class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // Mix the behaviors into Person's prototype
// Object.assign(Person.prototype, canEat, canWalk);

// const p = new Person("Devika");
// p.eat();  // Devika is eating
// p.walk(); // Devika is walking

const canEat = {
    eat(){
        console.log(`${this.name} is eating`);        
    }
}

class Animal{
    constructor(name){
        this.name=name;
    }
}

Object.assign(Animal.prototype, canEat);

const a = new Animal("Mio");
a.eat();