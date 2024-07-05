import { Request, Response } from 'express';
import { items } from "../data/items";


export const findItemByID = (req:Request, res:Response) => {
    console.log('Getting an item by it`s ID...');

    const id = parseInt(req.params.id);
    if(!id){
        const error = new Error('Theres is no ID')
        res.status(400).json({
            msg: error.message
        })
    }

    return res.json({
        item: 'item example'
    })
}

export const getAllItems = (req:Request, res:Response) => {
    console.log('Getting all the items of the menu..');
    
    return res.json({
        items
    })
}