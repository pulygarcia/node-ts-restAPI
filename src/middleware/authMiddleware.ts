import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Users from '../models/user.model';

declare global {
    namespace Express {
      interface Request {
        user?: any;
      }
    }
}

export const authMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const token = req.headers.authorization.split(' ')[1];  //read the token excluding "Bearer"

            const privateKey = process.env.PRIVATE_KEY_JWT;
    
            if (!privateKey) {
                throw new Error('Private key is not defined in the environment variables');
            }

            const decoded = jwt.verify(token, privateKey);
            //console.log(decoded);

            if (typeof decoded === 'string') {
                throw new Error('Invalid token');
            }

            req.user = await Users.findById(decoded.id).select(
                "-password -verified -token -__v -_id"
             );
            //console.log(req.user);

            next();

        } catch {
            const error = new Error('Invalid token');
            res.status(403).json({
                msg: error.message
            })
        }
    }else{
        const error = new Error('Token not found or is not valid');
        res.status(403).json({
            msg: error.message
        })
    }
}