import express from 'express';
import {registerUser, login, verifyUser} from '../services/auth.services'

const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', login);



export default router