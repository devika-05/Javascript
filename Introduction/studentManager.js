const studentManager = {
    students : [
        {id : 1, name : "Devika", grade : 86, enrolled : true},
        {id : 2, name : "Devi", grade : 80, enrolled : false},
        {id : 3, name : "Devu", grade : 90, enrolled : true},
        {id : 4, name : "Evika", grade : 67, enrolled : false},  
    ],

    addStudent : function(studentObject){
        this.students.push(studentObject);
    },
    
    listAllStudents : function(){
        for( const student of this.students){
            console.log(student.name); 
        }
    },

    listEnrolledStudents : function(){
        for(const student of this.students){
            if(student.enrolled){
                console.log(student.name);
                
            }
        }
    },

    findStudentByName : function(sName){
        for(const student of this.students){
            if(sName == student.name){
                console.log(student);
                
            }
        }
    },

    updateGrade : function(id, newGrade){
        for(const student of this.students){
            if(id == student.id){
                console.log(`Old grade : ${student.grade}`);
                student.grade=newGrade;
                console.log(`New grade : ${student.grade}`);                
            }
        }
    },

    removeStudentById : function(id){
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            const removed = this.students.splice(index, 1);
            console.log(`Removed student: ${removed[0].name}`);
        } else {
            console.log(`No student found with id ${id}`);
        }
    },

    averageGrade : function(){
        let sum =0;
        for(const student of this.students){
            sum += student.grade;
        }
        let avg = sum / this.students.length;
        console.log(avg);
        
    }
}
studentManager.listAllStudents();
studentManager.listEnrolledStudents();
studentManager.addStudent({ id: 5, name: "Ravi", grade: 78, enrolled: true });
studentManager.updateGrade(3, 95);
studentManager.removeStudentById(2);
studentManager.findStudentByName("Devika");
studentManager.averageGrade();
