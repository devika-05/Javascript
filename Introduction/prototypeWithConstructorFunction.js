function Person(name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
}

const p1 = new Person("monu",22);
p1.introduce();
const p2 = new Person("monu",22);
p2.introduce();