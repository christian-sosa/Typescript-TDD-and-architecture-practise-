import {Account} from "../src/domain/account";
import {InsufficientFundsError} from "../src/domain/insufficientFundsError";

describe('withdraw should', () => {
    test('decrement balance with given amount', () => {
        const account = new Account();
        account.deposit(35);

        account.withdraw(25);

        expect(account.getBalance()).toEqual(10);
    })

    test('fail when funds are insufficient', () => {
        const account = new Account();
        account.deposit(10);

        expect(() => account.withdraw(14)).toThrow(InsufficientFundsError);
    })
})