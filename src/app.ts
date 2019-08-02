import * as bodyParser from 'body-parser';
import * as express from 'express';
import httpErrors from 'http-errors-express';
import * as socketIO from 'socket.io';
import { socketEvents, routes, server } from './constants';
import { conversationController } from './conversation';
import { userController } from './users';
import { Socket } from 'socket.io';
const app = express();
const io = socketIO(8080);

app.use(bodyParser.json());

app.post(routes.addUser, userController.addUser);

app.post(routes.addMessage, conversationController.addMessage);

io.use((socket, next) => {
  const { userId } = socket.handshake.query;

});

io.on(socketEvents.connection, (socket: Socket) => {
  socket.broadcast.emit(socketEvents.loggedUser);
});

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
