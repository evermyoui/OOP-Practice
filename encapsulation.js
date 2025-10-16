class BankAccount{
    #balance;
    constructor(owner, initialBalance){
        this.owner = owner;
        this.#balance = initialBalance;
    }
    deposit(amount){
        if (amount<=0){
            console.log('Please enter valid amount.')
            return;
        };
        this.#balance+=amount;
        console.log(`The user ${this.owner} just deposited P${amount}.`);
    }
    withdraw(amount){
        if (amount > this.#balance){
            console.log('Insufficient Balance');
            return;
        }
        this.#balance-=amount;
        console.log(`The user ${this.owner} just withdraw P${amount}.`);
    }
    getBalance(){
        console.log(`Your current balance is: P${this.#balance}`);
        return this.#balance;
    }
    transfer(toAccount, amount){
        if (amount > this.#balance){
            console.log('Insufficient Balance');
            return;
        }
        if (amount<0){
            console.log('Please enter valid amount.')
            return;
        };
        if (this === toAccount)return console.log("Can't transfer to your own account");
        this.#balance-=amount;
        toAccount.#balance+=amount;
        console.log(`The user ${this.owner} just tranfered P${amount} to user ${toAccount.owner}`);
    }
}

const acc1 = new BankAccount("Juan", 1000);
const acc2 = new BankAccount("Maria", 500);
acc1.transfer(acc1, 300);