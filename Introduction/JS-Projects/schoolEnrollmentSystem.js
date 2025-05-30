class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    getInfo(){
        console.log(`Name : ${this.name}, Age : ${this.age}`);      
    }
}

class Student extends Person{
    constructor(name, age, studentId, course){
        super(name,age);
        this.studentId=studentId;
        this.course=course;
    }

    getInfo(){
        super.getInfo();
        console.log(`StudentID : ${this.studentId}, Course : ${this.course}`);        
    }
}

class Teacher extends Person{
    constructor(name, age, subject, yearsOfExperience){
        super(name, age);
        this.subject=subject;
        this.yearsOfExperience=yearsOfExperience;
    }

    getInfo(){
        super.getInfo();
        console.log(`Subject : ${this.subject}, Years Of Exp : ${this.yearsOfExperience}`);        
    }
}

class School{
    constructor(name){
        this.name=name;
        this.students=[];
        this.teachers=[];
    }

    enrollStudent(student){
        this.students.push(student);
        console.log(`Enrolled Student: ${student.name}`);        
    }

    hireTeacher(teacher){
        this.teachers.push(teacher);
        console.log(`Hired Teacher: ${teacher.name}`);
    }

    listStudents(){
        console.log("Students : ");        
        for(let student of this.students){
            console.log(`- ${student.name}`);            
        }
    }

    listTeachers(){
        console.log("Teachers : ");
        for(let teacher of this.teachers){
            console.log(`- ${teacher.name}`);
            
        }
    }

    schoolReport(){
        console.log(`Name of the school : ${this.name}`);
        console.log(`Total Number of Students : ${this.students.length}`);
        console.log(`Total Number of Teachers : ${this.teachers.length}`);           
    }
}

const student1 = new Student("Alice", 15, 101, "Xth");
const teacher1 = new Teacher("Mr. Smith", 36, "Maths", 8);

const school1= new School("DAV");

school1.enrollStudent(student1);
school1.hireTeacher(teacher1);
school1.listStudents();
school1.listTeachers();
school1.schoolReport();