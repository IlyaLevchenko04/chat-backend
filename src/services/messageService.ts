import { Message } from '../models/Message';

export const getMessages = async () => {
  return await Message.find().sort({ timestamp: 1 });
};

export const createMessage = async (user: string, text: string) => {
  const message = new Message({ user, text });
  await message.save();
  return message;
};
