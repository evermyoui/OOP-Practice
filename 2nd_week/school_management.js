class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce(){
        return`I am ${this.name} age ${this.age} ${this.gender}`;
    }
}
class Student extends Person {
    constructor(name, age, gender, studentID){
        super(name,age,gender);
        this.grade = [];
        this.studentID = studentID;
    }
    introduce(){
        return `${super.introduce()} I am a student with a grade of ${this.grade} and student ID of ${this.studentID}`;
    }
    showGradesHistory(){
        this.grade.forEach(grade => {
            // console.log(`${}`);
        });
    }
}
class Teacher extends Person{
    constructor(name, age, gender, subject, salary){
        super(name,age,gender);
        this.subject = subject;
        this.salary = salary;
    }
    introduce(){
        return `${super.introduce()} I am a teacher of ${this.subject} with a salary of ${this.salary}`
    }
    assignGrades(student, grade, subject){
        student.grade.push({grade, subject});
    }

}
class School {
    constructor(){
        this.persons = [];
    }
    addPerson(person){
        this.persons.push(person);
    }
    showAll(){
        this.persons.forEach(person =>{
            console.log(person.name);
        });
    }
}   

const student = new Student("Juan", 18, "Male", 1000);
const teacher = new Teacher("Theodore", 39, "Male", "Math", 30000 );
const school = new School();

school.addPerson(student);
school.addPerson(teacher);
teacher.assignGrades(student, 85, "Math");
school.showAll();