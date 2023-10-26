"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
        this.transactions = [];
    }
    deposit(amount) {
        this.balance += amount;
        const transaction = {
            type: 'deposit',
            amount: amount,
            timestamp: new Date(),
        };
        this.transactions.push(transaction);
        console.log(`Deposited: $${amount}`);
        this.displayBalance();
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = {
                type: 'withdraw',
                amount: amount,
                timestamp: new Date(),
            };
            this.transactions.push(transaction);
            console.log(`Withdrawn: $${amount}`);
        }
        else {
            console.log("Insufficient funds. Withdrawal failed.");
        }
        this.displayBalance();
    }
    getBalance() {
        return this.balance;
    }
    displayBalance() {
        console.log(`Account Balance: $${this.getBalance()}`);
        console.log("Transaction History:");
        this.transactions.forEach(transaction => {
            console.log(`${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} of $${transaction.amount} on ${transaction.timestamp}`);
        });
        console.log("----------------------");
    }
}
exports.default = BankAccount;
//# sourceMappingURL=bank-account.class.js.map