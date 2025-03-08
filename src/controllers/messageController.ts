import { Request, Response } from 'express';
import { getMessages, createMessage } from '../services/MessageService';

export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

export const postMessage = async (req: Request, res: Response) => {
  try {
    const { user, text } = req.body;
    const message = await createMessage(user, text);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
};
