import { AbstractUser, User } from "./user";

export interface IUserBuilder{
    user? : AbstractUser
    
    reset() : void
    setName(firstName : string, lastName : string) : this
    setCity(city: string) : this  
    setEmail(email : string) : this
    setAge(age : number) : this
    getProduct() : any
}

export class UserBuilder implements IUserBuilder {
    user? : AbstractUser 
    
    reset() {
        this.user = undefined
    }

    private checkIfUserExists() : any {
        if (this.user == undefined) {
            throw TypeError("You need to run setName first!")
        }else{
            return this.user
        }
    }

    setName(firstName: string, lastName: string) : this {
        this.user = new User(firstName, lastName);
        return this
    }

    setCity(city: string){
        let user = this.checkIfUserExists()
        user.city = city
        this.user = user
        return this
    }

    setEmail(email: string){
        let user = this.checkIfUserExists()
        user.email = email
        this.user = user
        return this
    }

    setAge(age: number){
        let user = this.checkIfUserExists()
        user.age = age
        this.user = user
        return this
    }

    getProduct() : User {
        let user = this.checkIfUserExists()
        this.reset()
        return user
    }
}