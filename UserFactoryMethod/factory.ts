import { IUser, User } from "./user";
import axios from "axios";

export interface IUserFactory{
    createUser() : Promise<IUser>
}

export class ReqresUserFactory implements IUserFactory{

    private apiURL = "https://reqres.in/api/users/2"

    public async createUser() : Promise<User> {
        let axiosResponse = await axios.get(this.apiURL) 
        let userData = axiosResponse.data.data;
        let user = new User(userData);
        return user;
    }

}

export class UserMeFactory implements IUserFactory{

    private apiURL = "https://randomuser.me/api/"

    public async createUser() : Promise<User> {
        let axiosResponse = await axios.get(this.apiURL) 
        let userData = axiosResponse.data.results[0];
        let firstName = userData.name.first
        let lastName = userData.name.last
        let email = userData.email
        let user = new User({email: email, first_name: firstName, last_name: lastName});
        return user;
    }

}