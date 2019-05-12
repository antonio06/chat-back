const express = require('express');
const app = express();
import { conversationList } from './mockDatas';
import { addUsersToRoom, addConversation } from './utils';
import * as serverConstants from './constants';

app.get(serverConstants.routes.default, (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.get(serverConstants.routes.addUserToChat, (_req, res) => {
  addUsersToRoom(_req.params.newUser)
    .then(() => {
      res.status(200).send('user-add-successfully');
    })
    .catch(() => {
      res.status(400).send('user-add-error');
    })
});

app.get(serverConstants.routes.addConversation, (_req, res) => {
  addConversation(_req.params.newConversation)
  .then((conversationList) => {
    res.json(conversationList);
  })
  .catch(() => {
    res.status(400).send('converstaion-add-error');
  })
});


app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
