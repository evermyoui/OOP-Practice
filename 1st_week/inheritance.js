class Animal {
    makeSound(){
    }
    speak(){
        console.log("An animal speaks.");
    }
}
class Dog extends Animal{
    makeSound(){
        return console.log("Arf");
    }
        speak(){
        return console.log('Dog Arf');
    }
}
class Cat extends Animal{
    makeSound(){
        return console.log("Meow");
    }
}

const animals = [
    new Cat(),
    new Dog()
];

for (const animal of animals){
    animal.makeSound();
    animal.speak();
}
