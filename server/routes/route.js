import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';

const Route = express.Router();

Route.post('/add', addUser);
Route.get('/users', getUsers);

Route.post('/conversation/add', newConversation);

export default Route;