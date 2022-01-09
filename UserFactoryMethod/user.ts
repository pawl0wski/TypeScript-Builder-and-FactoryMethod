export interface IUser {
    email: string;
    first_name: string;
    last_name: string;
}

export class User implements IUser {
    email: string;
    first_name: string;
    last_name: string;
    constructor(init: {email: string , first_name: string, last_name: string}){
        this.email = init.email;
        this.first_name = init.first_name;
        this.last_name = init.last_name;
    }
}