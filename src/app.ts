const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import * as serverConstants from './constants';
import * as controllers from './controllers';
import * as mappers from './mappers';

const jsonParser = bodyParser.json({ extended: false });

app.post(serverConstants.routes.addUser, jsonParser, (req, res, _next) => {
  if (req.accepts('application/json') && req.method === 'POST') {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    controllers.addUserController(userCredential, res);
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.post(serverConstants.routes.addConversation, jsonParser, (req, res) => {
  if (req.accepts('application/json')) {
    const conversation = mappers.mapperToConversation(req.body.id, req.body.name, req.body.message);
    controllers.addConversationController(conversation, res);
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
