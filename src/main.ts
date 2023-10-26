// main.ts
import BankAccount from "./classes/bank-account.class";

const myAccount = new BankAccount("1234567890", "John Doe");

myAccount.deposit(1000);
myAccount.withdraw(500);

const balance = myAccount.getBalance();
console.log(`Current Account Balance: $${balance}`);
