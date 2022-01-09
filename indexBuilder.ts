import { UserBuilder } from "./UserBuilderMethod/builder";
import { ReqresDirector, UserMeDirector } from "./UserBuilderMethod/director";

async function getAndShowUsers() {
    // UserMe
    let userBuilder = new UserBuilder();
    let userMeDirector = new UserMeDirector(userBuilder) 
    await userMeDirector.buildUser()
    let user = userBuilder.getProduct()
    user.sayHello()

    // Reqres
    let reqresDirector = new ReqresDirector(userBuilder)
    await reqresDirector.buildUser()
    user = userBuilder.getProduct()
    user.sayHello()
}

getAndShowUsers()
