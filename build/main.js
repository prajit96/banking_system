"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const bank_account_class_1 = require("./classes/bank-account.class");
const myAccount = new bank_account_class_1.default("1234567890", "John Doe");
myAccount.deposit(1000);
myAccount.withdraw(500);
const balance = myAccount.getBalance();
console.log(`Current Account Balance: $${balance}`);
//# sourceMappingURL=main.js.map