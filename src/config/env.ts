import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI =
  process.env.DB_HOST || 'mongodb://localhost:27017/chat-app';
