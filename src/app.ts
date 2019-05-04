const express = require('express');
const app = express();
import { conversationList, newUser } from './mockDatas';
import { addUsers } from './utils';
import * as serverConstants from './constants';

app.get(serverConstants.routes.default, (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.get(serverConstants.routes.addUserToChat, (_req, res) => {
  addUsers(newUser) ?
  res.status(200).send('user-add-successfully') :
  res.status(400).send('user-add-error');
})

app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
