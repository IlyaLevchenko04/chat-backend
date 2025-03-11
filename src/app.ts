import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import messageRoutes from './routes/messageRoutes';
import { setupSocket } from './sockets/chatSocket';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { CustomError } from './types/customError';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/messages', messageRoutes);

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

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
