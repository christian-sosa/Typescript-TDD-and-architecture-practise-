import {AccountRepository} from "../domain/accountRepository";

export class Deposit {
    private accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository;
    }

    execute(amount: number, accountNumber: string) {
        const account = this.accountRepository.getByNumber(accountNumber);
        account.deposit(amount);
        this.accountRepository.update(account);
    }

}