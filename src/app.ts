import * as bodyParser from 'body-parser';
import * as express from 'express';
import httpErrors from 'http-errors-express';
import * as socketIO from 'socket.io';
import { events, routes, server } from './constants';
import { conversationController } from './conversation';
import { userController } from './users';
const app = express();
const io = socketIO(8080);

app.use(bodyParser.json());

app.post(routes.addMessage, conversationController.addMessage);

io.on(events.connection, userController.addUser);

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
