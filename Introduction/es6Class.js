class Movie {
    constructor(title, director, year){
        this.title=title;
        this.director=director;
        this.year=year;
    }

    getDescription(){
        return `"${this.title}" directed by ${this.director}, release in ${this.year} `;
    }
}

const movie1 = new Movie("Hello", "monu", 2000); 
const movie2 = new Movie("Hello", "monu", 2000);

console.log(movie1.getDescription());
console.log(movie2.getDescription());

