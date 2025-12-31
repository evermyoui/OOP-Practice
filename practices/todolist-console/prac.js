class Project {
    constructor(title = "Unnamed Project", /*date*/){
        this.title = title;
        this.todo = [];
        this.id = crypto.randomUUID();
        // this.date = date;
    }
    addTodo(content){
        this.todo.push({
            content, id: this.id
        });
    }


}
class Todo {
    constructor(){

    }
}
class AllProjects {
    constructor(){
        this.allProject = [];
    }
    addProject({title, /*date*/ todo}){
        this.allProject.push({title, /*date*/ 
            content: todo
        });
    }
    getProject(index){
        return this.allProject[index];
    }
}
const allProject = new AllProjects();
const project = new Project("Project 1");
const project1 = new Project("Project 2");
project.addTodo("hahahha");
allProject.addProject(project);
allProject.addProject(project1);
console.log(allProject.getProject(0));