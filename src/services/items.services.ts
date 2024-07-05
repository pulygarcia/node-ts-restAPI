import { Request, Response } from 'express';
import Items from '../models/item.model'
import mongoose from 'mongoose';


export const createItem = async (req:Request, res:Response) => {

    if(Object.values(req.body).includes('')){
        const error = new Error('Please complete the fields');

        return res.status(400).json({
            msg : error.message
        })
    }

    try {
        const item = new Items(req.body);

        await item.save();
    
        return res.json({
            msg: 'Item added correctly'
        });

    } catch (error:any) {
        //console.log(error); detect if is ValidationError or other
        return res.status(500).json({
            msg: error.message
        })
    }
}


export const getAllItems = async (req:Request, res:Response) => {
    try {
        const items = await Items.find();
    
        return res.json({
            items
        });

    } catch (error:any) {
        return res.status(500).json({
            msg: error.message
        })
    }
}



export const findItemByID = async (req:Request, res:Response) => {
    const id = req.params.id;

    //check the type of the received id
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('Invalid ID provided')

        return res.status(400).json({
            msg: error.message
        })
    }

    const item = await Items.findById(id);
    if(!item){
        const error = new Error('Item not found with id: ' + id);

        return res.status(404).json({
            msg: error.message
        })
    }

    return res.json(
        item
    )
}


export const updateItem = async (req:Request, res:Response) => {
    const id = req.params.id;

    //check the type of the received id
    //TODO: move id validation to a helpers folder
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('Invalid ID provided')

        return res.status(400).json({
            msg: error.message
        })
    }
    //exists?
    const item = await Items.findById(id);
    if(!item){
        const error = new Error("The item that you're trying to update does not exists");

        return res.status(404).json({
            msg: error.message
        })
    }

    //Write received values if there are
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.price = req.body.price || item.price;
    item.category = req.body.category || item.category;

    //save it updated
    try {
        await item.save();

        res.json({
            msg: 'Updated correctly'
        })
    } catch {
        const error = new Error('Could not update the item');

        return res.status(500).json({
            msg: error.message
        })
    }
}