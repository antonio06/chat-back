const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');
import { Request, Response } from 'express-serve-static-core';
import { routes, server } from './constants';
import * as controllers from './controllers';
import * as mappers from './mappers';

const jsonParser = bodyParser.json({ extended: false });

app.use(cookieParser());

app.post(routes.addUser, jsonParser, (req: Request, res: Response, _next) => {
  if (req.accepts('application/json') && req.method === server.protocols.post) {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    controllers.addUserController(userCredential, res);
    res.cookie('name', 'chat-cookie', { maxAge: 1800000 });
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.post(routes.addConversation, jsonParser, (req: Request, res: Response) => {
  if (req.accepts('application/json') && req.method === server.protocols.post) {
    const conversation = mappers.mapperToConversation(req.body.id, req.body.name, req.body.message);
    controllers.addConversationController(conversation, res);
  } else {
    res.status(400).send('bad-formate-data');
  }
});

app.listen(server.port, () => {
  console.log(`Server running at ${server.port}:${server.location}`);
});
