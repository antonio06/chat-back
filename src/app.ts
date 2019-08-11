import * as bodyParser from 'body-parser';
import * as express from 'express';
import httpErrors from 'http-errors-express';
import * as socketIO from 'socket.io';
import { Socket } from 'socket.io';
import { routes, server, socketEvents } from './constants';
import { conversationController } from './conversation';
import { service, userController } from './users';
const app = express();
const io = socketIO(8080);

app.use(bodyParser.json());

app.post(routes.addUser, userController.addUser);

app.post(routes.addMessage, conversationController.addMessage);

io.use((socket, next) => {
  const { userId } = socket.handshake.query;
  if (service.userIdExist(userId)) {
    return next();
  }
});

io.on(socketEvents.connection, (socket: Socket) => {
  const user = service.getUserByUserId(socket.handshake.query.userId);

  if (user) {
    socket.broadcast.emit(socketEvents.loggedUser, user);
  }
});

io.on(socketEvents.addMessage, (socket: Socket, data: any) => {
  const message = conversationController.addMessage(data);
  const user = service.getUserByUserId(socket.handshake.query.userId);

  if (message && user) {
    socket.broadcast.emit(socketEvents.sendMessage, message);
  }
});

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
