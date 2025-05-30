// function cook(dish) {
//   console.log(`${this.name} is cooking ${dish}`);
// }

// const alice = { name: "Alice" };
// const bob = { name: "Bob" };

// cook.call(bob, "pasta"); // 
// cook.apply(alice, ["biryani"]); 

const person1 = { name: "Devika" };
const person2 = { name: "Evika" };

function greet(greeting, punctuation) {
  console.log(`${greeting}, I am ${this.name}${punctuation}`);
}


greet.call(person1,"Hello", "!" );
greet.apply(person2,["Hi", "."]);