import express from 'express';
import {addMember, getAllMembers, deleteMember, modifyMember} from '../services/staff.services'

const router = express.Router();

router.post('/', addMember);
router.get('/', getAllMembers);
router.put('/', modifyMember);
router.delete('/', deleteMember);



export default router