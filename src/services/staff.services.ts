import { Request, Response } from 'express';
import mongoose from 'mongoose';
import StaffMembers from '../models/staff-member.model'


export const addMember = async (req:Request, res:Response) => {
    //Validate empty fields
    if(Object.values(req.body).includes('')){
        const error = new Error('Empty fields not allowed');

        return res.status(400).json({
            msg : error.message
        })
    }

    //Avoid duplicates
    const {phoneNumber} = req.body;
    const memberExists = await StaffMembers.findOne({phoneNumber: phoneNumber})
    if(memberExists){
        const error = new Error('Member is already in the database');

        return res.status(400).json({
            msg : error.message
        })
    }

    try {
        const member = new StaffMembers(req.body);

        await member.save();

        res.json({
            msg: "Member registered correctly"
        })

    } catch (error) {
        console.log(error);
    }
}


export const getAllMembers = async (req:Request, res:Response) => {
    try {
        const members = await StaffMembers.find();
    
        return res.json({
            members
        });

    } catch (error:any) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

export const getMemberByID = async (req:Request, res:Response) => {
    const id = req.params.id;
    //validate OBJECT ID with mongoose
    //TODO: move id validation to a helpers folder
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('Invalid ID provided')

        return res.status(400).json({
            msg: error.message
        })
    }

    //check if exists in db
    const member = await StaffMembers.findById(id);
    if(!member){
        const error = new Error('Member not found')

        return res.status(404).json({
            msg: error.message
        })
    }

    res.json(member);
}

export const modifyMember = async (req:Request, res:Response) => {
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
    const member = await StaffMembers.findById(id);
    if(!member){
        const error = new Error("The member that you're trying to update does not exists");

        return res.status(404).json({
            msg: error.message
        })
    }

    //Write received values if there are
    member.name = req.body.name || member.name;
    member.charge = req.body.charge || member.charge;
    member.salary = req.body.salary || member.salary;
    member.phoneNumber = req.body.phoneNumber || member.phoneNumber;
    member.adress = req.body.adress || member.adress;
    member.active = req.body.active;

    //save it updated
    try {
        await member.save();

        res.json({
            msg: 'Updated correctly'
        })
    } catch {
        const error = new Error('Could not update the member');

        return res.status(500).json({
            msg: error.message
        })
    }
}


export const deleteMember = async (req:Request, res:Response) => {
    //Same validations
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('Invalid ID provided')

        return res.status(400).json({
            msg: error.message
        })
    }

    //exists?
    const member = await StaffMembers.findById(id);
    if(!member){
        const error = new Error("The item that you're trying to update does not exists");

        return res.status(404).json({
            msg: error.message
        })
    }

    try {
        await member.deleteOne();

        res.json({
            msg: 'The member was deleted'
        })
    } catch (error) {
        console.log(error);
    }
}