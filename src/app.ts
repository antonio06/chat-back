const express = require('express');
const app = express();
import { conversationList } from './mockDatas';
import * as business from './business';
import * as serverConstants from './constants';

app.get(serverConstants.routes.default, (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.set(serverConstants.routes.addUser, (_req, res) => {
  business.addUsersToRoom(_req.params.newUser)
    .then(() => {
      res.status(200).send('user-add-successfully');
    })
    .catch(() => {
      res.status(400).send('user-add-error');
    })
});

app.set(serverConstants.routes.addConversation, (_req, res) => {
  business.addConversation(_req.params.newConversation)
  .then((conversationList) => {
    res.json(conversationList);
  })
  .catch(() => {
    res.status(400).send('conversation-add-error');
  })
});


app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
