// import {isAfter} from "date-fns";
//classes
class Project {
    constructor(title = "Unnamed Project", /*date*/){
        this.title = title;
        this.deletedTodo = [];
        this.todo = [];
        this.doneTodo = [];
        this.id = crypto.randomUUID();
        // this.date = date;
        this.isDone = false;
    }
    addTodo(todo){
        this.todo.push(todo);
    }
    done(){
        this.doneTodo = this.todo.filter(todo => todo.status === "completed");
        this.todo = this.todo.filter(todo => todo.status === "pending");
    }
    deleteTodo(){
        this.deletedTodo = this.todo.filter(todo => todo.status === "deleted");
        this.todo = this.todo.filter(todo => todo.status === "pending");
    }
}
class Todo {
    constructor(title, description,notes, dateCreated){
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dueDate = {due: false, date: this.dateCreated};
        this.priority = 1;
        this.notes = notes;
        this.status = "pending";
    }
    markAsDone(){
        this.status = "completed";
    }
    markAsDeleted(){
        this.status = "deleted";
    }
    changePriority(level){
        this.priority = getLevel(level);
    }
}
class AllProjects{
    constructor(){
        this.allProject = getLocalStorage("allProject") ||[];
        this.deletedProject = []; 
    }
    addProject(project){
        this.allProject.push(project);
    }
    getProject(index){
        return this.allProject[index];
    }
    deleteProject(projectID){
        const index = this.allProject.findIndex(project => project.id === projectID);
        if (index === -1) return;
        this.deletedProject.push(this.allProject[index]);
        this.allProject = this.allProject.filter(project => project.id !== projectID);
    }
}
// functions
function getLevel(level){
    let levels = new Map();
    levels.set("High", 3);
    levels.set("Medium", 2);
    levels.set("Low", 1);

    return levels.get(level);
}

function sortedByPriority(todo){
    return todo.sort((a,b)=> b.priority - a.priority);
}
// function dueOrNot(todo){
//    return isAfter(new Date(), new Date (todo.dueDate)) ? true : false;
// }

function settingLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
//test
const allProject = new AllProjects();
const project = new Project("Project 1");
const project1 = new Project("Project 2");
const todo1 = new Todo("hahahha", "12-29");
const todo2 = new Todo("hahahha2", "12-29");
const todo3 = new Todo("hahahha3", "12-29");
project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);
todo1.markAsDone();
allProject.addProject(project);
allProject.addProject(project1);
todo1.changePriority("Medium");
todo3.changePriority("High");
project.done();
allProject.deleteProject(project1.id);
sortedByPriority(project.todo);
const div = document.querySelector(".data");
settingLocalStorage("allProject", allProject.allProject);
div.textContent = JSON.stringify(getLocalStorage("allProject")[0].title, null, 2);
// dueOrNot(project.todo);
console.log(allProject);