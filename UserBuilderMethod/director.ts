import axios from "axios";
import { UserBuilder } from "./builder";


export class UserMeDirector{
    private apiURL = "https://randomuser.me/api/"
    builder : UserBuilder

    constructor(builder : UserBuilder){
        this.builder = builder
    }

    async buildUser() {
        let axiosResponse = await axios.get(this.apiURL)
        let data = axiosResponse.data.results[0]

        this.builder.setName(data.name.first, data.name.last)
        this.builder.setAge(data.dob.age)
        this.builder.setCity(data.location.city)
        this.builder.setEmail(data.email)
    }
}

export class ReqresDirector{
    private apiURL = "https://reqres.in/api/users/2"
    builder : UserBuilder

    constructor(builder : UserBuilder){
        this.builder = builder
    }

    async buildUser() {
        let axiosResponse = await axios.get(this.apiURL)
        let data = axiosResponse.data.data

        this.builder.setName(data.first_name, data.last_name)
    }
}