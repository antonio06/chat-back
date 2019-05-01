const express = require('express');
const app = express();
import { conversationList } from './mockDatas';
import { login } from './login';
import { newUser } from './mockDatas';

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.get('/login', (_req, res) => {
  login(newUser).then((loginStatus) => {
    loginStatus === true ?
      res.status(200).send('Login success')
      :
      res.status(400).send('Login error');
  })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
