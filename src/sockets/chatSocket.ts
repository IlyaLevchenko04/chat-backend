import { Server } from 'socket.io';
import { createMessage, getMessages } from '../services/messageService';

export const setupSocket = (io: Server) => {
  io.on('connection', async socket => {
    console.log('A user connected:', socket.id);

    const messages = await getMessages();
    socket.emit('initial_messages', messages);

    socket.on('new_message', async ({ user, text }) => {
      const newMessage = await createMessage(user, text);
      io.emit('new_message', newMessage);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });
};
