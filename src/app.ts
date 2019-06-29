const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');
import * as serverConstants from './constants';
import * as controllers from './controllers';
import * as mappers from './mappers';
import { Request, Response } from 'express-serve-static-core';

const jsonParser = bodyParser.json({ extended: false });

app.use(cookieParser());

app.post(serverConstants.routes.addUser, jsonParser, (req: Request, res: Response, _next) => {
  if (req.accepts('application/json') && req.method === 'POST') {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    controllers.addUserController(userCredential, res);
    res.cookie('name', 'chat-cookie', { maxAge: 1800000 });
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.post(serverConstants.routes.addConversation, jsonParser, (req: Request, res: Response) => {
  if (req.accepts('application/json') && req.method === 'POST') {
    const conversation = mappers.mapperToConversation(req.body.id, req.body.name, req.body.message);
    controllers.addConversationController(conversation, res);
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.listen(serverConstants.PORT, () => {
  console.log(`Server running at ${serverConstants.routes.server}:${serverConstants.PORT}`);
});
