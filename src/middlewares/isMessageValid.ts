import { NextFunction, Request, Response } from 'express';
import { MessageJoiSchema } from '../models/MessageJoiSchema';

export const isMessageValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = MessageJoiSchema.validate(req.body);

    if (error) {
      throw new Error('Validation error');
    }

    next();
  } catch (error) {
    next(error);
  }
};
