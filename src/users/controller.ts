import { NextFunction, Request, Response } from 'express';
import * as createError from 'http-errors-express';
import { getUserNameFromBody } from './mappers';
import * as service from './service';

export const addUser = (req: Request, res: Response, next: NextFunction) => {
  const userName = getUserNameFromBody(req.body);
  if (userName) {
    service.addUsersToRoom(userName);
    res.status(200).json({ message: 'user-add-successfully' })
  } else {
    next(createError(427, 'user-add-error'));
  }
}
