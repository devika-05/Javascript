class Vehicle {
    constructor(brand, model, year, isAvailable = true) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    getInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }

    rent() {
        this.isAvailable = false;
    }

    returnVehicle() {
        this.isAvailable = true;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, door) {
        super(brand, model, year);
        this.door = door;
    }

    getInfo() {
        super.getInfo();
        console.log(`Doors: ${this.door}`);
    }
}

class Bike extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }

    getInfo() {
        super.getInfo();
        console.log(`Type: ${this.type}`);
    }
}

class Customer {
    constructor(name, maxVehiclesAllowed = 2) {
        this.name = name;
        this.rentedVehicles = [];
        this.maxVehiclesAllowed = maxVehiclesAllowed;
    }

    rentVehicle(vehicle) {
        if (!vehicle.isAvailable) {
            console.log(`${vehicle.brand} is currently not available.`);
            return;
        }

        if (this.rentedVehicles.length >= this.maxVehiclesAllowed) {
            console.log(`${this.name} cannot rent more than ${this.maxVehiclesAllowed} vehicles.`);
            return;
        }

        vehicle.rent();
        this.rentedVehicles.push(vehicle);
        console.log(`${this.name} rented ${vehicle.brand} ${vehicle.model}`);
    }

    returnVehicle(vehicle) {
        const index = this.rentedVehicles.indexOf(vehicle);
        if (index !== -1) {
            this.rentedVehicles.splice(index, 1);
            vehicle.returnVehicle();
            console.log(`${this.name} returned ${vehicle.brand} ${vehicle.model}`);
        } else {
            console.log(`${this.name} did not rent this vehicle.`);
        }
    }

    listRentedVehicles() {
        console.log(`${this.name}'s Rented Vehicles:`);
        this.rentedVehicles.forEach((v, i) =>
            console.log(`${i + 1}. ${v.brand} ${v.model} (${v.year})`)
        );
    }
}


const car1 = new Car("Toyota", "Camry", 2021, 4);
const bike1 = new Bike("Trek", "FX", 2022, "Hybrid");

const devika = new Customer("Devika");

devika.rentVehicle(car1);
devika.rentVehicle(bike1);
devika.listRentedVehicles();

devika.returnVehicle(car1);
devika.listRentedVehicles();
