// const car ={
//     make : "Toyota",
//     model : "Corolla",
//     year : 2020
// }

// function getDescription(carObject){
//     let desc= `${carObject.make} ${carObject.model} ${carObject.year}`;
//     console.log(desc);
    
// }

// getDescription(car);

const library = {
  name: "City Library",
  address: "123 Book St",
  books: [
    { title: "The Alchemist", author: "Paulo Coelho", available: true },
    { title: "1984", author: "George Orwell", available: false },
    { title: "Clean Code", author: "Robert C. Martin", available: true }
  ],

  listAvailableBooks: function() {
    for(const book of this.books){
        let bookTitle = book.title;
        console.log(bookTitle);
        
    }
  },

  addBook :function(bookObj){
    this.books.push(bookObj);
  }
};


library.listAvailableBooks();
console.log("Adding the book:");
library.addBook({
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  available: true
});
console.log("Listing the book:");
library.listAvailableBooks();


