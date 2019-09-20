import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import httpErrors from 'http-errors-express';
import * as socketIO from 'socket.io';
import { routes, server, socketEvents } from './constants';
import { conversationController } from './conversation';
import { userController } from './users';
const app = express();
const io = socketIO(8080);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.post(routes.addUser, userController.addUser);

io.use(async (socket, next) => {
  const { userId } = socket.handshake.query;
  if (userId && await userController.userExist(userId)) {
    return next();
  }
});

io.on(socketEvents.connection, (socket: socketIO.Socket) => {
  userController.onUserLogged(socket, io);
  socket.on(socketEvents.sendMessage, (data: any) => {
    conversationController.onSendMessage(socket, io, data);
  });
});

app.use(httpErrors());

app.listen(server.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${server.location}:${server.port}`);
});
