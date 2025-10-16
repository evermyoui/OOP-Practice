class Product {
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
class CartItem {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    getSubTotal(){
        return this.quantity * this.product.price;
    }
}
class ShoppingCart {
    constructor(){
        this.cart = [];
    }
addItem(product, quantity){
    if (product.stock < quantity){
        console.log(`❌ Not enough stock for ${product.name}. Only ${product.stock} left.`);
        return;
    }

    // Check if item already exists in cart
    const existingItem = this.cart.find(item => item.product.name === product.name);
    if (existingItem){
        existingItem.quantity += quantity;
    } else {
        this.cart.push(new CartItem(product, quantity));
    }

    // Deduct stock
    product.stock -= quantity;
    console.log(`✅ Added ${quantity} ${product.name}(s) to cart. Remaining stock: ${product.stock}`);
}

    removeItem(product){
        this.cart = this.cart.filter(item => item.product.name !== product.name);
    }
    getTotal(){
        return this.cart.reduce((acc, curr) => acc + curr.getSubTotal(), 0);
    }
    myCart(){
        if (this.cart.length === 0){
            console.log("No item");
            return;
        }
        const log = this.cart.map(item => item.product.name);
        return log.join(", ");
    }
}
class User {
    constructor(name){
        this.name = name;
        this.cart = new ShoppingCart();
    }
}
class Order {
    constructor(user){
        this.user = user;
        this.cart= user.cart.cart;
    }
    checkout(){
        console.log(`Your total is: P${this.user.cart.getTotal()}\nItems: ${this.user.cart.myCart()}`);
    }
}
const user = new User("Juan");
const laptop = new Product("Laptop", 50000, 5);
const mouse = new Product("Mouse", 500, 10); 
user.cart.addItem(laptop, 2);
user.cart.addItem(laptop,3);
const order = new Order (user);
order.checkout();
