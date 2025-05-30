// const marks = [45, 67, 89, 34, 90, 55];

// console.log(marks.map(n => n+5));

// console.log(marks.filter(n => n>=60));

// console.log(marks.reduce((acc, curr)=> acc+curr , 0)/marks.length);

// const sortedAsec = [...marks].sort((a,b)=> a -b);
// console.log(sortedAsec);

// const sortedDesc = [...marks].sort((a,b)=>b-a);
// console.log(sortedDesc);

// const firstNG50 = marks.find((n)=> n > 50);
// console.log(firstNG50);

// const students = [
//   { name: "Devika", grade: 86 },
//   { name: "Devi", grade: 58 },
//   { name: "Devu", grade: 91 },
//   { name: "Evika", grade: 45 }
// ];

// const passedSt = students.filter(s => s.grade >=60);
// console.log(passedSt);

// console.log(students.find((s)=> s.grade === 91));

// const sortedDesc = [...students].sort((a, b) => b.grade- a.grade);

// console.log(students.map((s)=> s.name));

// console.log(students.reduce((acc, curr)=> acc+curr.grade , 0)/students.length);


const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 600, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false }
];

const inStockProducts = products.filter((p)=> p.inStock == true);
console.log(inStockProducts);

const upperCaseProductNames = products.map((p)=> p.name.toUpperCase());
console.log(upperCaseProductNames);

const sortedAsecP= products.sort((a,b)=> a.price - b.price);
console.log(sortedAsecP);

const totalInStockPrice = inStockProducts.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalInStockPrice);


// FIX: You need to find the one with the max price
const mostExpensive = products.reduce((max, curr) => curr.price > max.price ? curr : max);
console.log(mostExpensive);

