import {InsufficientFundsError} from "./insufficientFundsError";

export class Account {
    private accountNumber: string;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
    }

    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }

    withdraw(amount: number) {
        this.failIfInsufficientFundsFor(amount);
        this.balance -= amount;
    }

    private failIfInsufficientFundsFor(amount: number) {
        if (this.balance < amount) throw new InsufficientFundsError();
    }

    getNumber() {
        return this.accountNumber;
    }
}

