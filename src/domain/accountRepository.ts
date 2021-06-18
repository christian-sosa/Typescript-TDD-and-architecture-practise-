import {Account} from "./account";

export interface AccountRepository {
    getByNumber(accountNumber: string): Account;

    update(account: Account);
}