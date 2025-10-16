class Product {
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    restock(amount){
        this.stock+= amount;
    }
    applyDiscount(discount){
        const discountedPrice = this.price - (this.price * (discount / 100));
        this.price = discountedPrice;
        console.log(`You have a discount of ${discount}%`);
        return discountedPrice;
    }
}
class ProductCatalog {
    constructor(product){
        this.product = product;
    }
    browse(){
        console.log(`Current Stocks: `);
        this.product.forEach(item => {
            console.log(`${item.name} STOCK : ${item.stock}`);
        })
    }
}
class CartItem {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    getSubTotal(){
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor(){
        this.cart = [];
    }
    addItem(product, quantity){
        const existed = this.cart.find(item => item.product.name === product.name);
        if (existed){
            existed.quantity+=quantity;
        }else {
            this.cart.push(new CartItem(product, quantity));
        }
        product.stock-=quantity;
    }
    removeItem(product, quantity){
        const index = this.cart.findIndex(item => item.product.name === product.name);
        if (index !== -1){
            this.cart[index].quantity-=quantity;
            product.stock+=quantity;
            if (this.cart[index].quantity <=0){
                this.cart.splice(index,1);
            }
        }
    }
    getTotal(){
        return this.cart.reduce((acc,curr)=> acc += curr.getSubTotal(),0);
    }
    clearCart(){
        this.cart.forEach(item =>{
            item.product.stock+=item.quantity;
        });
        this.cart = [];
    }
    listItems(){
        if (this.cart.length ===0) return "No items.";
        console.log(`Your current cart contains: `);
        this.cart.forEach(item =>{
            console.log(`P${item.product.price} x${item.quantity} = ${item.getSubTotal()} ${item.product.name}`);
        });
    }
}
class User {
    constructor(name){
        this.name = name;
        this.cart = new ShoppingCart();
        this.order = new OrderHistory();
    }
}
class Order {
    constructor(user){
        this.user = user;
        this.items = [...user.cart.cart];
        this.isCancelled = false;
        this.isCompleted = false;
    }
    checkout(){
        this.user.cart.listItems();
        console.log(`Your total is : P${this.user.cart.getTotal()}`);
        this.isCompleted = true;
        this.user.history.addOrder(this);
        this.user.cart.clearCart();
    }
    cancel(){
        this.user.history.addOrder(this);
        this.user.cart.listItems();
        this.user.cart.clearCart();
        this.isCancelled = true;
    }
    getStatus(){
        if(this.isCancelled){
            console.log(`Current Status: Cancelled`);
        }
        else if (this.isCompleted){
            console.log(`Current Status: Completed`);
        }
        else {
            console.log(`Current Status: Pending`);
        }
    }
}
class OrderHistory {
    constructor(){
        this.historyLog = [];
    }
    addOrder(order){
        this.historyLog.push(order);
    }
    viewHistory(){
        if (this.historyLog.length === 0) return "No history"
        this.historyLog.forEach((item, index) =>{
            console.log(`${index + 1} | Status: ${item.isCancelled ? "Cancelled" : "Completed"} ${item.user.cart.listItems()}`);
        });
    }
}

const laptop = new Product("Laptop", 50000, 2);
const mouse = new Product("Mouse", 500, 5);
const user = new User("Juan");
const order = new Order(user);

const products = [];
products.push(laptop);
products.push(mouse);
const cata = new ProductCatalog(products);

laptop.restock(2);
laptop.applyDiscount(10);
user.cart.addItem(laptop, 2);
//order.getStatus();
//user.cart.listItems();
cata.browse();


