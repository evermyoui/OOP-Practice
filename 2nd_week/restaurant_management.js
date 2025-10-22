class Person {
    constructor(name){
        this.name = name;
    }
    introduce(){
        return `Hello my name is ${this.name}`;
    }
}
class Customer extends Person{
    constructor(name, restaurant){
        super(name);
        this.order = new Order();
        this.orders = restaurant.orders;
    }
    introduce(){
        return `${super.introduce()}. I am a customer`;
    }
    placeOrders(menu, menuItem, quantity){
        const existed = menu.menu.find(item => item.title === menuItem.toLowerCase());
        if (!existed){
            console.log(`No such ${menuItem} menu item`);
        }
        this.orders.push(
            [{name: this.name},{
            menuItem: existed.title, 
            quantity,
            price: existed.price
        }]);
        this.order.orders.push({
            menuItem: existed.title, 
            quantity,
            price: existed.price
        })
    }
    showOrders(){
        this.order.orders.forEach(item => {
            console.log(`${item.quantity}x ${item.menuItem} | P${item.price}`);
        });
    }
    whatIsItMadeOf(menu, menuItem){
        const existed = menu.menu.find(item => item.title === menuItem.toLowerCase());
        if (!existed) return false;

        console.log(`${existed.title}: ${existed.description}`);
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
    askDeliver(delivery,item,quantity, restaurant){
        const deliveredItem = delivery.deliver(item, quantity);
        restaurant.stock.find(item => item.name);
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
    constructor(){
        this.orders = [];
    }
    totalCost(){
        return customer.orders.reduce((acc,curr)=>{
            return acc + curr.price;
        }, 0);
    }
}
class Restaurant {
    static idCounter = 1;
    constructor(){
        this.menu = [];
        this.orders = [];
        this.stock = [];
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
        let signature = 0;
        let topItem = null;
        this.orders.forEach(item =>{
            if (item.quantity > signature){
                signature = item.quantity;
                topItem = item.menuItem;
            }
        });
        return topItem === null ? "No Order Yet." : topItem;
    }
    getHotItem(){

    }
    addMenu(title, description, price){
        this.menu.push({
            title: title.toLowerCase(),
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
const customer = new Customer('juan', mcdo);
const chef = new Chef("Juan");
const delivery = new Delivery();
const waiter = new Waiter("John",mcdo.availSched["1"] , mcdo.availTime["noonShift"], mcdo.employmentType[0]);
mcdo.addEmployee(waiter);
const adobo = "Adobo";
mcdo.addMenu(adobo, "haha", 1000);
const menu = new Menu(mcdo);
customer.placeOrders(menu, adobo, 1);
chef.askDeliver(delivery, "Chicken", 20, mcdo);
console.log(mcdo.restaurantSignature());