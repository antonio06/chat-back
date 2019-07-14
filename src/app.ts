import * as bodyParser from 'body-parser';
import * as express from 'express';
import { routes, server } from './constants';
import { conversationController } from './conversation';
import httpErrors from 'http-errors-express';
const app = express();

app.use(bodyParser.json());

/*app.post(routes.addUser, (req: Request, res: Response, _next) => {
  if (req.accepts('application/json') && req.method === server.protocols.post) {
    const userCredential = mappers.mapperToUserCredential(req.body.userName);
    controllers.addUserController(userCredential, res);
  } else {
    res.status(400).json('bad-formate-data');
  }
});*/

app.post(routes.addMessage, conversationController.addMessage);

app.use(httpErrors());

app.listen(server.port, () => {
  console.log(`Server running at ${server.port}:${server.location}`);
});

