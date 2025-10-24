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
        this.order = new Order(this.name);
        this.orders = restaurant.orders;
    }
    introduce(){
        return `${super.introduce()}. I am a customer`;
    }
    placeOrders(menu, menuItem, quantity, restaurant){
        const stockItem = restaurant.stock.find(s => s.name === existed.title);
        if (!stockItem || stockItem.quantity < quantity) {
            console.log("Not enough stock available!");
            return;
        }
        stockItem.quantity -= quantity;
        const existed = menu.menu.find(item => item.title === menuItem.toLowerCase());
        if (!existed){
            console.log(`No such ${menuItem} menu item`);
            return;
        }
        this.order.addItem(existed.title, quantity, existed.price);
        this.orders.push({
            name: this.name,
            menuItem: existed.title,
            quantity,
            price: existed.price
        });
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
        const stockItem = restaurant.stock.find(s => s.name === item);
        if (stockItem) stockItem.quantity += quantity;
        else restaurant.stock.push({name: item, quantity});
    }
}
class Delivery {
    deliver(item, quantity){
        return {item, quantity};
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
    constructor(name){
        this.name = name;
        this.orders = [];
    }
    addItem(menuItem, quantity, price){
        this.orders.push({
            menuItem, quantity, price
        });
    }
    totalCost(){
        return this.orders.reduce((acc,curr)=>{
            return acc + curr.price * curr.quantity;
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
    addMenu(title, description, price){
        this.menu.push({
            title: title.toLowerCase(),
            description,
            price
        });
    }
    showMenu(){
        this.menu.forEach(item =>{
            console.log(`${item.title} | P${item.price}`);
        });
    }
    showAllOrders(){
        this.orders.forEach(item =>{
            console.log(`${item.name} | ${item.quantity}x ${item.menuItem} | P${item.price}`);
        });
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