class Car{
    constructor(brand,model,year,mileage){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage
    }
    start(){
        console.log("The car is starting...");
    }
    getInfo(){
        console.log(`Your car is ${this.brand} ${this.model} with year ${this.year}`);
    }
    drive(km){
        this.mileage+=km;
        console.log(`You are currently driving ${km}km. Now your mileage is ${this.mileage}`);
    }
}

const car1 = new Car('Chevrolet', 'Camaro', 2013, 0);
const car2 = new Car('Toyota', 'Supra', 2011, 0);

car1.drive(50);