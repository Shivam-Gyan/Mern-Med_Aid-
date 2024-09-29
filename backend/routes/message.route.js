import express from 'express'
import { getAllMessage, sendMessage } from '../controllers/message.controller.js';
import { isAdminAuthenticated } from '../middleware/auth.js';

const messageRouter=express.Router();

messageRouter
.post('/send',sendMessage)
.get('/get-message',isAdminAuthenticated,getAllMessage)


export default messageRouter