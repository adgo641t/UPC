export class User {
    public _username: string;
    public _email: string;
    public _password: string;

    constructor(user: string, password: string, email: string) {
        this._username = user;
        this._password = password;
        this._email = email;
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

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
