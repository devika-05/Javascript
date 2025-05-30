class LibraryItem{
    constructor(title, year,category, isAvailable){
        this.title=title;
        this.year=year;
        this.category=category;
        this.isAvailable=true;
    }

    getDetails(){
        console.log(`Title: ${this.title}, Year: ${this.year}, Category: ${this.category}`);  
    }

    borrow(){
        this.isAvailable=false;
    }
    
    returnItem(){
        this.isAvailable=true;
    }
}

class Book extends LibraryItem{
    constructor(title, year,category, author, pages){
        super(title, year, category);
        this.author=author;
        this.pages=pages;
    }

    getDetails(){
        super.getDetails();
        console.log(`Author: ${this.author}, Pages: ${this.pages}`);
    }
}

class DVD extends LibraryItem{
    constructor(title, year,category, director, duration){
        super(title, year, category);
        this.director=director;
        this.duration=duration;
    }

    getDetails(){
        super.getDetails();
        console.log(`Director: ${this.director}, Duration: ${this.duration}`);
    }
}

class User {
  constructor(name, maxItemsAllowed = 3) {
    this.name = name;
    this.borrowedItems = [];
    this.maxItemsAllowed = maxItemsAllowed;
  }

  borrowItem(item) {
    if (!item.isAvailable) {
      console.log(`${item.title} is currently not available.`);
      return;
    }

    if (this.borrowedItems.length >= this.maxItemsAllowed) {
      console.log(`${this.name} cannot borrow more than ${this.maxItemsAllowed} items.`);
      return;
    }

    item.borrow();
    this.borrowedItems.push(item);
    console.log(`${this.name} borrowed "${item.title}".`);
  }

  returnItem(item) {
    const index = this.borrowedItems.indexOf(item);
    if (index !== -1) {
      item.returnItem();
      this.borrowedItems.splice(index, 1);
      console.log(`${this.name} returned "${item.title}".`);
    } else {
      console.log(`${this.name} did not borrow "${item.title}".`);
    }
  }

  listBorrowedItems() {
    console.log(`${this.name}'s Borrowed Items:`);
    this.borrowedItems.forEach((item) => item.getDetails());
  }
}

const book1 = new Book("The Alchemist", 1988, "Fiction", "Paulo Coelho", 208);
const dvd1 = new DVD("Inception", 2010, "Sci-Fi", "Christopher Nolan", 148);

const user = new User("Devika");

user.borrowItem(book1);   // Should borrow successfully
user.borrowItem(dvd1);    // Should borrow successfully

user.listBorrowedItems(); // Show borrowed items

user.returnItem(book1);   // Should return successfully

user.borrowItem(book1);   // Should borrow again after returning































// const book = new Book("dsfs", 2015, "jdls", "sweda", 123);
// const dvd = new DVD("dsfs", 2015, "jdls", "sweda", 123);

// book.getDetails();
// dvd.getDetails();