import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';

const Route = express.Router();

Route.post('/add', addUser);
Route.get('/users', getUsers); 

Route.post('/conversation/add', newConversation);
Route.post('/conversation/get', getConversation);

Route.post('/message/add', newMessage);
Route.get('/message/get/:id', getMessages);

export default Route;