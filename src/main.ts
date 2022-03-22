import express from "express";

const app = express();

app.get('/', (request, response) => {
    return response.json({ info: 'OK!!!' });
});

app.listen(3030);