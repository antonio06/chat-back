import * as bodyParser from 'body-parser';
import * as express from 'express';
import { routes, server } from './constants';
import { conversationController } from './conversation';
import { userController } from './users';
import httpErrors from 'http-errors-express';
const app = express();

app.use(bodyParser.json());

app.post(routes.addUser, userController.addUser);

app.post(routes.addMessage, conversationController.addMessage);

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
