import * as express from 'express';
const app = express();
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express-serve-static-core';
import { routes, server } from './constants';
import * as controllers from './controllers';
import * as mappers from './mappers';

app.use(bodyParser.json());

app.post(routes.addUser, (req: Request, res: Response, _next) => {
  if (req.accepts('application/json') && req.method === server.protocols.post) {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    controllers.addUserController(userCredential, res);
  } else {
    res.status(400).json('bad-formate-data');
  }
});

app.post(routes.addConversation, (req: Request, res: Response) => {
  if (req.accepts('application/json') && req.method === server.protocols.post) {
    const conversation = mappers.mapperToConversation(req.body.id, req.body.name, req.body.message);
    controllers.addConversationController(conversation, res);
  } else {
    res.status(400).json('bad-formate-data');
  }
});

app.listen(server.port, () => {
  console.log(`Server running at ${server.port}:${server.location}`);
});
