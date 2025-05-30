class Employee {
    constructor(name, position){
        this.name=name;
        this.position=position;
    }

    describe(){
        console.log(`Name: ${this.name}, Position: ${this.position}`);
    }
}


class Manager extends Employee {
    constructor(name,position,teamSize){
        super(name, position);
        this.teamSize=teamSize;
    }

    manage(){
        console.log(`${this.name} manages a team of ${this.teamSize} people`);
    }
}

const emp = new Employee("Devi", "Designer");
emp.describe(); // Name: Devi, Position: Designer

const mgr = new Manager("Devika", "Team Lead", 5);
mgr.describe(); // Name: Devika, Position: Team Lead
mgr.manage();   // Devika manages a team of 5 people
