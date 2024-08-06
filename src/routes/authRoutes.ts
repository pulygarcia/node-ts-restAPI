import express from 'express';
import {registerUser, login, verifyUser, user} from '../services/auth.services'
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', login);


//Needs auth - requires jwt
router.get('/user', authMiddleware, user)



export default router