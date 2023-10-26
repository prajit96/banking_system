declare class BankAccount {
    private accountNumber;
    private accountHolder;
    private balance;
    private transactions;
    constructor(accountNumber: string, accountHolder: string);
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
    displayBalance(): void;
}
export default BankAccount;
