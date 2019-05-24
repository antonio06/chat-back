const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import { conversationList } from './mockDatas';
import * as business from './business';
import * as mappers from './mappers';
import * as serverConstants from './constants';

app.get(serverConstants.routes.default, (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

const jsonParser = bodyParser.json({ extended: false });

app.post(serverConstants.routes.addUser, jsonParser, (req, res, _next) => {
  if (req.accepts('application/json')) {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    business.addUsersToRoom(userCredential)
    .then(() => {
      res.status(200).send('user-add-successfully');
    })
    .catch(() => {
      res.status(400).send('user-add-error');
    });
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.post(serverConstants.routes.addConversation, (_req, res) => {
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
