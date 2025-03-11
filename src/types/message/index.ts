export interface IMessage extends Document {
  user: string;
  text: string;
  timestamp: Date;
}
