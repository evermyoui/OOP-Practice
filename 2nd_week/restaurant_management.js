class Person {
    constructor(name){
        this.name = name;
    }
    introduce(){
        return (`Hello my name is ${this.name}`);
    }
}
class Customer {
    constructor(){
        this.orders = [];
    }
    placeOrders(menu, menuItem, quantity){
        const existed = menu.menu.find(item => item.title === menuItem);
        if (!existed){
            console.log(`No such ${menuItem} menu item`);
        }
        this.orders.push({menuItem: existed.title, 
            quantity,
            price: existed.price
        });
    }
    showOrders(){
        this.orders.forEach(item => {
            console.log(`${item.quantity}x ${item.menuItem} | P${item.price}`);
        });
    }
    whatIsItMadeOf(menu){
        menu.menu.map(item =>{
            return ////////// pause here 10-21-25
        });
    }
}
class Waiter extends Person {
    constructor(name, schedule, time, employmentType, id){
        super(name);
        this.schedule =schedule;
        this.time = time;
        this.employmentType = employmentType;
        this.id = id;
    }
    introduce(){
        return `${super.introduce()}. I am a gentle waiter.`;
    }
}
class Chef extends Person {
    constructor(name){
        super(name);
    }
    introduce(){
        return `${super.introduce()}. I am a chef.`
    }
    contactDelivery(delivery,item,quantity){
        delivery.deliver(item, quantity);
    }
}
class Delivery {
    constructor(){

    }
    deliver(item, quantity){

    }
}
class Menu {
    constructor(restaurant){
        this.menu = restaurant.menu;
    }
    getInfo(){
        this.menu.forEach(item => {
            console.log(`Item: ${item.title}\nDescription: ${item.description} \nPrice: ${item.price}`);
        })
    }
}
class Order {
    constructor(customer, waiter, quantity){
        this.customer = customer;
        this.waiter = waiter;
        this.quantity = quantity;
    }
    totalCost(){

    }
}
class Restaurant {
    static idCounter = 1;
    constructor(){
        this.menu = [];
        this.orders = [];
        this.employmentType = ["Part-Time", "Full-Time"];
        this.employees = [];
        this.availTime = {
            morningShift: "6:00am - 12:00pm",
            noonShift: "12:00pm - 6:00pm",
            eveningShift:"6:00pm - 12:00am",
            graveyardShift: "12:00am - 6:00am"
        };
        this.availSched = {
            1: "Montag - Donnerstag",
            2: "Dienstag - Freitag",
            3: "Mittwoch - Samstag",
            4: "Donnerstag - Sonntag",
            5: "Freitag - Montag"
        };
    }
    addEmployee(employee){
        const id = `EMP-${String(Restaurant.idCounter).padStart(4, '0')}`;
        Restaurant.idCounter++;
        this.employees.push(employee);
        employee.id = id;
    }
    restaurantSignature(){

    }
    getHotItem(){

    }
    addMenu(title, description, price){
        this.menu.push({
            title,
            description,
            price
        });
    }
    showMenu(){

    }
    showAllOrders(){

    }
    changeSchedule(id, newSchedule){
        const existed = this.employees.find(employee => employee.id === id);
        if (!existed){
            console.log(`Not existing id.`);
            return;
        }
        existed.schedule = newSchedule;

    }
    changeTime(id, newTime){
        const existed = this.employees.find(employee => employee.id === id);
        if (!existed){
            console.log(`Not existing id.`);
            return;
        }
        existed.time = newTime;
    }
}

const mcdo = new Restaurant();
const customer = new Customer();
const waiter = new Waiter("John",mcdo.availSched["1"] , mcdo.availTime["noonShift"], mcdo.employmentType[0]);
mcdo.addEmployee(waiter);
mcdo.changeSchedule(waiter.id, mcdo.availSched["2"]);
mcdo.addMenu("Adobo", "haha", 1000);
mcdo.addMenu("Sinigang", "haha", 2000);
const menu = new Menu(mcdo);
customer.placeOrders(menu, "Adobo", 1);
customer.placeOrders(menu, "Sinigang", 2);
console.log(menu.menu);