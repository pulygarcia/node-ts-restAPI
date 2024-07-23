import express from 'express';
import {getTickets, saveTicket} from '../services/tickets.services'

const router = express.Router();


router.get('/', getTickets);
router.post('/', saveTicket);



export default router