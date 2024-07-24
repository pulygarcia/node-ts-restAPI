import { Request, Response } from 'express';
import Tickets from '../models/ticket.model'

export const saveTicket = async (req:Request, res:Response) => {

    if(Object.values(req.body).includes('')){
        const error = new Error('Empty ticket cannot be saved');

        return res.status(400).json({
            msg : error.message
        })
    }

    try {
        const ticket = new Tickets(req.body);

        await ticket.save();
    
        return res.json({
            msg: 'Ticket saved correctly'
        });

    } catch (error:any) {
        //console.log(error); detects if is ValidationError or other
        return res.status(500).json({
            msg: error.message
        })
    }
}


export const getTickets = async (req:Request, res:Response) => {
    try {
        const tickets = await Tickets.find().sort({date: -1});
    
        return res.json(tickets);

    } catch (error:any) {
        return res.status(500).json({
            msg: error.message
        })
    }
}