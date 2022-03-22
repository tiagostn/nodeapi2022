import express from 'express';
import UserService from '@services/UserService';

const app = express();

app.get('/', (request, response) => {
  const userService = new UserService();
  return response.json({ info: `OK!!! => ${userService.name}` });
});

app.listen(3030);
