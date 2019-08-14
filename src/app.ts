import * as bodyParser from 'body-parser';
import * as express from 'express';
import httpErrors from 'http-errors-express';
import * as socketIO from 'socket.io';
import { routes, server, socketEvents } from './constants';
import { conversationController } from './conversation';
import { service, userController } from './users';
const app = express();
const io = socketIO(8080);

app.use(bodyParser.json());

app.post(routes.addUser, userController.addUser);

io.use((socket, next) => {
  const { userId } = socket.handshake.query;
  if (service.userIdExist(userId)) {
    return next();
  }
});

io.on(socketEvents.connection, userController.onUserLogged);

io.on(socketEvents.addMessage, conversationController.addMessage);

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
