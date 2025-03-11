import express from 'express';
import { getAllMessages, postMessage } from '../controllers/messageController';
import { isMessageValid } from '../middlewares/isMessageValid';

const router = express.Router();

router.get('/', getAllMessages);
router.post('/', isMessageValid, postMessage);

export default router;
