import express from 'express';
import {addMember, getAllMembers, deleteMember, modifyMember, getMemberByID} from '../services/staff.services'

const router = express.Router();

router.post('/', addMember);
router.get('/', getAllMembers);
router.get('/:id', getMemberByID);
router.put('/:id', modifyMember);
router.delete('/:id', deleteMember);



export default router