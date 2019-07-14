import { Response, Request } from 'express';
import { getMessageFromBody } from './mappers';
import { service } from './service';

const addMessage = async (req: Request, res: Response) => {
  const messageParams = getMessageFromBody(req.body)
  if (messageParams) {
    const message = await service.addMessage(messageParams);
    res.status(200).json(message)
  } else {
    res.status(427).json({message: 'conversation-add-error'});
  }
}

export const conversationController = {
  addMessage
}
