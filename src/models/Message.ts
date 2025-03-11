import mongoose, { Document, Schema } from 'mongoose';
import { IMessage } from '../types/message';

const messageSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = mongoose.model<IMessage>('Message', messageSchema);
