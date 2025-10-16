class EmailService {
    send(message){
        console.log("Sent using Email: " + message);
    }
}
class SMSService {
    send(message){
        console.log("Sent using SMS: " + message);
    }
}
class UserRepository{
    constructor(){
        this.users = [];
    }
    saveUser(user){
        const existed = this.users.find(u=> u.username === user.username);
        if (existed){
            return false;
        }
        this.users.push(user);
        return true;
    }
}
class UserRegistration{
    constructor(repo, service){
        this.repo = repo;
        this.service = service;
    }
    register(username, password){
        const newUser = {username, password};
        const saved = this.repo.saveUser(newUser);
        if (saved){
            this.service.send("Successfully created user");
        }
    }
}