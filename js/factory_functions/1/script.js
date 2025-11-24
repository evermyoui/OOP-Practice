function user(name, age){
    const userName = name;
    let userAge = Number(age);

    function greet(){
        return `Hello! I am ${userName}`;
    }
    function bday(){
       return userAge++;
    }
    function getAge(){
        return userAge;
    }
    return {greet, bday, getAge};
}

const newUser = user("Juan", 21);
newUser.bday();
console.log(newUser.getAge());