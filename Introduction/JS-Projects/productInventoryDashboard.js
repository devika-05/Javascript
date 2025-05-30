const inventory = [
  { id: 1, name: "Laptop", price: 1200, quantity: 5, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, quantity: 0, category: "Electronics" },
  { id: 3, name: "Shirt", price: 40, quantity: 25, category: "Clothing" },
  { id: 4, name: "Shoes", price: 90, quantity: 10, category: "Clothing" },
  { id: 5, name: "Headphones", price: 150, quantity: 15, category: "Electronics" }
];

const names= inventory.map((n)=>n.name);
console.log(names);

const inStock= inventory.filter((n)=>n.quantity>0);
console.log(inStock);

const totalValue= inventory.reduce((acc,curr)=> acc+ curr.price* curr.quantity, 0);
console.log(totalValue);

const newInv={ id: 6, name: "Skirt", price: 150, quantity: 15, category: "Clothing" };
const updatedInv = [newInv, ...inventory];
console.log(updatedInv);

const {name, category}=inventory[0];
console.log(name);
console.log(category);

const sortedDesc = inventory.sort((a,b)=>b.price-a.price);
console.log(sortedDesc);


const groupedByCategory = {};

for (const product of inventory) {
  const category = product.category;

  if (!groupedByCategory[category]) {
    groupedByCategory[category] = []; // create array if not exists
  }

  groupedByCategory[category].push(product);
}

console.log(groupedByCategory);







