class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance+=amount;
    }

    getBalance(){
        return this.#balance;
    }

    withdraw(amount){
        if(this.getBalance() >= amount){
            this.#balance-=amount;
        }else{
            console.log("Not enough funds, should not change balance");
        }
    }
}

const acc = new BankAccount();

acc.deposit(1000);
console.log(acc.getBalance());   // 1000

acc.withdraw(300);
console.log(acc.getBalance());   // 700

acc.withdraw(1000);              // Not enough funds, should not change balance
console.log(acc.getBalance());   // 700
