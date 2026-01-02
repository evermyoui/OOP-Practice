class Project {
    constructor(title = "Unnamed Project", /*date*/){
        this.title = title;
        this.deletedTodo = [];
        this.todo = [];
        this.doneTodo = [];
        this.id = crypto.randomUUID();
        // this.date = date;
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
    constructor(title, description, dueDate, notes, dateCreated){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = 1;
        this.notes = notes;
        this.dateCreated = dateCreated;
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
        console.log(this.priority);
    }
    sortedByPriority(){
        
    }
}
class AllProjects {
    constructor(){
        this.allProject = [];
    }
    addProject(project){
        this.allProject.push(project);
    }
    getProject(index){
        return this.allProject[index];
    }
}

function getLevel(level){
    let levels = new Map();
    levels.set("High", 3);
    levels.set("Medium", 2);
    levels.set("Low", 1);

    return levels.get(level);
}

const allProject = new AllProjects();
const project = new Project("Project 1");
const project1 = new Project("Project 2");
const todo1 = new Todo("hahahha", "12-29");
const todo2 = new Todo("hahahha2", "12-29");
const todo3 = new Todo("hahahha3", "12-29");
project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);
allProject.addProject(project);
allProject.addProject(project1);
todo1.changePriority("Medium");
todo3.changePriority("High");
project.done();
console.log(allProject.getProject(0));