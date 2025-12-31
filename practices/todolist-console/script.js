class Project{
    constructor(title, dateCreated){
        this.title = title;
        this.todolist = [];
        this.doneTodo = [];
        this.dateCreated = dateCreated;
        this.id = crypto.randomUUID();
    }
    addTodo(content, dateCreated, dueDate){
        this.todolist.push(new Todo(content, dateCreated, dueDate));
    }
    completedToDo(todoId){
        const index = this.todolist.findIndex(todo => todo.id === todoId);
        if (index === -1) return;

        const todo = this.todolist[index];
        todo.markAsDone();
        this.doneTodo.push(todo);
        this.todolist.splice(index, 1);
    }
    displayCompletedToDo(){
        this.doneTodo.forEach((done)=> {
            console.log(done.content);
        })
    }
    displayLeftToDo(){
        this.todolist.forEach((todo)=>{
            console.log(todo.content);
        })
    }
}
class Todo {
    constructor(content, dateCreated, dueDate,){
        this.content = content;
        this.dateCreated = dateCreated;
        this.dueDate = dueDate;
        this.isDone = false;
        this.id = crypto.randomUUID();
    }
    markAsDone(){
        this.isDone = true;
    }
}
class AllProjects {
    constructor(){
        this.projects = [];
    }
    addProject(project){
        this.projects.push(project);
    }
    deleteProject(projectId){
        this.projects = this.projects.filter(project => project.id !== projectId);
    }
    displayProjects(){
        this.projects.forEach((project)=> {
            console.log(`${project.title} ${project.dateCreated}`);
        });
    }
    getProjectId(projectId){
        return this.projects.find(proj => proj.id === projectId);
    }
}

class Controller {
    constructor(allProj){
        this.allProj = allProj;
    }
    createProject(title, date){
        const project = new Project(title, date);
        this.allProj.addProject(project);

        return project.id;
    }
    addToDoToProject(projId, content, dueDate){
        const proj = this.allProj.getProjectId(projId);
        proj.addTodo(content, date, dueDate)
    }
    completedToDo(projId, todoId){
        const proj = this.allProj.getProjectId(projId);
        proj.completedToDo(todoId);
    }
    deleteProject(projId){
        this.allProj.deleteProject(projId);
    }
}

class Storage {
    constructor(){
        this.storageKey = "projects";
    }
}