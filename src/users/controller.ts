import { NextFunction, Request, Response } from 'express';
import * as createError from 'http-errors';
import { v4 } from 'uuid';
import { User } from '../models';
import { getUserNameFromBody } from './mappers';
import * as service from './service';
import * as validation from './validation';

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const userName = getUserNameFromBody(req.body);
  if (userName) {
    const user = createUser(userName);
    if (validation.usersComprobation(service.userService.users, user)) {
      const result = await service.userService.addUsersToRoom(user);
      res.status(200).json(result);
    } else {
      next(createError(400, 'user-exited-allready'));
    }
  } else {
    next(createError(427, 'user-add-error'));
  }
}

const createUser = (userName: string): User => ({
  id: v4(),
  userName
})

export const userController = {
  addUser
}
