import { ReqresUserFactory, UserMeFactory } from "./UserFactoryMethod/factory";

function getAndShowUsers() {
    // UserMe
    let userFactory = new ReqresUserFactory();
    userFactory.createUser().then(function (user) {
        console.log(user);
    })

    // Reqres
    let userMeFactory = new UserMeFactory();
    userMeFactory.createUser().then(function (user) {
        console.log(user);
    })
}

getAndShowUsers()