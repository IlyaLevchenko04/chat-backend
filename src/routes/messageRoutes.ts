import express from 'express';
import { getAllMessages, postMessage } from '../controllers/messageController';

const router = express.Router();

router.get('/messages', getAllMessages);
router.post('/messages', postMessage);

export default router;
