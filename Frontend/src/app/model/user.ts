export class User {
    public _username: string;
    public _password: string;

    constructor(user: string, password: string) {
        this._username = user;
        this._password = password;
    }

    get user(): string {
        return this._username;
    }

    set user(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
