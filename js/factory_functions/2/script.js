
function bankAccount(){
    const history = [];
    let balance = 0;
    function deposit(amount){
        balance+=amount;
        let depositHistory = `Deposit: ${amount}`;
        history.push(depositHistory);
    }
    function withdraw(amount){
        if (balance < amount){
            return "Not enough balance";
        }
        balance-=amount;
        let withdrawHistory = `Withdraw: ${amount}`;
        history.push(withdrawHistory);
    }
    function getBalance(){
        return balance;
    }
    function receipt(){
        history.forEach(item => {
            console.log(item);
        });
    }
    return {deposit, withdraw, getBalance, receipt}
}

const bank = bankAccount();
bank.deposit(500);
bank.withdraw(200);
bank.receipt();