import express from "express";
import UserService from "@services/UserService";

const app = express();

app.get('/', (request, response) => {
    let userService = new UserService();
    console.log(userService.name);
    return response.json({ info: 'OK!!!' });
});

app.listen(3030);