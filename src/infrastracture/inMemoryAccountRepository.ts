import {AccountRepository} from "../domain/accountRepository";
import {Account} from "../domain/account";

export class InMemoryAccountRepository implements AccountRepository {
    private accounts = new Map<string, Account>();

    getByNumber(accountNumber: string): Account {
        return this.accounts.get(accountNumber);
    }

    update(account: Account) {
        this.accounts.set(account.getNumber(), account);
    }

    add(account: Account) {
        this.accounts.set(account.getNumber(), account);
    }
}