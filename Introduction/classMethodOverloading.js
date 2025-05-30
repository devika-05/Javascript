class LibraryItem{
    constructor(title, year,category){
        this.title=title;
        this.year=year;
        this.category=category;
    }

    getDetails(){
        console.log(`Title: ${this.title}, Year: ${this.year}, Category: ${this.category}`);  
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

const book = new Book("dsfs", 2015, "jdls", "sweda", 123);
const dvd = new DVD("dsfs", 2015, "jdls", "sweda", 123);

book.getDetails();
dvd.getDetails();