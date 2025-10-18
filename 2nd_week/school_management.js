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
        this.record = [];
        this.studentID = studentID;
    }
    introduce(){
        return `${super.introduce()} I am a student with a grade of ${this.record} and student ID of ${this.studentID}`;
    }
    showGrades(){
        this.record.forEach(grade => {
            console.log(`${grade.subject}: ${grade.grade}`);
        });
    }
    getAverageGrade(){
        const sum = this.record.reduce((acc,curr) => acc + curr.grade,0);
        return (sum / this.record.length).toFixed(2);
    }
}
class Teacher extends Person{
    constructor(name, age, gender, subject, salary, school){
        super(name,age,gender);
        this.subject = subject;
        this.salary = salary;
        this.studentsAttendance = [];
    }
    introduce(){
        return `${super.introduce()} I am a teacher of ${this.subject} with a salary of ${this.salary}`
    }
    assignGrades(student, grade, subject){
        student.record.push({grade, subject});
    }
    makeAttendance(subject, student, date){
        this.studentsAttendance.push({subject, studentName: student.name, date});
    }
    getAttendance(subject, date){
        const targetDate = this.studentsAttendance.filter(dateAttendance => date === dateAttendance.date && dateAttendance.subject === subject);
        if (!targetDate) return false;
        console.log(`Attendance for subject ${this.subject}`);
        console.log(`Date: ${date}`);
        let counter = 1;
        targetDate.forEach(student =>{
            console.log(`${counter++} | ${student.studentName}`);
        });
    }
}   

class School {
    constructor(){
        this.students = [];
        this.teachers = [];
    }
    addStudent(student){
        this.students.push(student);
    }
    addTeacher(teacher){
        this.teachers.push(teacher);
    }
    showAll(){
        this.persons.forEach(person =>{
            console.log(person.name);
        });
    }
    showAllAttendance(){
        let counter = 1;
        this.teachers.forEach(teacher => {
            const sorted = teacher.studentsAttendance.sort((a,b) => {
                new Date(a.date) - new Date(b.date);
            });
            console.log(`${teacher.name} Subject: ${teacher.subject}`);
            sorted.forEach(student => {
                console.log(`${counter++} | ${student.studentName} `);
            });
        });

    }
}   
const school = new School();
const student = new Student("Juan", 18, "Male", 1000);
const student1 = new Student("Xiexie", 28, "Female", 1200);
const teacher = new Teacher("Theodore", 39, "Male", "Math", 30000);

school.addStudent(student);
school.addStudent(student1);
school.addTeacher(teacher);
teacher.assignGrades(student, 85, teacher.subject);
teacher.assignGrades(student, 80, "Science");
teacher.assignGrades(student, 92, "History");
teacher.makeAttendance(teacher.subject, student, "2025-09-16");
teacher.makeAttendance("Science", student1, "2025-09-15");
school.showAllAttendance();