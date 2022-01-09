export abstract class AbstractUser {
    firstName?: string;
    lastName?: string;
    email?: string;
    city?: string;
    age?: number;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }
}

export class User extends AbstractUser {

    sayHello() {
        console.log(`Hi I'm ${this.firstName} ${this.lastName}`)

        if (this.age) {
            console.log(`I'm ${this.age}`)
        }

        if (this.email) {
            console.log(`My email is ${this.email}`)
        }else{
            console.log("I don't have email")
        }

        if(this.city) {
            console.log(`I live in ${this.city}`)
        }else{
            console.log("I'm homeless")
        }
    }
}