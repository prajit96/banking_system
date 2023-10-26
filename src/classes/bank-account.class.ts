// bank-account.class.ts
import Transaction from "../interfaces/transaction.interface";

class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;
    private transactions: Transaction[];

    constructor(accountNumber: string, accountHolder: string) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount: number): void {
        this.balance += amount;
        const transaction: Transaction = {
            type: 'deposit',
            amount: amount,
            timestamp: new Date(),
        };
        this.transactions.push(transaction);
        console.log(`Deposited: $${amount}`);
        this.displayBalance();
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction: Transaction = {
                type: 'withdraw',
                amount: amount,
                timestamp: new Date(),
            };
            this.transactions.push(transaction);
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log("Insufficient funds. Withdrawal failed.");
        }
        this.displayBalance();
    }

    getBalance(): number {
        return this.balance;
    }

    displayBalance(): void {
        console.log(`Account Balance: $${this.getBalance()}`);
        console.log("Transaction History:");
        this.transactions.forEach(transaction => {
            console.log(`${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} of $${transaction.amount} on ${transaction.timestamp}`);
        });
        console.log("----------------------");
    }
}

export default BankAccount;
