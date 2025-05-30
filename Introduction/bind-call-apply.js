// Hello, Devika!
// Bonjour, Evika!
// Hey, Monu.
function greetUser(greeting, punctuation) {
  console.log(`${greeting}, ${this.username}${punctuation}`);
}

const user1 = { username: "Devika" };
const user2 = { username: "Evika" };
const user3 = { username: "Monu" };

// ❓ Your Task:
// 1. Create a personalized greeter for each user using `.bind()`
const user1Greet = greetUser.bind(user1);
const user2Greet = greetUser.bind(user2);
const user3Greet = greetUser.bind(user3);
// 2. Call each greeter with different greetings and punctuation
greetUser.call(user1, "Hello", "!");
greetUser.apply(user2, ["Bonjour", "!"]);

user3Greet("Hey",".");
// Example output:
