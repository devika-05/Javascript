function Book (title, author, year){
    this.title=title;
    this.author=author;
    this.year=year;
}

Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

const book1= new Book("hello","monu",2000);
const book2= new Book("hello","monu",2000);


console.log(book1.getSummary());
console.log(book2.getSummary());

