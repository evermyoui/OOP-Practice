class User { //user class
    //private fields
    #username
    #password
    constructor(username,password){
        this.#username = username;
        this.#password = password;
    }
    //changing password
    changePassword(oldPass, newPass){
        if (oldPass === this.#password){
            this.#password = newPass; //user new password
            return true;
        }
        return false;
        
    }
    login(password){
        return this.#password === password;
    }
    getUserName(){
        return this.#username;
    }
}
class UserManager {
    constructor(){
        this.users = [];
    }
    addUser(username, password){
        const exists = this.users.find(u => u.getUserName() === username);
        if (exists){
            return false;
        } else{
            const user = new User(username, password);
            this.users.push(user);
            return true;
        }
    }
    checkUser(username){
        return this.users.some(u => u.getUserName() === username);
    }
    login(username, password){
        const existed = this.users.find(u => u.getUserName() === username);
        if (!existed){
            return false;
        }
        const success = existed.login(password);
        return success;
    }
    changePassword(username, oldPass, newPass){
        const existed = this.users.find(u => u.getUserName() === username);
        if (!existed){
            return false;
        }
        const success = existed.changePassword(oldPass,newPass);
        return success;
    }
}