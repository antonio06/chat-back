const express = require('express');
const app = express();
import { conversationList, newUser } from './mockDatas';
import { login } from './login';
import { loginError, loginSuccess } from './models';
import * as serverConstants from './constants';

app.get(serverConstants.routes.default, (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.get(serverConstants.routes.login, (_req, res) => {
  login(newUser).then((loginStatus) => {
    loginStatus === true ?
      res.status(loginSuccess.code).json(loginSuccess)
      :
      res.status(loginError.code).json(loginError);
  })
})

app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
