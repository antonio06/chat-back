import * as business from '../business';
import { UserCredentials } from "../models";

export const addUserController = (userCredential: UserCredentials | null, res) => {
  business.addUsersToRoom(userCredential)
    .then((result) => {
      if (result) {
        res.status(200).send('user-add-successfully');
      } else {
        res.status(400).send('user-add-error');
      }
    })
    .catch(() => {
      res.status(400).send('have-any-error');
    });
}
