import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  user: string;
  text: string;
  timestamp: Date;
}

const messageSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = mongoose.model<IMessage>('Message', messageSchema);
