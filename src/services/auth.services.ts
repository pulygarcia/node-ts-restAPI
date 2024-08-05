import { Request, Response } from 'express';
import Users from '../models/user.model'
import {createJWT} from '../lib/utils'


export const registerUser = async (req:Request, res:Response) => {
    //Validate empty fields
    if(Object.values(req.body).includes('')){
        const error = new Error('Empty fields not allowed');

        return res.status(400).json({
            msg : error.message
        })
    }

    //Avoid duplicates
    const {userName, password} = req.body;
    const userExists = await Users.findOne({userName: userName}) //check in db
    if(userExists){
        const error = new Error('User already registered');

        return res.status(400).json({
            msg : error.message
        })
    }

    //Password extention
    const MIN_PASSWORD_LENGTH = 8;
    if(password.trim().length < MIN_PASSWORD_LENGTH){
        const error = new Error('Password should have at least 8 characters');

        return res.status(400).json({
            msg : error.message
        })
    }

    try {
        const user = new Users(req.body);

        await user.save();

        res.json({
            msg: "User registered correctly"
        })

    } catch (error) {
        console.log(error);
    }
}

export const verifyUser = async (req:Request, res:Response) => {
    //console.log(req.params.token); get token from url

    const user = await Users.findOne({token: req.params.token});

    //If NO valid token
    if(!user){
        const error = new Error('User not found');

        return res.status(401).json({
            msg : error.message
        })
    }

    //verify account
    try {
        user.verified = true;
        user.token = ''; //Token only has one use.
        await user.save();

        return res.json({
            msg : "User has been verified"
        });

    } catch (error) {
        console.log(error);
    }
}


export const login = async (req:Request, res:Response) => {
    //Check if userName exists in DB
    const user = await Users.findOne({userName: req.body.userName});
    if(!user){
        const error = new Error('User not found');

        return res.status(401).json({
            msg : error.message
        })
    }

    //compare password input with hashed password, if correct, return token
    if(await user.checkPassword(req.body.password)){
        const jwt = createJWT(user._id.toString())
        
        res.json({
            jwt
        })
    }else{
        const error = new Error('Wrong password');

        return res.status(401).json({
            msg : error.message
        })
    }
}