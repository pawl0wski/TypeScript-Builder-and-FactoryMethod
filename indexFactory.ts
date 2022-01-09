import { ReqresUserFactory, UserMeFactory } from "./UserFactoryMethod/factory";

let userFactory = new ReqresUserFactory();
userFactory.createUser().then(function (user) {
    console.log(user);
})

let userMeFactory = new UserMeFactory();
userMeFactory.createUser().then(function (user) {
    console.log(user);
})