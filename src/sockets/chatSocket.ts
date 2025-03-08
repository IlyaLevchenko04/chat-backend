import { Server } from 'socket.io';
import { createMessage, getMessages } from '../services/MessageService';

export const setupSocket = (io: Server) => {
  io.on('connection', async socket => {
    console.log('A user connected:', socket.id);

    // Send initial messages to the client
    const messages = await getMessages();
    socket.emit('initial_messages', messages);

    // Handle new messages
    socket.on('new_message', async message => {
      const { user, text } = message;
      const newMessage = await createMessage(user, text);
      io.emit('new_message', newMessage);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });
};
