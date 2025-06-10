class Employee{
    constructor(name, performanceScores){
        this.name=name;
        this.performanceScores=performanceScores;
    }

    getAverageScore(){
        return (this.performanceScores.reduce((acc,curr)=> acc+curr,0))/this.performanceScores.length;
    }

    static comparePerformance(emp1, emp2) {
        const avg1 = emp1.getAverageScore();
        const avg2 = emp2.getAverageScore();

        if (avg1 > avg2) {
            return emp1;
        } else if (avg2 > avg1) {
            return emp2;
        } else {
            return null; // or return both, or a message, depending on your use case
        }
    }


    static fromCSV(csvString) {
        const [name, scoresString] = csvString.split(",");
        const scores = scoresString.split("|").map(Number);
        return new Employee(name, scores);
    }

}

const emp1 = new Employee("Devika", [80, 90, 85]);
const emp2 = new Employee("Ravi", [75, 85, 95]);

console.log(emp1.getAverageScore()); // 85
console.log(emp2.getAverageScore()); // 85

const better = Employee.comparePerformance(emp1, emp2);
if (better === null) {
    console.log("Both employees have equal performance.");
} else {
    console.log(`${better.name} has better performance.`);
}

const emp3 = Employee.fromCSV("Anita,88|92|81");
console.log(emp3.name);               // Anita
console.log(emp3.getAverageScore());  // 87
