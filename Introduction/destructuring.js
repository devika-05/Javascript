// const person = {
//   firstName: "Aarav",
//   lastName: "Sharma",
//   age: 28,
//   job: "Engineer"
// };

// // Destructure firstName and job, and log them
// const {firstName,job} = person;

// console.log(firstName);
// console.log(job);

// const numbers = [10, 20, 30, 40];

// const [first, , third, ]=numbers;

// console.log(first);
// console.log(third);

// const person = {
//   name: "Devika",
//   age: 25,
//   city: "Pune",
//   profession: "Engineer"
// };

// const { name, ...details } = person;

// console.log(name);    // "Devika"
// console.log(details); // { age: 25, city: "Pune", profession: "Engineer" }

// const colors = ["red", "green", "blue", "yellow", "purple"];

// const [primary1, primary2, ...otherColors]=colors;

// const newColors=[...otherColors, "pink"];

// console.log(newColors);

// const users = [
//   { id: 1, name: "Devika", role: "admin" },
//   { id: 2, name: "Devi", role: "editor" },
//   { id: 3, name: "Devu", role: "viewer" }
// ];

// const [adminUser, ...otherUsers]=users;

// const newUsers=[...otherUsers, {id: 4, name: "Evika", role: "guest"}];

// console.log(newUsers);


// const book = {
//   title: "Eloquent JavaScript",
//   author: "Marijn Haverbeke",
//   pages: 472,
//   publisher: "No Starch Press",
//   year: 2018
// };

// const {title, author, ...bookDetails}=book;
// console.log(title);
// console.log(author);
// console.log(bookDetails);

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: "PG-13"
};

for(let key in movie){
    console.log(`${key} : ${movie[key]}`);
    
}




