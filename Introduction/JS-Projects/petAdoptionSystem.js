class Pet{
    constructor(name,age,type,isAdopted = false){
        this.name=name;
        this.age=age;
        this.type=type;
        this.isAdopted=isAdopted;
    }

    adopt(){
            this.isAdopted=true;            
    }

    getInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}`);
    }
}

class Dog extends Pet{
    constructor(name,age,type, breed){
        super(name,age,type);
        this.breed=breed;
    }

    getInfo(){
        super.getInfo();
        console.log(`Breed: ${this.breed}`);        
    }
}

class Cat extends Pet{
    constructor(name,age,type, color){
        super(name,age,type);
        this.color=color;
    }

    getInfo(){
        super.getInfo();
        console.log(`Color: ${this.color}`);        
    }
}

class Adopter{
    constructor(name){
        this.name=name;
        this.adoptedPets=[];
    }

    adoptPet(pet){
        if(pet.isAdopted === false) {
            pet.adopt();
            this.adoptedPets.push(pet);
            console.log(`Adopts ${pet.name}`);
        }else{
            console.log("Already adopted");
            
        }
    }

    listAdoptedPets(){
        for(let pet of this.adoptedPets){
            console.log(`Name: ${pet.name}`)
        }
        
    }
}

const dog1 = new Dog("Rex", 3, "Dog", "Golden Retriever");
const cat1 = new Cat("Milo", 2, "Cat", "Black");

const adopter1 = new Adopter("Devika");

adopter1.adoptPet(dog1);    // Adopts Rex
adopter1.adoptPet(dog1);    // Already adopted
adopter1.adoptPet(cat1);    // Adopts Milo

adopter1.listAdoptedPets(); // Lists Rex and Milo
