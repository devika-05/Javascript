class Student{
    constructor(name,scores){
        this.name=name;
        this.scores=scores;
    }

    getAverage(){
            return (this.scores.reduce((acc,curr)=> acc+curr , 0))/this.scores.length;
    }

    static compareStudents(student1, student2){
        if(student1.getAverage() > student2.getAverage()){
            return student1;
        }else{
            return student2;
        }
    }
}

const s1 = new Student("Alice", [80, 90, 100]);
const s2 = new Student("Bob", [75, 85, 95]);

console.log(s1.getAverage()); // 90
console.log(s2.getAverage()); // 85

const topStudent = Student.compareStudents(s1, s2);
console.log(`Top student is: ${topStudent.name}`); // Alice
