import {Account} from "../src/domain/account";
import {Deposit} from "../src/usecases/deposit";
import {InMemoryAccountRepository} from "../src/infrastracture/inMemoryAccountRepository";

describe('deposit should',() => {
    test('set balance with given amount', () => {
        const account = new Account(accountNumber);
        accountRepository.add(account);

        deposit.execute(100, accountNumber);

        expect(account.getBalance()).toEqual(100);
    });

    test('increment balance with given amount', () => {
        const account = new Account('5454-4545');
        account.deposit(10);

        account.deposit(100);

        expect(account.getBalance()).toEqual(110);
    });

    beforeEach(() => {
        accountRepository = new InMemoryAccountRepository();
        deposit = new Deposit(accountRepository);
    });

    let deposit: Deposit;
    let accountRepository: InMemoryAccountRepository;
    const accountNumber = '5454-4545';
})