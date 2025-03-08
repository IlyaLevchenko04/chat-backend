import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import messageRoutes from './routes/messageRoutes';
import { setupSocket } from './sockets/chatSocket';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', messageRoutes);

// Database connection
connectDB();

// Create HTTP server and Socket.IO server
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Set up Socket.IO
setupSocket(io);

export { httpServer };
