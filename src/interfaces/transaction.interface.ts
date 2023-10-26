// transaction.interface.ts
interface Transaction {
    type: string;
    amount: number;
    timestamp: Date;
}

export default Transaction;
