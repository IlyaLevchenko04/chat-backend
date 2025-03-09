import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import messageRoutes from './routes/messageRoutes';
import { setupSocket } from './sockets/chatSocket';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

connectDB();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

setupSocket(io);

export { httpServer };
