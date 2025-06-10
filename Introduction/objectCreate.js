const vehicle={
    start(){
        console.log(`The ${this.type} is starting`);
        
    }
}

const car = Object.create(vehicle);
car.type = "car";
car.fuel = "petrol";
car.refuel = function() {
    console.log(`The ${this.type} is refueling`);
};

// Call both methods
car.start();     // The car is starting
car.refuel();